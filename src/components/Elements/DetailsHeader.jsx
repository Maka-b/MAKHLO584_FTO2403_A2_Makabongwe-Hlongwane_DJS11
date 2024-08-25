const DetailsHeader = ({ podcastId, podcastData, episodeData,  }) => (
  <div className="relative w-full flex- flex-col ">
    <div className="w-full bg-gradient-to-1 from-transparent">
      <img  
      alt="Cover"
      src={podcastData.image}
      className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"/>
    </div>
    <div className="ml-5">
      <p className="font-bold sm:text-3xl text-xl"> {podcastData.title} </p>
    </div>
  </div>
);

export default DetailsHeader;
