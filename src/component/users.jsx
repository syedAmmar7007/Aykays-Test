import UsrItem from "./usrItem";

const User = ({ user }) => {
    return (
      <>
        <h1 className="usr-head">What Our Users Say</h1>

        <div className="user-container">
          {user.map((user) => (
            <UsrItem user={user} />
          ))}
        </div>
        <div className="btn-lst">See More</div>
      </>
    );
};

export default User;