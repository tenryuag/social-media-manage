import React from "react";
import ShareButton from '../Share/ShareButton';

const Post = () => (
    <div className="blog-post">
        <h2 className="blog-post-title">sample post</h2>
        <p className="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>
        <p>Post Content</p>
        <div>
            <span>Compartir post</span>
            <div className="social">
                <ShareButton 
                    url="https://mangacasual.com" 
                    title="Sample blog post" 
                />
            </div>
        </div>
    </div>
);

export default Post;