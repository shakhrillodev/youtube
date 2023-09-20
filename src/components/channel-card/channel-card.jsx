import { CheckCircle } from "@mui/icons-material"
import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Loader from "../loader/loader"

const ChannelCard = ({item}) => {
  if(item.length===0){
    return <Loader />
  }
  return (
    <Box sx={{ 
        width: '100%', 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'    
        }}>
        <Link to={`/channel/${item.id.channelId ? item.id.channelId : item.id}`}>
                <CardMedia           
                component="img"
                image={item?.snippet?.thumbnails?.high?.url}
                alt={item?.snippet?.channelTitle} 
                sx={{
                    borderRadius: '50%',
                    width: '200px',
                    height: '200px',
                    margin: '0px auto',
                    border: '1px solid white'
                }}
                />
                <CardContent>
                    <Typography variant="subtitle1" fontWeight={'bold'} textAlign={'center'} >
                        {item?.snippet?.channelTitle ? item?.snippet?.channelTitle : item?.snippet?.title} <CheckCircle sx={{ color: 'yellow', fontSize: '16px' }} />
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={'bold'} textAlign={'center'} sx={{opacity: '0.7'}} >
                        {isNaN(item?.statistics?.hiddenSubscriberCount) ? null : parseInt(item?.statistics?.subscriberCount).toLocaleString() + ' subscribers'} 
                    </Typography>
                </CardContent>
        </Link>
    </Box>

  )
}

export default ChannelCard