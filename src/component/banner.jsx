import MobileCover from "./mobile-cover";

const Banner = ({image , height = "800px"}) => {
    return (
      <div className="banner">
        <div className="text-container">
          <h1>
            Stay Connected Stay Social <br /> Stay You!
          </h1>
          <p>
            A place where friendships grow, communities thrive, and moments turn
            into unforgettable experiences. Whether you're looking to reconnect
            with old friends, build new relationships, or share what matters
            most to you – MyBindle is your home on the internet.
          </p>
          <button>Get Started</button>
        </div>
        <div className="mobile-img" style={{height}}>
          <MobileCover image={image}></MobileCover>
          <div className="comnt">🔥 Seamless Connections</div>
          <div className="comnt2">🌎 Discover & Explore</div>
        </div>
      </div>
    );
}

export default Banner;