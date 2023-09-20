import { Search } from "@mui/icons-material"
import { Paper, IconButton } from "@mui/material"
import { colors } from "../../constants/colors"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  const onSearch = (e)=>{
    e.preventDefault()
    navigate(`/search/${searchValue}`)
  }

  return <Paper onSubmit={(e)=> onSearch(e)} component={'form'} sx={{
    pl: 2,
    boxShadow: 'none',
    border: `1px solid ${colors.secondary}`
  }} >
    <input type="text" placeholder="Search..." className="search-bar-input" defaultValue={searchValue} onChange={ e => setSearchValue(e.target.value) } />
    <IconButton type="submit" >
      <Search /> 
    </IconButton>
  </Paper>
}

export default SearchBar