import { Box, Stack } from "@mui/material"
import { SearchBar } from "../"
import { logo } from "../../constants/logo"
import { colors } from "../../constants/colors"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <Stack direction={'row'} p={2} alignItems={'center'} justifyContent={"space-between"} sx={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        backgroundColor: colors.primary
    }}>
        <Link to={'/'}>
            <img src={logo} alt="logo" height={30} />
        </Link>
        <SearchBar />
        <Box></Box>
    </Stack>
  )
}

export default Navbar