// import React, { useEffect, useRef } from 'react';

// class TxtType {
//   constructor(el, toRotate, period, speed) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.speed = parseInt(speed, 10) || 200;
//     this.txt = '';
//     this.isDeleting = false;
//     this.tick = this.tick.bind(this); // Bind the tick method
//     this.tick();
//   }

//   tick() {
//     const i = this.loopNum % this.toRotate.length;
//     const fullTxt = this.toRotate[i];

//     if (this.isDeleting) {
//       this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//       this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

//     let delta = this.speed - Math.random() * 100;

//     if (this.isDeleting) {
//       delta /= 2;
//     }

//     if (!this.isDeleting && this.txt === fullTxt) {
//       delta = this.period;
//       this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//       this.isDeleting = false;
//       this.loopNum++;
//       delta = 500;
//     }

//     this.timeoutId = setTimeout(this.tick, delta);
//   }

//   stop() {
//     if (this.timeoutId) {
//       clearTimeout(this.timeoutId);
//     }
//   }
// }

// const Typewriter = ({ textArray, period = 2000, speed = 200, customClass }) => {
//   const textRef = useRef(null);
//   const txtTypeInstance = useRef(null);

//   useEffect(() => {
//     if (textRef.current) {
//       if (txtTypeInstance.current) {
//         txtTypeInstance.current.stop();
//       }
//       txtTypeInstance.current = new TxtType(textRef.current, textArray, period, speed);
//     }

//     return () => {
//       if (txtTypeInstance.current) {
//         txtTypeInstance.current.stop();
//       }
//     };
//   }, [textArray, period, speed]);

//   return (
//     <span
//       ref={textRef}
//       className={`typewrite ${customClass ? customClass : ''}`}
//       data-period={period}
//       data-type={JSON.stringify(textArray)}
//       style={{ '--speed': speed }}
//     ></span>
//   );
// };

// export default Typewriter;
import React, { useEffect, useRef } from 'react';

class TxtTypeOneWay {
  constructor(el, toRotate, period, speed) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.speed = parseInt(speed, 10) || 200;
    this.txt = '';
    this.tick = this.tick.bind(this); // Bind the tick method
    this.tick();
  }

  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    this.txt = fullTxt.substring(0, this.txt.length + 1); // Incrementally type the text
    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

    let delta = this.speed - Math.random() * 100;

    if (this.txt === fullTxt) {
      // Pause after completing the typing of one string
      delta = this.period;
      if (this.loopNum < this.toRotate.length - 1) {
        // Move to the next string if there are more
        this.loopNum++;
        setTimeout(this.tick, delta);
      }
      return; // Stop further typing if all strings are completed
    }

    this.timeoutId = setTimeout(this.tick, delta);
  }

  stop() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}

const TypewriterOneWay = ({ textArray, period = 2000, speed = 200, customClass }) => {
  const textRef = useRef(null);
  const txtTypeInstance = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      if (txtTypeInstance.current) {
        txtTypeInstance.current.stop();
      }
      txtTypeInstance.current = new TxtTypeOneWay(textRef.current, textArray, period, speed);
    }

    return () => {
      if (txtTypeInstance.current) {
        txtTypeInstance.current.stop();
      }
    };
  }, [textArray, period, speed]);

  return (
    <span
      ref={textRef}
      className={`typewrite ${customClass ? customClass : ''}`}
      style={{ '--speed': speed }}
    ></span>
  );
};

export default TypewriterOneWay;
