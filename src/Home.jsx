import React from "react";

export default function Home() {

  
  return (
    <>
      {" "}
      {/* Loader */}
      <div className="bg-[#0F0F0F] h-[100vh] w-[100vw] flex flex-col justify-center items-center text-white loader-container fixed overflow-hidden z-[200] text-center">
        {/* Container for logo and text */}
        <div className="loader-content h-full w-full flex flex-col justify-center items-center text-[45px] -600:text-[24px]">
          <div className="split flex gap-[16px] -600:gap-[5px] justify-center items-center  ">
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
        <h1 className="text-[45px] -600:text-[24px] flex flex-wrap justify-center items-end leading-[100%] gap-[20px]">
          <p>Your Exam starts in</p> <Bubbles className="mb-[5px]" />
        </h1>
        <div className="flex flex-col gap-[20px] font-ibm ">
          {/* Container for buttons */}
          <div className="flex justify-center items-center gap-[10px]">
            {format !== "hours" ? (
              <button
                onClick={() => {
                  setFormat("hours");
                }}
                onTouchStart={() => {
                  scaleDown(".hours-btn");
                }}
                onMouseDown={() => {
                  scaleDown(".hours-btn");
                }}
                onTouchEnd={() => {
                  scaleUp(".hours-btn");
                }}
                onMouseUp={() => {
                  scaleUp(".hours-btn");
                }}
                className="bg-[black] text-white w-[120px] h-[46px] rounded-[8px] hours-btn"
              >
                Hours
              </button>
            ) : (
              <button
                onClick={() => {
                  setFormat("days");
                }}
                onTouchStart={() => {
                  scaleDown(".days-btn");
                }}
                onMouseDown={() => {
                  scaleDown(".days-btn");
                }}
                onTouchEnd={() => {
                  scaleUp(".days-btn");
                }}
                onMouseUp={() => {
                  scaleUp(".days-btn");
                }}
                className="bg-[black] text-white w-[120px] h-[46px] rounded-[8px] days-btn"
              >
                Days
              </button>
            )}
          </div>
          <p className="text-[45px] -600:text-[28px]">
            {format === "hours" ? (
              <>
                {" "}
                {timeLeftHours.hours}hrs : {timeLeftHours.minutes}mins :{" "}
                {timeLeftHours.seconds}s
              </>
            ) : (
              <>
                {" "}
                {timeLeftDays.days}days : {timeLeftDays.hours}hrs :{" "}
                {timeLeftDays.minutes}
                mins : {timeLeftDays.seconds}s
              </>
            )}
          </p>
        </div>
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
    </>
  );
}
