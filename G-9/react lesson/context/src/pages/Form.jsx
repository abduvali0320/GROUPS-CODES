import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/Contex";
import { useParams } from "react-router-dom";

export default function Form() {
  const { handleSend, inpValue, getInpValue, setInpValue, clearInpValue } =
    useContext(DataContext);

  let { userId } = useParams();
  useEffect(() => {
    if (userId) {
      setInpValue(
        JSON.parse(localStorage.getItem("users")).find(
          (item) => item.id === +userId
        )
      );
    } else {
      clearInpValue();
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSend}>
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          onChange={getInpValue}
          name="name"
          required
          value={inpValue?.name}
        />
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          onChange={getInpValue}
          name="password"
          value={inpValue?.password}
          required
        />
        <TextField
          id="outlined-basic"
          onChange={getInpValue}
          label="email"
          variant="outlined"
          name="email"
          required
          value={inpValue?.email}
        />
        <TextField
          id="outlined-basic"
          label="phone"
          variant="outlined"
          onChange={getInpValue}
          name="phone"
          required
          value={inpValue?.phone}
        />
        <Button variant="contained" type="submit">
          send
        </Button>
      </form>
    </>
  );
}
