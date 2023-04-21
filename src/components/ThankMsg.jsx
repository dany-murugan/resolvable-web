import React from "react";
import { Card, CardContent, Typography } from "@mui/material/";

const ThankMsg = () => {
  return (
    <Card
      color="success"
      sx={{ width: 247, height: 423 }}
      style={{ backgroundColor: "#34568B" }}
    >
      <CardContent>
        <Typography variant="h4" color="white" mt={10}>THANK YOU</Typography>
        <Typography variant="h4" color="white">for your Rating</Typography>
      </CardContent>
    </Card>
  );
};

export default ThankMsg;
