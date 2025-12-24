import { useGSAP } from "@gsap/react";
import TextContainer from "./text-container";
import gsap from "gsap";

const Donate = ({ donttxtcon }) => {
  useGSAP(() => {
    gsap.from(".donate", {
      y: 300,
      opacity: 0,
      delay: 5,
      duration:1,
    })
  })
  return (
    <div className="donate-container">
        <div className="donate">
          {donttxtcon.map((item) => (
            <TextContainer
              donttxtcon={donttxtcon}
              head={item.head}
              para={item.para}
              btn={item.btn}
            />
          ))}
        <div className="donate-img1">
          <img src="../img/iPhone 14.png" alt="" />
        </div>
        <div className="donate-img2">
          <img src="../img/iPhone 14 Pro.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Donate;