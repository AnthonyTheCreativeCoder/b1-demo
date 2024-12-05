import { useAnimation } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export const useKeyboardScroll = (carouselScrollWidth, carouselContainerRef) => {
    const [hover, setHover] = useState(false);
    const [shift, setShift] = useState(false);
    const [scrolledWidth, setScrolledWidth] = useState(0);
    const keyboardScrollAnim = useAnimation();

    useEffect(() => {
        const handleShiftKeyDown = (e) => {
            if (e.key === "Shift") {
                setShift(true);
            }
        };

        const handleShiftKeyUp = (e) => {
            if (e.key === "Shift") {
                setShift(false);
            }
        };

        window.addEventListener("keydown", handleShiftKeyDown);
        window.addEventListener("keyup", handleShiftKeyUp);

        return () => {
            window.removeEventListener("keydown", handleShiftKeyDown);
            window.removeEventListener("keyup", handleShiftKeyUp);
        };
    }, []);

    const handleKeyboardScrolling = useCallback(async (e) => {
        if (hover && shift) {
            const totalPossibleScroll = carouselScrollWidth - (carouselContainerRef.current?.clientWidth || 0);
            if (e.deltaY > 0) { // Scroll down
                if (scrolledWidth < totalPossibleScroll) {
                    const maxPossibleScroll = Math.min(100, totalPossibleScroll - scrolledWidth);
                    setScrolledWidth((prevScrolledWidth) => prevScrolledWidth + maxPossibleScroll);
                    keyboardScrollAnim.start({
                        x: -(scrolledWidth + maxPossibleScroll)
                    });
                }
            } else { // Scroll up
                if (scrolledWidth > 0) {
                    const maxPossibleScroll = Math.min(100, scrolledWidth);
                    setScrolledWidth((prevScrolledWidth) => prevScrolledWidth - maxPossibleScroll);
                    keyboardScrollAnim.start({
                        x: (-scrolledWidth + maxPossibleScroll)
                    });
                }
            }
        }
    }, [hover, shift, keyboardScrollAnim, scrolledWidth, carouselScrollWidth, carouselContainerRef]);

    return {
        setHover,
        handleKeyboardScrolling,
        keyboardScrollAnim
    };
};
