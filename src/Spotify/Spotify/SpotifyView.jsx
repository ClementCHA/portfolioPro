import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";

import Loader from "react-js-loader";

import SpotifyIco from "./Spotify.svgIcons";
import styles from "./spotify.module.scss";
import { style } from "@mui/system";

const SpotifyView = ({
  fetchUniqueArtist,
  choosenArtist,
  handleArtistChange,
  title,
  handleMusicChange,
  choosenSong,
  timeIListenThisSong,
  totalTimeIListenMusic,
  isLoading,
  areYouRespectingMe,
  youRespectMe,
}) => {
  let i = 0;
  const artistsSelect = fetchUniqueArtist.map((a) => (
    <MenuItem value={a} key={i++}>
      {a}
    </MenuItem>
  ));

  const convert = (num) => {
    let hours = 0;
    let day = 0;
    const numb = num / 60000;
    let int = Math.round(numb);
    if (int > 59) {
      hours = Math.floor(int / 60);
      int = int % 60;
      if (int < 10) {
        int = `0${int}`;
      }
    }

    let decimal = numb - Math.floor(numb);
    let second = Math.round(decimal * 60);
    if (second < 10) {
      second = `0${second}`;
    }
    if (hours > 23) {
      day = Math.floor(hours / 24);
      hours = hours % 24;
      return `${day}d ${hours}h ${int}m ${second}s`;
    } else return `${hours}h${int}m${second}s`;
  };

  const musicFromArtist = title.map((m) => (
    <MenuItem value={m} key={i++}>
      {m}
    </MenuItem>
  ));

  return (
    <>
      {isLoading && !areYouRespectingMe && (
        <>
          <div className={styles.respect}>
            <p className={styles.consent}> If you click on that button</p>{" "}
            <p className={styles.consentSec}>
              you consent having no judgement about my musical taste{" "}
            </p>
            <>
              <ArrowDownwardIcon
                style={{ fontSize: "80px", marginBottom: "20px" }}
              />

              <Button
                variant="contained"
                className={style.buttonConsent}
                size="large"
                style={{
                  backgroundColor: "#1BD760",
                  color: "black",
                  letterSpacing: "2px",
                }}
                onClick={youRespectMe}
              >
                Let's Play
              </Button>
            </>
          </div>
        </>
      )}
      {isLoading && areYouRespectingMe && (
        <div className={styles.respect}>
          <Loader
            type="ekvalayzer"
            bgColor={"#FFFFFF"}
            title={"Data Loading"}
            color={"#FFFFFF"}
            size={100}
          />
        </div>
      )}
      {!isLoading && (
        <div className={styles.spotifyApp}>
          <div className={styles.content}>
            <h1 className={styles.title}> Spotify data analysis</h1>
            <h2 className={styles.subtitle}>
              {" "}
              I listened to{" "}
              {
                <span className={styles.resultDetails}>
                  {convert(totalTimeIListenMusic)}
                </span>
              }{" "}
              of music in 2021.
            </h2>
            <p className={styles.taunt}>
              {" "}
              (If you're wondering if I love listening to music, the answer is
              clearly yes){" "}
            </p>
            <div className={styles.selectInput}>
              <FormControl className={styles.input}>
                <Select
                  value={choosenArtist}
                  onChange={handleArtistChange}
                  sx={{
                    "&& .MuiSelect-select": {
                      backgroundColor: "white",
                      borderRadius: "4px",
                    },
                    "&& .MuiFormControl-rool": {
                      justifyContent: "center",
                    },
                  }}
                >
                  {artistsSelect}
                </Select>
              </FormControl>
              {choosenArtist && (
                <a
                  href={`https://open.spotify.com/search/${choosenArtist}`}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.spotifyLogo}
                >
                  <SpotifyIco style={{ fontSize: "120px" }} />
                </a>
              )}
              {!choosenArtist && (
                <SpotifyIco
                  className={styles.spotifyLogoOff}
                  style={{ fontSize: "120px" }}
                />
              )}
            </div>

            {title.length > 0 && (
              <>
                <div className={styles.selectInput}>
                  <FormControl className={styles.input}>
                    <Select
                      value={choosenSong}
                      onChange={handleMusicChange}
                      sx={{
                        "&& .MuiSelect-select": {
                          backgroundColor: "white",
                          borderRadius: "4px",
                        },
                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #484850",
                          borderRadius: "5px 5px 0 0",
                        },
                      }}
                    >
                      {musicFromArtist}
                    </Select>
                  </FormControl>
                  {choosenSong && (
                    <a
                      href={`https://open.spotify.com/search/${choosenArtist}%20${choosenSong}`}
                      rel="noreferrer"
                      target="_blank"
                      className={styles.spotifyLogo}
                    >
                      <SpotifyIco style={{ fontSize: "120px" }} />
                    </a>
                  )}
                  {!choosenSong && (
                    <SpotifyIco
                      className={styles.spotifyLogoOff}
                      style={{ fontSize: "120px" }}
                    />
                  )}
                </div>
              </>
            )}
            {timeIListenThisSong > 0 && (
              <p className={styles.result}>
                I listened to{" "}
                {<span className={styles.resultDetails}>{choosenSong}</span>} by{" "}
                {<span className={styles.resultDetails}>{choosenArtist}</span>}{" "}
                during{" "}
                {
                  <span className={styles.resultDetails}>
                    {convert(timeIListenThisSong)}
                  </span>
                }{" "}
                in 2021.
              </p>
            )}
            {timeIListenThisSong === 0 && (
              <p className={styles.result}>
                What the hell spotify? I never listened that song the past year.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SpotifyView;
