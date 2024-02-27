import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../context/Contex";

export default function Form() {
  const { handleSend, inp_value, get_inp_value } = useContext(DataContext);

  return (
    <>
      <form onSubmit={handleSend}>
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          onChange={get_inp_value}
          name="name"
          required
          value={inp_value.name}
        />
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          onChange={get_inp_value}
          name="password"
          value={inp_value.password}
          required
        />
        <TextField
          id="outlined-basic"
          onChange={get_inp_value}
          label="email"
          variant="outlined"
          name="email"
          required
          value={inp_value.email}
        />
        <TextField
          id="outlined-basic"
          label="phone"
          variant="outlined"
          onChange={get_inp_value}
          name="phone"
          required
          value={inp_value.phone}
        />
        <Button variant="contained" type="submit">
          send
        </Button>
      </form>
    </>
  );
}
