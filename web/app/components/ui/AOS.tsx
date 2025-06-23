"use client";
import React, { ReactNode, useRef } from "react";
// import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type Props = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  y?: string | number;
  opacity?: boolean;
};

const AOS = ({
  children,
  duration = 1,
  delay = 0,
  opacity = true,
  y = "5px",
}: // onAnimationComplete = null,
Props) => {
  // gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!container.current) return;
      // console.log(container);
      gsap.from(container.current, {
        y: y,
        opacity: opacity ? 0 : 1,
        duration: duration,
        delay: delay,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: container.current,
          // start: "top 70%", // Triggers when element is 100px from bottom of viewport
          start: "top bottom", // Triggers when element is 100px from bottom of viewport
          // end: "+=100%",
          // end: "bottom top", // Ends when element leaves viewport
          // end: "bottom 90%", // Ends when element leaves viewport
          // toggleActions: "restart none none reset", // Key change: restart animation on each scroll
          // markers: true,
          // scrub: true,
        },
      });
    },
    { scope: container }
  );

  // console.log(delay);
  return (
    <div className='aos' ref={container}>
      {children}
    </div>
  );
};

export default AOS;
