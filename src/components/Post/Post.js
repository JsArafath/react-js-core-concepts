import React from 'react';

const postStyles = {
    backgroundColor: '#C0E5DF',
    margin:"25px",
    padding:"20px",
    border: "1px solid skyblue",
    borderRadius : "10px"

}

const Post = ({post:{title,body}}) => {
    return (
        <div style={postStyles}>
            <h3>Title:{title}</h3>
            <small>{body}</small>
        </div>
    );
};

export default Post;

