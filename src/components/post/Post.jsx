import React from "react";

import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img src="" alt="post image" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit
        </span>
        <hr />
        <span className="postDate">2 hours ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        eligendi repudiandae ratione eos aliquid ducimus incidunt, debitis
        voluptas. Aliquam ad dolore non earum corrupti, laboriosam quibusdam
        porro pariatur exercitationem iste. Aliquam ad dolore non earum
        corrupti, laboriosam quibusdam porro pariatur exercitationem ist
      </p>
    </div>
  );
};

export default Post;
