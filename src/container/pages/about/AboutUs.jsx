import React from "react";
import developer from "../../../assets/me.jpg";
import designer from "../../../assets/ghost.jpg";

import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="okiro__aboutus">
      <div className="okiro__aboutus-content">
        <h1>About</h1>
        <p>
          Created out of Fun, Okiro Blog is a creation of two people. The sole
          aim of the website is - well, nothing. Out of some excessive curiosity
          and that extra passion for coding ( sometimes not ), I developed it to
          learn-know-grow more. Talking on the topic of design, a beautiful
          layout ( feels to me ) is used to showcase your awesome ( or not
          awesome ) articles. The way it has been laid out tells itself a whole
          story. If this doesn't impress you, I don't know what will. You can
          know about the people behind this blog in the below section.
        </p>
      </div>
      <div className="okiro__aboutus-creators">
        <div className="okiro__aboutus-creators-div">
          <div className="okiro__aboutus-creators-div_img">
            <img src={developer} alt="creator" />
          </div>
          <div className="okiro__aboutus-creators-div_info">
            <div className="okiro__aboutus-creators-div_infohead">
              <h3>It's me</h3>
              <p>Programmer behind the Okiro</p>
            </div>
            <div className="okiro__aboutus-creators-div_infopara">
              <p>
                Just another complex human being with a complex thought system.
                Currently exploring the Web Development area with MERN as a
                guide. In my spare time, I think or Overthink.
              </p>
            </div>
          </div>
        </div>

        <div className="okiro__aboutus-creators-div">
          <div
            className="okiro__aboutus-creators-div_info"
            style={{ textAlign: "right" }}
          >
            <div className="okiro__aboutus-creators-div_infohead">
              <h3>It's ghost</h3>
              <p>Designer behind the Okiro</p>
            </div>
            <div className="okiro__aboutus-creators-div_infopara">
              <p>
                Ghost is a free and open source blogging platform written in
                JavaScript and designed to simplify the process of online
                publishing for individual bloggers as well as online
                publications.
              </p>
            </div>
          </div>

          <div className="okiro__aboutus-creators-div_img">
            <img src={designer} alt="creator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
