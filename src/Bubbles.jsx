import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export default function Bubbles({ className }) {
  useGSAP(() => {
    // gsap.set(".updating-bubble", { y: -5, autoAlpha: 0.3 });

    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.1,
        yoyo: true,
      })
      .to(".updating-bubble", {
        autoAlpha: 0,
        stagger: 0.3,
        y: 3,
        delay: 0.2,
      })
      .to(".updating-bubble", {
        autoAlpha: 0.5,
        stagger: 0.3,
        y: -3,
      });
  });
  return (
    <div className={`flex gap-[7px] mt-[5px] ${className}`}>
      <span className="updating-bubble"></span>
      <span className=" updating-bubble"></span>
      <span className="updating-bubble"></span>
    </div>
  );
}
