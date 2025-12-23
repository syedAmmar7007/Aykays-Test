const CardItems = ({cardsItem ,itemHead , itemPara}) => {
    return (
      <div className="cards">
        <h1>{itemHead}</h1>
        <p>{itemPara}</p>
      </div>
    );
}

export default CardItems;