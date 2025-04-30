import React from "react";

interface Timeframes {
  daily: {
    current: number;
    previous: number;
  };
  weekly: {
    current: number;
    previous: number;
  };
  monthly: {
    current: number;
    previous: number;
  };
}

interface CardProps {
  title: string;
  icon: string;
  timeframes: Timeframes;
  activeTimeframe: "daily" | "weekly" | "monthly";
  backgroundColor: string;
}

const Card: React.FC<CardProps> = ({
  title,
  icon,
  timeframes,
  activeTimeframe,
  backgroundColor,
}) => {
  const { current, previous } = timeframes[activeTimeframe];

  return (
    <article className="relative rounded-[15px] overflow-hidden min-w-[327px] md:min-w-[188px] flex-grow">
      <div
        className="absolute h-[120px] w-full bg-orange-500 rounded-t-[15px] overflow-hidden"
        style={{ backgroundColor: backgroundColor }}
      >
        <img
          src={`./images/${icon}`}
          alt={`${title} icon`}
          className="absolute top-[-8px] right-[12px] w-[76px] h-[76px] pointer-events-none"
        />
      </div>

      <section className="relative mt-[38px] px-6 pb-6 lg:gap-3 pt-8 lg:px-8 lg:pb-8 flex flex-col justify-between hover:bg-navy-800 bg-navy-900 rounded-t-[15px] min-h-[calc(100%-70px)]">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-white text-preset-5-medium">{title}</h2>
          <img
            src="./images/icon-ellipsis.svg"
            alt="Ellipsis icon"
            className="w-[21px] h-[5px] cursor-pointer"
          />
        </header>
        <div className="flex md:flex-col justify-between items-center md:items-start lg:gap-2">
          <p className="text-white text-preset-3 md:text-preset-1">
            {current}hrs
          </p>
          <p className="text-navy-200 text-preset-6">
            Last{" "}
            {activeTimeframe === "daily"
              ? "Day"
              : activeTimeframe === "weekly"
              ? "Week"
              : "Month"}{" "}
            - {previous}hrs
          </p>
        </div>
      </section>
    </article>
  );
};

export default Card;
