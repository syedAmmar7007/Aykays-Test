const ContentItems = ({contentItems, Head, Para }) => {
  return (
    <div className="content-item">
      <h1>{Head}</h1>
      <p>{Para} </p>
    </div>
  );
};
export default ContentItems;
