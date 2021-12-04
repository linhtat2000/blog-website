import React from "react";

import "./singlepost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="" alt="post image" />
        <h1 className="singlePostTile">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>James</b>
          </span>
          <span className="singlePostDate">2 hours ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum
          cumque assumenda ullam amet quasi ratione voluptate aliquam nam
          consequatur! Consequatur provident rerum dolorem tempore deleniti qui
          reiciendis ducimus dignissimos! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Accusamus, consectetur!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
