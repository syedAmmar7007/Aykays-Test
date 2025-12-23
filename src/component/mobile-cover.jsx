

const MobileCover = ({image}) => {
  return (
    <>
      <div className="mobile-cover">
        <img src={image} alt="" />
      </div>
      <div className="vol-btn"></div>
      <div className="pwr-btn"></div>
      <div className="camera"></div>
    </>
  );
};

export default MobileCover;