import './UserInstructions.css';

const UserInstructions = () => {
  return (
    <article className="instructions">
      <p>
        Search your city for hidden treasures in the form of messages. After sharing your
        current location, you will be taken to a list of messages in your area,
        their titles and the distance from your current location. To view
        directions to a message's location, click the "GET DIRECTIONS"
        button. Once you are within 1/4 mile of the message's location, you will
        be able to select the "VIEW STORY" button to unlock the content of the
        message. Happy searching!
      </p>
      <p className="disclaimer">
        **please be advised that access to your current location is required for full usability**
      </p>
    </article>
  );
};

export default UserInstructions;
