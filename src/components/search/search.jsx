import { useParams } from "react-router-dom"
import { Videos } from "..";
import { useEffect, useState } from "react";
import { ApiServices } from "../../services/api.services";
import { Box, Container, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
const Search = () => {
  const {id} = useParams()

  const [videoData, setVideoData] = useState([])

  useEffect(()=>{
    const getData = async ()=>{
        const data = await ApiServices.fetching(`search?part=snippet&q=${id}`)
        setVideoData(data)
      }
      getData()
  }, [id])
  return (
    <Box p={2} maxHeight={'90vh'}>
    <Container maxWidth={'90%'}>
        <Typography variant="h4" mb={2} fontWeight={"bold"}> 
        {id}<span style={{ color: colors.secondary }}> Videos</span>
        </Typography>
        <Videos videoData={videoData} />
    </Container>
    </Box>
  )
}

export default Search