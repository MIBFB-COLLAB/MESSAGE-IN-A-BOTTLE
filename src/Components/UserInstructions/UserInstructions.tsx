import './UserInstructions.css';

const UserInstructions = () => {
  return (
    <article className="instructions">
      <h4 className="user-instructions">
        Search your city for hidden treasures in the form of messages. 
      </h4>
      <h6 className="disclaimer">
        **please be advised that access to your current location is required for usability**
      </h6>
    </article>
  );
};

export default UserInstructions;
