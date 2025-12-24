import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContentItems from "./contentItems";

const Content = ({contentItems}) => {
  useGSAP(() => {
    gsap.to(".content-img", {
      // rotate: 20,
      // duration: 1,
      // delay: 1,
    });
  });

  return (
    <div className="banner">
      <div className="circle">
        <div className="left-cover">
          <img src="../img/Group 1.png" alt="" />
        </div>
        <div className="right-cover">
          <img src="../img/Group 2.png" alt="" />
        </div>
      </div>
      <div className="content-right">
        <h1>Where Every Click Sparks a Connection!</h1>
        <p>
          A small act of kindness today can create a lifetime of impact for
          someone in need. Give from the heart and change a life!
        </p>
        <div className="content-items">
          {contentItems.map((item) => (
            <ContentItems contentItems={ contentItems} Head={item.head} Para={item.para} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;