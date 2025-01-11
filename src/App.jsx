import "./App.css";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import logo from "./assets/logo.svg";
import gsap from "gsap";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Bubbles from "./Bubbles";

function App() {
  const [timeLeft, setTimeLeft] = useState({
    seconds: "",
    minutes: "",
    hours: "",
  });

  const [randomBant, setRandomBant] = useState("");
  const [randomMotivation, setRandomMotivation] = useState("");

  const greetingContRef = useRef(null);

  useGSAP(() => {
    if (randomBant === "") {
      setRandomBant(Math.floor(Math.random() * (bants.length - 1) + 0.7));
      setRandomMotivation(Math.floor(Math.random() * (motivations.length - 1) + 0.7));
    }

    if (randomBant !== "") {
      const splitted = new SplitType(".split", { types: "words,chars" });
      const bant = document.querySelector(".bant");
      const greeting = document.querySelector(".greeting");

      const width = greeting.getBoundingClientRect().width;
      console.log(width);
      gsap
        .timeline({ delay: 1 })
        .from(greeting.querySelectorAll(".char"), {
          y: 100,
          stagger: 0.05,
          ease: "back.out",
        })
        .from(
          ".logo",
          {
            x: `-${greeting.offsetWidth + 40}px`,
            duration: 1.8,
            rotate: -720,
            ease: "power2.out",
            opacity: 0,
          },
          -0.05
        )
        .from(bant.querySelectorAll(".char"), {
          y: 100,
          delay: 0.4,
          stagger: 0.02,
        })
        .to(".loader-content", {
          yPercent: 100,
          ease: "power3.inOut",
          duration: 1.2,
          delay: 0.3,
        })
        .to(
          ".loader-container",
          {
            yPercent: -100,
            ease: "power3.inOut",
            duration: 1.2,
          },
          "<"
        );
    }
  }, [randomBant]);

  const bants = [
    "Ma sere",
    "Olodo adugbo",
    "Keep fooling",
    "No wise up",
    "Keep sleeping",
    "Dey play dey go",
  ];

  const motivations = [
    "Go and readdd",
    "Lock Tf in!",
    "Lo kawe jor",
    "No sleeping, No sleeping omo werey",
    "Lets get this!",
    "Get innn!",
  ];

  function getTimeRemaining(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);
    const timeDifference = target - now; // Difference in milliseconds

    if (timeDifference <= 0) {
      return "The target date has already passed!";
    }

    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));

    setTimeLeft({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
    });

    return {
      hours,
      minutes,
      seconds,
    };
  }
  const targetDate = "2025-01-27T00:00:00";
  useEffect(() => {
    setInterval(() => {
      getTimeRemaining(targetDate);
    }, 1000);
    () => {}, 1000;
  }, []);

  return (
    <main className="font-happy bg-[#E9E3C4] min-h-[100vh] overflow-hidden flex flex-col items-center justify-center text-black font-medium">
      {/* Loader */}
      <div className="bg-[#0F0F0F] h-[100vh] w-[100vw] flex flex-col justify-center items-center text-white loader-container fixed overflow-hidden z-[200] text-center">
        {/* Container for logo and text */}
        <div className="loader-content h-full w-full flex flex-col justify-center items-center text-[45px] -600:text-[28px]">
          <div className="split flex gap-[16px] -600:gap-[0px] justify-center items-center  ">
            <p ref={greetingContRef} className="font-write greeting">
              Dearest Gentle Techite
            </p>
            <img
              src={logo}
              alt="logo"
              className="max-w-[60px] logo -600:max-w-[40px]"
            />
          </div>

          <p className="mt-[70px]  split bant">{bants[randomBant]} 😂🫵🏾</p>
        </div>
      </div>

      {/*Container for Countdown  */}
      <div className="flex flex-col justify-center items-center gap-[10vw] -600:gap-[100px] font-medium text-center ">
        <h1 className="text-[45px] -600:text-[28px] flex flex-wrap justify-center items-end leading-[100%] gap-[20px]">
          <p>Your Exam starts in</p> <Bubbles className="mb-[5px]" />
        </h1>
        <p className="font-ibm text-[45px] -600:text-[28px]">
          {timeLeft.hours}hrs : {timeLeft.minutes}mins : {timeLeft.seconds}s
        </p>
        <p className="text-[36px] -600:text-[28px]">
          {motivations[randomMotivation]}
        </p>
      </div>

      {/* Credits */}
      <a
        href="https://x.com/t3ch_spawn"
        className="text-[18px] underline font-ibm fixed bottom-[20px] left-[50%] translate-x-[-50%]"
      >
        t3chspawn
      </a>
    </main>
  );
}

export default App;
