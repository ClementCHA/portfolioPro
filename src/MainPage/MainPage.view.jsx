import React from "react";

import styles from "./style.module.scss";

const MainPageView = () => {
  return (
    <div>
      <div className={styles.presentation}>
        <div className={styles.presentationBlock}>
          <p>
            Front-End Developer <br /> &nbsp;JavaScript - React
          </p>
          <a href="/contact" className={styles.contactMe}>
            Contact me
          </a>
        </div>

        <pre className={styles.presentationBlock}>
          <div className={styles.presentationDetailJSON}>
            <span> &#123;</span>
            <p>
              &nbsp; &nbsp;
              <span className={styles.presentationKey}>"Lastname"</span>:
              <span className={styles.presentationValue}>"CHARLES",</span>
            </p>
            <p>
              &nbsp; &nbsp;
              <span className={styles.presentationKey}>"Firstname"</span>:
              <span className={styles.presentationValue}>"Clément",</span>
            </p>
            <p>
              &nbsp; &nbsp;
              <span className={styles.presentationKey}>"Email"</span>:
              <span className={styles.presentationValue}>
                "clement.charlesC@gmail.com",
              </span>
            </p>
            <p>
              &nbsp; &nbsp;
              <span className={styles.presentationKey}>"Birth"</span>:
              <span className={styles.presentationValue}>"04/10/1994",</span>
            </p>
            <p>
              &nbsp; &nbsp;
              <span className={styles.presentationKey}>"Description"</span>:
              <span className={styles.presentationValue}>
                "Code enthusiast",
              </span>
            </p>
            <p>
              &nbsp; &nbsp;
              <span className={styles.presentationKey}>"WebSite"</span>: &#123;
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"Github"</span>:
              <span className={styles.presentationValue}>
                "github.com/ClementCHA",
              </span>
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"Linkedin"</span>:
              <span className={styles.presentationValue}>
                "linkedin.com/in/clementCHAR/"
              </span>
            </p>
            <p>&nbsp; &nbsp; &#125;,</p>
            <p>
              &nbsp; &nbsp;
              <span className={styles.presentationKey}>"Engines"</span>: [
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"JavaScript",</span>
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"HTML",</span>
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"CSS",</span>
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"Node.js"</span>
            </p>
            <p>&nbsp; &nbsp; ],</p>
            <p>
              &nbsp; &nbsp;
              <span className={styles.presentationKey}>"Dependencies"</span>:
              &#123;
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"React.js"</span>:
              <span className={styles.presentationValue}>"17.0.2",</span>
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"Redux"</span>:{" "}
              <span className={styles.presentationValue}>"4.1.2",</span>
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"SASS"</span>:{" "}
              <span className={styles.presentationValue}>"7.0.1",</span>
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"Express"</span>:
              <span className={styles.presentationValue}> "4.17.2",</span>
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"SQL"</span>:{" "}
              <span className={styles.presentationValue}>"1.0.0",</span>
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"PostgreSQL"</span>:
              <span className={styles.presentationValue}>"1.0.0"</span>
            </p>
            <p>&nbsp; &nbsp; &#125;,</p>
            <p>
              &nbsp; &nbsp;
              <span className={styles.presentationKey}>"devDependencies"</span>:
              &#123;
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"Coffee"</span>:{" "}
              <span className={styles.presentationValue}>"1.0.0",</span>
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"Travelling"</span>:
              <span className={styles.presentationValue}>"12.0.4",</span>
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"Video Games"</span>:
              <span className={styles.presentationValue}>"20.0.0",</span>
            </p>
            <p>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <span className={styles.presentationKey}>"Chess"</span>:{" "}
              <span className={styles.presentationValue}>"10.1.0"</span>
            </p>
            <p>&nbsp; &nbsp; &#125;</p>
            <span> &#125;</span>
          </div>
        </pre>
      </div>
    </div>
  );
};

export default MainPageView;
