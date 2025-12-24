const TextContainer = ({donttxtcon, banrtxtCon, head, para, btn }) => {
  return (
    <div className="text-container">
      <h1>{head} </h1>
      <p>{para} </p>
      <button>{btn}</button>
    </div>
  );
};
export default TextContainer;
