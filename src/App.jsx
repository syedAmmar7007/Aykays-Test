import { useGSAP } from "@gsap/react";
import "./App.css";
import gsap from "gsap";
import Logo from "./component/logo";
import Banner from "./component/banner";
import Cards from "./component/card";

function App() {
  let bannerImage = "../img/mobile.png";
  let cardsItem = [
    {
      heading: "🔥 Seamless Connections",
      para: "Stay in touch with friends, family, and like-minded people with just a tap.",
    },
    {
      heading: "📸 Share Your Story",
      para: "Upload photos, videos, and updates to let the world know what’s happening in your life.",
    },
    {
      heading: "💬 Real-Time Chat",
      para: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.",
    },
    {
      heading: "🔒 Privacy First",
      para: "Your data, your control. We prioritize your privacy with world-class security.",
    },
    {
      heading: "🌎 Discover & Explore",
      para: "Find trending content, join communities, and follow pages that match your interests.",
    },
    {
      heading: "💼 Grow Your Business",
      para: "Use our platform to market your brand, connect with customers, and build meaningful relationships.",
    },
  ];
  useGSAP(() => {
    gsap.from(".mobile-img", {
      x: -800,
      opacity:0,
      duration: 1,
      delay: 0.5,
    });
  })
  return (
    <>
      {/* // banner */}
      <div className="container">
        <Logo />
        <Banner image={bannerImage} />
      </div>
      {/* main */}
      <main>
        <div className="heading">
          <h1>Features That Keep You Hooked!</h1>
          <h3>Meet, Chat, Share – Anytime, Anywhere!</h3>
        </div>
        <Cards cardsItem={cardsItem}></Cards>
      </main>
    </>
  );
}

export default App;
