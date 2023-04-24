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

  {agentLists && console.log("agentLists", agentLists);}
  // {agentLists && console.log("agentLists", agentLists);}

  // Submit Rating & Comment
  const handleSubmit = () => {
    // const newUpdateAgent = {
    //   firstName: agentLists.first_name,
    //   lastName: agentLists.last_name,
    //   picture: agentLists.picture_url,
    //   rating: rateValue,
    //   comment: commentValue,
    // };

    const ratingScore = {
      "score": rateValue
    }

    // const api_post = async () => {
    //   const url = `http://134.122.98.10/api/invite/${agentID}/rate`;
    //   axios.post(url, ratingScore);

      console.log("agentID", agentID);
    //   console.log("url", url);
    // };

    const API_URL = `http://134.122.98.10/api/invite/${agentID}/rate`;

    const postData = async (data) => {
      try {
        const config = {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        };
        const response = await axios.post(`${API_URL}`, data, config);
        if (response.status === 200) {
          console.log(response.data); // handle successful response
        } else {
          console.error('Request failed with status code', response.status);
        }
      } catch (error) {
        console.error(error); // handle error
      }
    };
    
    postData({ score: '2'});



    console.log("newUpdateAgent", ratingScore);

    // Dummy api
    // api_post();
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
