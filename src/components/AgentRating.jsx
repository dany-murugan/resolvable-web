import React from "react";
import { Rating, Box } from "@mui/material/";
import StarIcon from "@mui/icons-material/Star";

const AgentRating = (props) => {
  const labels = {
    0.5: "0.5 Star",
    1: "1 Star",
    1.5: "1.5 Stars",
    2: "2 Stars",
    2.5: "2.5 Stars",
    3: "3 Stars",
    3.5: "3.5 Stars",
    4: "4 Stars",
    4.5: "4.5 Stars",
    5: "5 Stars",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.ratingChange(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
};

export default AgentRating;
