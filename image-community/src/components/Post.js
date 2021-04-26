import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image"
// import Text from "../elements/Text"

import {Grid, Image, Text} from "../elements"

const Post = (props) => {

    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape="circle" src={props.src} />
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{ props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid >
                    <Image shape="rectangle" src={props.src}/>
                </Grid>
                <Grid padding="16px">
                    <Text bold>댓글{props.comment_cnt}개</Text>
                </Grid>
            <div>user profile / user name / insert_dt /</div>
            <div>contents</div>
            <div>image</div>
            <div>comment</div>
        </Grid>
            
        </React.Fragment>
    );
}

Post.defaultProps = {
    user_info: {
        user_name: "himchan",
        user_profile: "https://timesofindia.indiatimes.com/photo/67586673.cms"
    },
    image_url: "https://timesofindia.indiatimes.com/photo/67586673.cms",
    contents: "고양임!",
    comment_cnt: 10,
    insert_dt: "2021-02-27 10:00:00",
};

export default Post;