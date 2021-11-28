/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import IllustrationHero from "./assets/illustration-hero.svg";
import MusicIcon from "./assets/icon-music.svg";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-pBlue bg-bgPatternDesk bg-contain bg-no-repeat sm:bg-bgPatternMobi-to-t">
      <div
        className="bg-white rounded-xl xl:w-1/4 md:w-1/2 mx-8 filter drop-shadow-lg "
        id="card"
      >
        <img
          className="w-full h-30 rounded-t-xl object-cover"
          src={IllustrationHero}
          alt="Illustration"
        />

        <div className="p-8 text-center" id="card-content">
          <div className="mb-8">
            <h1 className="font-black text-2xl align-middle text-drkBlue mb-4">
              Order Summary
            </h1>
            <p className="lg:px-12 text-dsBlue break-words ">
              You can now listen to millions of songs, audio books, and podcasts
              on any device anywhere you like!
            </p>
          </div>
          <div className="p-4 flex flex-row mb-8 bg-vPaleBlue rounded-xl  ">
            <div className="flex ">
              <img src={MusicIcon} alt="music Icon" />
            </div>
            <div className="flex flex-col ml-4">
              <h3 className="font-bold text-drkBlue">Annual Plan</h3>
              <p className="text-dsBlue flex">$59.99/year</p>
            </div>
            <div className="flex items-center ml-auto">
              <a
                className="hover:text-indigo-500 text-sm text-brBlue underline flex flex-1"
                href="#"
              >
                Change
              </a>
            </div>
          </div>
          <div>
            <button className=" filter drop-shadow-xl w-full hover:bg-indigo-500 tracking-wider font-bold text-sm bg-brBlue text-white px-8 py-4 rounded-xl">
              Proceed To Payment
            </button>
            <button className="w-full mt-8 mb-2 font-bold text-sm  text-dsBlue hover:text-drkBlue ">
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
