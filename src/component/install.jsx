import CardItems from "./cardsItems";

const Install = ({ download }) => {
  return (
    <div className="install-container">
      <div className="text">
        <h1>How to Install Our App</h1>
        <p>
          Getting started is quick and easy! Follow these simple steps to
          install and start using MyBindle today.
        </p>
      </div>
      <div className="number">
        <span className="nmr-txt">01</span>
        <div className="nmr-lne"></div>
        <span className="nmr-txt">02</span>
        <div className="nmr-lne"></div>
        <span className="nmr-txt">03</span>
      </div>
      <div className="download">
        {download.map((item) => (
          <CardItems
            download={download}
            itemHead={item.head}
            itemPara={item.para}
          />
        ))}
      </div>
    </div>
  );
};

export default Install;
