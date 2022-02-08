import React from "react";
import styles from "./styles.module.scss";
import Typewriter from "typewriter-effect";

const NotFound = () => {
  return (
    <div className={styles.app}>
      <Typewriter
        options={{
          strings: [
            "404 - Page Not Found.",
            "What are you doing here ?",
            "Of course I added a 404 page, nerd.",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default NotFound;
