import { Box, Rating, Slider, Switch, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Contact() {
  const [value, setValue] = useState(2);

  const [value_1, setValue_1] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue_1(newValue);
  };
  return (
    <div>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(value);
        }}
      />
      {value}

      <Box sx={{ width: 1000 }}>
        <Slider
          value={value_1}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>

      <Switch
        {...{ inputProps: { "aria-label": "Switch demo" } }}
        defaultChecked
      />
    </div>
  );
}
