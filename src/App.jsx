import { useGSAP } from "@gsap/react";
import "./App.css";
import gsap from "gsap";
import Logo from "./component/logo";
import Banner from "./component/banner";
import Cards from "./component/card";
import Content from "./component/content";
import Install from "./component/install";
import Donate from "./component/donate";
import User from "./component/users";
import Footer from "./component/footer";

function App() {
  let bannerImage = "../img/mobile.png";
  const user = [
    {
      rating: "⭐⭐⭐⭐⭐",
      usrTxt:
        "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online",
      img: "../img/2.jpg",
      name: {
        usrNme: "Amit K",
        cntrNme: "India",
      },
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      usrTxt:
        "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
      img: "../img/1.jpg",
      name: {
        usrNme: "Emily R",
        cntrNme: "USA",
      },
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      usrTxt:
        "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
      img: "../img/3.jpg",
      name: {
        usrNme: "Sophie M",
        cntrNme: "UK",
      },
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      usrTxt:
        "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand",
      img: "../img/4.jpg",
      name: {
        usrNme: "Javier L",
        cntrNme: "Spain",
      },
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      usrTxt:
        "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
      img: "../img/5.jpg",
      name: {
        usrNme: "Lucas T",
        cntrNme: "Brazil",
      },
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      usrTxt:
        "I’ve tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense",
      img: "../img/6.jpg",
      name: {
        usrNme: "Nora S",
        cntrNme: "Canada",
      },
    },
  ];
  const banrtxtCon = [
    {
      head: "Stay Connected Stay Social Stay You!",
      para: "A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.",
      btn: "Get Started",
    }]
    const donttxtcon=[{
      head: "Be the Reason Someone Smiles Today!",
      para: "Your generosity can change lives every donation brings hope, support, and a brighter future. Give today and make a difference!",
      btn: "Donate now",
    },
  ];
  const download = [
    {
      head: "Download",
      para: "Open Play Store or App Store",
    },
    {
      head: "Install App",
      para: "The app will install automatically.",
    },
    {
      head: "Ready to Use",
      para: "Sign up or log in to start exploring!",
    },
  ];
  const contentItems = [
    {
      head: "🎥 Short Videos & Reels",
      para: "Share engaging, bite-sized content that keeps everyone entertained.",
    },
    {
      head: "🔔 Smart Notifications",
      para: "Stay updated on what matters without the noise.",
    },
    {
      head: "👥 Interest-Based Communities",
      para: "Join groups and discussions that match your passion.",
    },
  ];
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
        <Banner image={bannerImage} banrtxtCon={banrtxtCon} />
      </div>
      {/* main */}
      <main>
        <Cards cardsItem={cardsItem} />
        <Content contentItems={contentItems} />
        <Install download={download} />
        <Donate donttxtcon={donttxtcon} />
        <User user={user} />
      </main>
      {/* footer */}
      <footer>
      <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
