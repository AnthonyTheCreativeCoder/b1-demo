import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const usePostSelect = () => {
    // Selected post
    const [selectedPost, setSelectedPost] = useState(null);

    // Post variants (disappear on exit)
    const carouselVariants = useMemo(() => ({
        exit: {
            transition: {
                staggerChildren: 0
            }
        }
    }), []);
    
    const postVariants = useMemo(() => ({
        exit: {
            opacity: 0,
            transition: {
                ease: "easeInOut",
                duration: 0
            }
        }
    }), []);

    // For navigating to post page
    const navigate = useNavigate();
    useEffect(() => {
        if (selectedPost) {
            navigate(`/work/${selectedPost.id}`);
        }
    }, [selectedPost, navigate]);

    return {
        selectedPost,
        setSelectedPost,
        postVariants,
        carouselVariants
    }
}
