import { TableCell, TableContainer, TableRow, Table, Paper, TableHead, TableBody } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

    var [value,setValue] = useState([]);
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            setValue(value = response.data);
        })
    })

  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value.map((row, index) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home