import { Box, Stack } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from "../";

const Videos = ({videoData}) => {
  if (!videoData.length) {
    return <Loader />
  }

  return (
    <Stack 
    direction={'row'} 
    flexWrap={'wrap'}
    gap={'10px'}
    >
        {videoData.map((item, idx) => { 
          return (
          (item.id.channelId || item.id.videoId) && <Box key={idx} flex={'1 0 300px'} >
            {item.id.videoId && <VideoCard key={item.id.videoId} item={item} />}
            {item.id.channelId && <ChannelCard key={item.id.channelId} item={item} />}
          </Box>)
        })}
    </Stack>
  )
}

export default Videos