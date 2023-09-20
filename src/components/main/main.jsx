import { Container, Stack, Typography, Box } from "@mui/material"
import { colors } from "../../constants/colors"
import { useEffect, useState } from "react"
import { Categories, Videos } from "../"
import { ApiServices } from "../../services/api.services"
const Main = () => {
  const [selected, setSelected] = useState("New")
  const [videoData, setVideoData] = useState([])

  const selectedHandler = (type)=>{
    setSelected(type)
  }

  useEffect(()=>{
    const getData = async ()=>{
      const data = await ApiServices.fetching(`search?part=snippet&q=${selected}`)
      setVideoData(data)
    }
    getData()
  }, [ selected ])

  return (
    <Stack>
      <Categories selectedHandler={selectedHandler} selected={selected} />
      <Box p={2} maxHeight={'90vh'}>
        <Container maxWidth={'90%'}>
          <Typography variant="h4" mb={2} fontWeight={"bold"}> 
            {selected}<span style={{ color: colors.secondary }}> Videos</span>
          </Typography>
          <Videos videoData={videoData} />
        </Container>
      </Box>
    </Stack>
  )
}

export default Main