import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  const playSong = artistData?.attributes?.id?.map((song) => song.id);

  console.log(artistData);

  if (isFetchingArtistDetails) {
    return <Loader title={"Loading artist details"} />;
  }
  if (error) {
    return <Error />;
  }
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData?.data[0]} />
      <RelatedSongs
        data={artistData?.data[0].views["top-music-videos"]?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={() => handlePlayClick(song, i)}
      />
    </div>
  );
};

export default ArtistDetails;
