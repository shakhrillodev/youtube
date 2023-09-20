import { Avatar, Box, Stack, Typography } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from 'react-player/youtube'
import { useEffect, useState } from "react"
import { ApiServices } from "../../services/api.services"
import { Loader, Videos } from "../"
import { Message, ThumbUp, Visibility } from "@mui/icons-material"

const VideoDetails = () => {
  const [details, setDetails] = useState([])
  const [suggested, setSuggested] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    const getData = async ()=>{
      try {
        const data = await ApiServices.fetching(`videos?part=snippet,statistics&id=${id}`)
        const suggestedData = await ApiServices.fetching(`search?part=snippet,id&relatedToVideoId=${id}`)
        setDetails(data[0])
        setSuggested(suggestedData)
        console.log(data);
        
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id])

  if (!details.snippet) {
    return <Loader />    
  }

  return (
    <Box width={'100%'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} >
      <Box width={{xs: '100%', md: '75%'}} padding={2} >
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player" />
        {}
        <Typography variant="h5" fontWeight={"Bold"} mt={2} >
          {details.snippet.title}
        </Typography>
        <Typography variant="caption" sx={{ opacity: '0.6' }} >
          {details.snippet.description}
        </Typography>
        <Stack direction={'row'} gap={'20px'} sx={{ opacity:'0.7' }} mt={2} >
          <Stack variant="subtitle1" direction={'row'} alignItems={'center'} gap={'10px'}>
            <Visibility />  {parseInt(details.statistics.viewCount).toLocaleString()} views
          </Stack>
          <Stack variant="subtitle1" direction={'row'} alignItems={'center'} gap={'10px'}>
            <ThumbUp /> {parseInt(details.statistics.likeCount).toLocaleString()} likes
          </Stack>
          <Stack variant="subtitle1" direction={'row'} alignItems={'center'} gap={'10px'}>
            <Message /> { parseInt(details.statistics.commentCount).toLocaleString()} comments
          </Stack>
        </Stack>
        <Link to={`/channel/${details?.snippet?.channelId}`}>
          <Stack direction={'row'} alignItems={'center'} pt={3}>
            <Avatar src={details?.snippet?.thumbnails?.high?.url} sx={{ marginRight: '10px' }} ></Avatar>
            <Typography sx={{ fontWeight: 'bold' }} >{details?.snippet?.channelTitle}</Typography>
          </Stack>
        </Link>
      </Box>
      <Box width={{xs:'100%', md: '25%'}} p={2} overflow={'scroll'} maxHeight={'120vh'} className='suggested' >
        <Videos videoData={suggested} />
      </Box>
    </Box>
  )
}

export default VideoDetails