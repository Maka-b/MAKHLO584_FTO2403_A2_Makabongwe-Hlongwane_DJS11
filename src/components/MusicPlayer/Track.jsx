import React from 'react';

const Track = ({ isPlaying, isActive, activeEpisode }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeEpisode?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeEpisode?.title ? activeEpisode?.title : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeEpisode?.subtitle ? activeEpisode?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
