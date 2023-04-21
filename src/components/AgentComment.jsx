import React, { useState } from "react";
import { Box, TextField, Button, Stack, Typography } from "@mui/material/";
import SendIcon from "@mui/icons-material/Send";

const AgentComment = (props) => {
  const [comment, setComment] = useState("");
  const [txtValid, settxtValid] = useState(false)

  const submitCTA = (e) => {
    if (!comment) {
      settxtValid(true)
    } else {
      settxtValid(false)
      //Send to Parent
      props.commentDone(comment);
      props.submitDone(true);
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mt: 2, mb: 2, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{}} >
          <TextField
            id="outlined-multiline-static"
            label="Comment"
            multiline
            rows={6}
            value={comment}
            onChange={(event) => {
              setComment(event.target.value);
            }}
            />
        </div>
        {txtValid && <Typography variant="body2" color="red" style={{textAlign: 'left'}} mb={2}>Please insert a comment !</Typography>}
      </Box>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={(e) => submitCTA()}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default AgentComment;
