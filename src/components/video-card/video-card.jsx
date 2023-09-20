import { Card, CardActionArea, CardMedia, CardContent, Typography, Stack, Avatar } from "@mui/material"
import moment from "moment/moment";
import { Link } from "react-router-dom";

const VideoCard = ({item}) => {
  return (
    <Card sx={{position: 'relative', width: {xs: '90vw', md: 'auto'}}}>
        <CardActionArea>
            <Link to={`/video/${item.id.videoId}`} >
                <CardMedia           
                component="img"
                height="200px"
                width={'maxWidth'}
                image={item?.snippet?.thumbnails?.high?.url}
                alt={item?.snippet?.description.slice(0, 20)} 
                />
            </Link>
            <CardContent sx={{
                height: '220px'
            }} >
                <Link to={`/video/${item.id.videoId}`} >
                    <Typography variant="caption" sx={{ opacity: '0.6' }} >
                        { moment(item?.snippet?.publishedAt).fromNow() }
                    </Typography>
                    <Typography variant="subtitle1">
                        {item?.snippet?.title.slice(0, 40)}
                    </Typography>
                    <Typography sx={{ opacity: '0.6' }} variant={'subtitle2'} >
                        {item?.snippet?.description.slice(0, 80)+'...'}
                    </Typography>
                </Link>
                <Link to={`/channel/${item.snippet.channelId}`}>
                    <Stack direction={'row'} sx={{
                        position: 'absolute',
                        bottom: '10px',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Avatar src={item?.snippet?.thumbnails?.high?.url} sx={{ marginRight: '10px' }} ></Avatar>
                        <Typography sx={{ fontWeight: 'bold' }} >{item?.snippet?.channelTitle}</Typography>
                    </Stack>
                </Link>
            </CardContent>
        </CardActionArea>
    </Card>

  )
}

export default VideoCard