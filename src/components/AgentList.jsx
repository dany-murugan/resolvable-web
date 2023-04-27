import React, { useContext, useState } from "react";
import axios from "axios";
import Context from "../Context";
import AgentRating from "./AgentRating";
import AgentComment from "./AgentComment";
import ThankMsg from "./ThankMsg";
import classes from "./AgentList.module.scss";

const AgentList = () => {
  const { agentLists, agentID } = useContext(Context);

  // Reverse Props from child to parent
  const [rateValue, setRateValue] = useState(null);
  const [commentValue, setCommentValue] = useState("");
  const [rnrDone, setrnrDone] = useState(false);

  // Submit Rating & Comment
  const handleSubmit = () => {

    // ******** axios post RATE *****************//
    const API_URL_RATE = `http://134.122.98.10/api/invite/${agentID}/rate`;
    const postDataRate = async (data) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        };
        const response = await axios.post(`${API_URL_RATE}`, JSON.stringify(data), config);
        if (response.status === 201) {
          console.log(response.data);
        } else {
          console.error('Request failed with status code', response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };
    postDataRate({ score: rateValue });


    // ******** axios post COMMENT *****************//
    const API_URL_COMMENT = `http://134.122.98.10/api/invite/${agentID}/comment`;
    const postDataComment = async (data) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        };
        const response = await axios.post(`${API_URL_COMMENT}`, JSON.stringify(data), config);
        if (response.status === 201) {
          console.log(response.data);
        } else {
          console.error('Request failed with status code', response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };
    postDataComment({ comment: commentValue });

  };

  if (rnrDone) {
    handleSubmit();
  }

  return (
    <div className={classes.profileContainer}>
      <section className={classes.profileSection}>
        <div className={classes.profileAvatar}>
          <img src={agentLists.picture_url} alt={agentLists.first_name} />
        </div>
        <div className={classes.profileUsername}>
          {agentLists.first_name} {agentLists.last_name}
        </div>
      </section>
      <hr />

      {!rnrDone && (
        <Context.Provider value={{ rateValue, agentLists }}>
          {!rateValue && (
            <AgentRating
              ratingChange={(rateValue) => setRateValue(rateValue)}
            />
          )}

          {rateValue && (
            <AgentComment
              commentDone={(commentValue) => setCommentValue(commentValue)}
              submitDone={(ctaValue) => setrnrDone(ctaValue)}
            />
          )}
        </Context.Provider>
      )}

      {rnrDone && <ThankMsg agentLists={agentLists} />}
    </div>
  );
};

export default AgentList;
