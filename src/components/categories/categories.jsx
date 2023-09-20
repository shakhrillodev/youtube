import { Stack } from '@mui/material'
import React from 'react'
import { categories, colors } from '../../constants/colors'
const Categories = ({selected, selectedHandler}) => {

  return (
    <Stack direction={"row"} className='category-container' sx={{ overflowX: 'scroll'}} >
        {categories.map((item, i )=> (
        <button key={item.name + 'asd'} className='category-btns' style={{ backgroundColor: item.name === selected ? colors.secondary : "white" }} onClick={()=>{selectedHandler(item.name)}}>
            <span style={{color: item.name === selected ? "white" : colors.secondary, marginRight: "15px" }} >{item.icon}</span>
            <span className='category-name' style={{color: item.name === selected ? "white" : ''}}>{item.name}</span>
        </button>))}
    </Stack>
  )
}

export default Categories