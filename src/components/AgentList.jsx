import React, { useContext, useState } from "react";
import axios from "axios";
import Context from "../Context";
import AgentRating from "./AgentRating";
import AgentComment from "./AgentComment";
import ThankMsg from "./ThankMsg";
import classes from "./AgentList.module.scss";

const AgentList = () => {
  const { agentLists } = useContext(Context);

  // Reverse Props from child to parent
  const [rateValue, setRateValue] = useState(null);
  const [commentValue, setCommentValue] = useState("");
  const [rnrDone, setrnrDone] = useState(false);

  // Agent Name hardcoded
  const searchAgent = agentLists.filter(
    (agentList) => agentList.firstName === "Rudi"
  );

  {agentLists && console.log("agentLists", agentLists);}

  // Submit Rating & Comment
  const handleSubmit = () => {
    const newUpdateAgent = {
      id: searchAgent[0].id,
      title: searchAgent[0].title,
      firstName: searchAgent[0].firstName,
      lastName: searchAgent[0].lastName,
      picture: searchAgent[0].picture,
      rating: rateValue,
      comment: commentValue,
    };

    const api_post = async () => {
      const agentId = searchAgent[0].id;
      const url = `https://dummyapi.io/data/v1/update/:${agentId}`;
      const headers = { "app-id": "643fc8bbe214cb4bfbbf8c76" };
      axios.put(url, newUpdateAgent, { headers });
    };

    console.log("newUpdateAgent", newUpdateAgent);

    // Dummy api
    // api_post();
  };

  if (rnrDone) {
    handleSubmit();
  }

  return (
    <div className={classes.profileContainer}>
      {searchAgent.map((agent) => {
        const titleSurname = agent.title.toUpperCase() + " " + agent.lastName.toUpperCase();
        return (
          <div key={agent.id}>
            <section className={classes.profileSection}>
              <div className={classes.profileAvatar}>
                <img
                  src={agent.picture}
                  alt={agent.firstName}
                />
              </div>
              <div className={classes.profileUsername}>{agent.firstName} {agent.lastName}</div>
            </section>
            <hr />

            {!rnrDone && (
              <Context.Provider value={{ rateValue, searchAgent }}>
                {!rateValue && (
                  <AgentRating ratingChange={(rateValue) => setRateValue(rateValue)} />
                )}

                {rateValue && (
                  <AgentComment 
                    commentDone={(commentValue) => setCommentValue(commentValue)}
                    submitDone={(ctaValue) => setrnrDone(ctaValue)}
                  />
                )}
              </Context.Provider>
            )}

            {rnrDone && <ThankMsg searchAgent={searchAgent} />}
          </div>
        );
      })}
    </div>
  );
};

export default AgentList;
