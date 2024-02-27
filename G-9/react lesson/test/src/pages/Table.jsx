import { useContext } from "react";
import { DataContext } from "../context/Contex";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
export default function Users() {
  const { users } = useContext(DataContext);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> name </TableCell>
            <TableCell> password </TableCell>
            <TableCell> email </TableCell>
            <TableCell> phone </TableCell>
            <TableCell> action </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => {
            return (
              <TableRow key={user.id}>
                <TableCell> {user.name} </TableCell>
                <TableCell> {user.password} </TableCell>
                <TableCell> {user.email} </TableCell>
                <TableCell> {user.phone} </TableCell>
                <TableCell>
                  <Button variant="contained" color="warning">
                    edit
                  </Button>
                  <Button variant="contained" color="error">
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
