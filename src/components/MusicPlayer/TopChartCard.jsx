import React from "react";
import { Link } from "react-router-dom";
import PlayPause from "../PlayPause";

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="w-full flex flex-row items-center hover:bg-[rgb(127,127,127)] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="-w-20 h-20 rounded-lg"
        src={song?.images?.coverart}
        alt={song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <div className="text-xl font-bold text-yellow-500">
          <Link className="hover:border-b-2" to={`/songs/${song.key}`}>
            {song?.title}
          </Link>
        </div>

        <div className="text-base text-gray-300">
          <Link
            className="hover:border-b-2"
            to={`/artists/${song?.artists?.[0].adamid}`}
          >
            {song?.subtitle}
          </Link>
        </div>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

export default TopChartCard;
