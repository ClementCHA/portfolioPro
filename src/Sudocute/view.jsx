import React from "react";
import "./style.scss";

const SudocuteView = () => {
  return (
    <div className="app">
      {" "}
      <div className="iframeContainer">
        <p
          className="title"
          onClick={() => window.open("https://www.sudocute.com", "_url")}
        >
          SUDOCUTE
        </p>
        <iframe
          title="sudocute"
          className="iframe"
          src="https://www.sudocute.com/"
          scrolling="auto"
        />
      </div>
    </div>
  );
};

export default SudocuteView;
