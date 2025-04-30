import { useState } from "react";

interface ProfileProps {
  activeButton: string;
  setActiveButton: (button: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ activeButton, setActiveButton }) => {
  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <section className="flex flex-col mt-[81px] md:mt-0 w-full lg:w-[255px] lg:min-h-[520px]">
      <header className="flex flex-row items-center bg-purple-600 gap-6 rounded-[15px] z-10 relative p-[39px_37px_32px_32px] md:py-[34.5px] md:pl-8 lg:flex-col lg:items-start lg:gap-4 lg:pl-[32px] lg:pt-[32px] lg:pr-[85px] lg:pb-[92px] lg:gap-[40px]">
        <img
          src="../src/assets/image-jeremy.png"
          alt="Jeremy Robson's Profile Picture"
          className="rounded-full w-16 h-16 border-white border-4"
        />
        <div className="flex flex-col items-start justify-center text-white gap-2 lg:gap-1">
          <p className="text-navy-200 text-preset-6">Report for</p>
          <h1 className="text-preset-4 lg:text-preset-2">Jeremy Robson</h1>
        </div>
      </header>
      <nav className="flex pb-6 pt-12 bg-navy-900 rounded-[15px] -mt-6 z-0 relative md:px-[134px] lg:flex-col lg:gap-2 lg:pb-0 lg:bg-navy-900 lg:rounded-[15px] lg:items-start lg:pl-8 lg:pb-[40px] lg:gap-[21px] lg:-mt-4">
        <button
          className={`flex-1 text-preset-5-regular text-center ${
            activeButton === "Daily" ? "text-white" : "text-purple-500"
          }`}
          onClick={() => handleButtonClick("Daily")}
          aria-label="View daily reports"
        >
          Daily
        </button>
        <button
          className={`flex-1 text-preset-5-regular text-center ${
            activeButton === "Weekly" ? "text-white" : "text-purple-500"
          }`}
          onClick={() => handleButtonClick("Weekly")}
          aria-label="View weekly reports"
        >
          Weekly
        </button>
        <button
          className={`flex-1 text-preset-5-regular text-center ${
            activeButton === "Monthly" ? "text-white" : "text-purple-500"
          }`}
          onClick={() => handleButtonClick("Monthly")}
          aria-label="View monthly reports"
        >
          Monthly
        </button>
      </nav>
    </section>
  );
};

export default Profile;
