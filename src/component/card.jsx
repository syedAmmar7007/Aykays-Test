import { useGSAP } from "@gsap/react";
import CardItems from "./carsItems";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cards = ({ cardsItem }) => {
  useGSAP(() => {
    //   gsap.from(".cards-container", {
    //     scale: 0,
    //     opacity: 0,
    //     duration:2,
    //     delay: 3,
    //   });
    // })
    gsap.from(".cards-container", {
      duration: 2,
      rotationX: 45,
      scaleX: 0.8,
      z: -300,
      delay:3,
    })
});

    return (
      <div className="cards-container">
        {cardsItem.map((item) => (
            <CardItems cardsItem={cardsItem} itemHead={item.heading} itemPara={item.para} /> 
        ))}
      </div>
    );
}

export default Cards;