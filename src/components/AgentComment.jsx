import React, { useState, useContext } from "react";
import Context from "../Context";
import classes from "./AgentComment.module.scss";

const AgentComment = (props) => {
  const [comment, setComment] = useState("");
  const [txtValid, settxtValid] = useState(false);
  const { agentLists } = useContext(Context);

  const submitCTA = (e) => {
    e.preventDefault();
    if (!comment) {
      settxtValid(true);
    } else {
      settxtValid(false);
      //Send to Parent Component
      props.commentDone(comment);
      props.submitDone(true);
    }
  };

  return (
    <section className={classes.commentSection}>
      <h2 className="intro-section-title">Thanks for your rating!</h2>
      <form className={classes.formComment} onSubmit={(e) => submitCTA(e)}>
        <textarea
          id="agentComment"
          name="comment"
          placeholder={`Would you like to leave a note for ${agentLists.first_name}?`}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        {txtValid && (
          <p className={classes.errorMsg}>Please insert a comment !</p>
        )}
        <button className={classes.btnSubmit}>Submit</button>
      </form>
    </section>
  );
};

export default AgentComment;
