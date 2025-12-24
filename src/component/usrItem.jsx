const UsrItem = ({ user }) => {
  return (
    <div className="user">
      <div className="rating">{user.rating}</div>
      <div className="usr-txt">{user.usrTxt} </div>
      <div className="usr-pic">
        <img src={user.img} alt="" />
      </div>
      <div className="usr-nme">
        <h1>{user.name.usrNme}</h1>
        <p>{user.name.cntrNme}</p>
      </div>
    </div>
  );
};

export default UsrItem;
