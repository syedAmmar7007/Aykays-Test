import MobileCover from "./mobile-cover";
import TextContainer from "./text-container";

const Banner = ({ image, height = "800px", banrtxtCon}) => {
  return (
    <div className="banner">
      {banrtxtCon.map((item) => (
        <TextContainer banrtxtCon={banrtxtCon} head={item.head} para={item.para} btn={item.btn} />
      ))}
      <div className="mobile-img" style={{ height }}>
        <MobileCover image={image}></MobileCover>
        <div className="comnt">🔥 Seamless Connections</div>
        <div className="comnt2">🌎 Discover & Explore</div>
      </div>
    </div>
  );
};

export default Banner;