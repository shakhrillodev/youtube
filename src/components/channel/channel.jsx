import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ApiServices } from "../../services/api.services"
import { ChannelCard, Videos } from "../"

const Channel = () => {
  const {id} = useParams()
  const [channelData, setChannelData] = useState([])
  const [channelVideos, setChannelVideos] = useState([])
  useEffect(()=>{
    const getData = async()=>{
      try {
        const data = await ApiServices.fetching(`channels?part=snippet,statistics&id=${id}`)
        setChannelData(data[0])
        const videoData = await ApiServices.fetching(`search?part=snippet,id&channelId=${id}&order=date`)
        setChannelVideos(videoData)
      
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id])

  return (
    <Box>
      <Box width={'100%'} height={"30vh"}  sx={{
      backgroundImage: `url(${channelData?.brandingSettings?.image?.bannerExternalUrl})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover"
      }} >
      </Box>
      <Box sx={{
        mt: '-100px',
      }} >
        <ChannelCard item={channelData} />        
      </Box>
      <Box p={2} >
        <Videos videoData={channelVideos} />
      </Box>
    </Box>
  )
}

export default Channel