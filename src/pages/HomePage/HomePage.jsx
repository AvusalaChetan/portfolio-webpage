import { useEffect, useRef } from "react";
import HomeRightBox from "../../components/HomeRightBox";
import styles from "./home.module.css";

const HomePage = () => {
const nameRef = useRef(null)
  return (
    <>
      <div
        id="home"
        className="min-h-screen w-full mx-auto z-40 flex justify-center items-center px-4 "
      >
        <div className="w-full h-auto py-8 px-2 sm:px-4 md:px-5 flex flex-col justify-center items-center gap-3">
          <div className="text-center md:text-left">
            <span className="text-xl sm:text-2xl font-bold block mb-2">
              Hello, my name is
            </span>
            <h1
              ref={nameRef}
              id="name"
              className={`name sm:text-5xl md:text-6xl lg:text-[110px]  tracking-wider uppercase ${styles.name}`}
            >
              avusala chetan
              {/* ANTON FONT USED BY SHARENCE */}
            </h1>
          </div>
          <div className="w-full md:w-160 lg:w-fit md:px-2 md:py-4 md:mr-11 mt-6 hidden lg:block md:block">
            {/* <HomeRightBox /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
