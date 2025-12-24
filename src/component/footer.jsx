const Footer = () => {
    return (
      <div className="footer-container">
        <div className="footer">
          <div className="ftr-txt">
            <h1>Join the Fun – Download MyBindle Now!</h1>
            <p>
              Your Social Network, Your Way Download MyBindle Now and Be a Part
              of a Community That’s Always Evolving!
            </p>
          </div>
          <div className="ftr-img">
            <img src="../img/App Store.png" alt="" width={140} />
            <img src="../img/Play Store.png" alt="" width={150} />
          </div>
          <div className="ftr-mbl-img">
            <div className="mbl-img1">
              <img src="../img/m1.png" alt="" width={250}/>
            </div>
            <div className="mbl-img2">
              <img src="../img/m2.png" alt="" width={250}/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;