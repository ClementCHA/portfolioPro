import React, { useState, useEffect } from "react";

import DATA from "./spotifyData.json";
import SpotifyView from "./SpotifyView";

const SpotifyContainer = () => {
  const [artists, setArtists] = useState([]);
  const [choosenArtist, setChoosenArtist] = useState("");
  const [title, setTitle] = useState([]);
  const [choosenSong, setChoosenSong] = useState("");
  const [timeIListenThisSong, setTimeIListenThisSong] = useState(null);
  const [totalTimeIListenMusic, setTotalTimeIListenMusic] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [areYouRespectingMe, setAreYouRespectingMe] = useState(false);

  useEffect(() => {
    fetchTotalTime();
  }, []);

  useEffect(() => {
    areYouRespectingMe && fetchArtists();
  }, [areYouRespectingMe]);

  const youRespectMe = () => {
    setAreYouRespectingMe(true);
  };

  const fetchArtists = () => {
    const mappedArtist = DATA.map((a) => a.artistName);

    setArtists(mappedArtist);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  const fetchTotalTime = () => {
    const totalTime = DATA.map((t) => t.msPlayed);
    setTotalTimeIListenMusic(totalTime.reduce((f, s) => f + s));
  };

  const fetchUniqueArtist = artists
    .filter((e, i) => artists.indexOf(e) === i)
    .map((a) => a.charAt(0).toUpperCase() + a.slice(1))
    .sort();

  const handleArtistChange = (e) => {
    setTimeIListenThisSong(null);
    setChoosenArtist(e?.target.value);
    let unique = {};
    DATA.filter((el) => el.artistName === e.target.value)
      .map((s) => s.trackName)
      .forEach((e) => {
        if (!unique[e]) {
          unique[e] = true;
        }
      });
    setTitle(Object.keys(unique).sort());
  };

  const calculateListeningTime = (song) => {
    const songMs = DATA.filter((el) => el.trackName === song).map(
      (t) => t.msPlayed
    );

    const totalMs = songMs.reduce((f, s) => f + s);
    setTimeIListenThisSong(totalMs);
  };

  const handleMusicChange = (e) => {
    setChoosenSong(e.target.value);
    calculateListeningTime(e.target.value);
  };

  return (
    <SpotifyView
      totalTimeIListenMusic={totalTimeIListenMusic}
      timeIListenThisSong={timeIListenThisSong}
      title={title}
      fetchUniqueArtist={fetchUniqueArtist}
      choosenArtist={choosenArtist}
      handleArtistChange={handleArtistChange}
      handleMusicChange={handleMusicChange}
      choosenSong={choosenSong}
      isLoading={isLoading}
      youRespectMe={youRespectMe}
      areYouRespectingMe={areYouRespectingMe}
    />
  );
};

export default SpotifyContainer;
