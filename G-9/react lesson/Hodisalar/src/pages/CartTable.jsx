import React, { useContext } from 'react'
import { Datas } from '../context/Context'
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';
export default function CartTable() {
  const { cart, handleDel } = useContext(Datas)
  return (
    <div className='px-10' >
      <table border={1} className='table' >
        <thead>
          <tr>
            <th>№</th>
            <th> category </th>
            <th> brand </th>
            <th> color </th>
            <th> title </th>
            <th> price </th>
            <th> count </th>
            <th> action </th>
          </tr>
        </thead>
        <tbody>
          {
            cart.length > 0 ? (
              cart.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th>{index + 1}</th>
                    <td> {item.category} </td>
                    <td> {item.brand} </td>
                    <td> {item.color} </td>
                    <td> {item.title} </td>
                    <td> {item.price} </td>
                    <td> {item.count} </td>
                    <td> 
                      <Button variant='contained' color='error' title='delete' 
                        onClick={() => handleDel(item.id)}
                      >  <ClearIcon /> </Button>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <th colSpan={100} className='text-center'>no Data...</th>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
