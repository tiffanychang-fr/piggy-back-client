import React from "react";

const PostDetailCard = ({ postData }) => {
  return (
    <div className="col-md-4 mt-3">
      <div className="card bg-secondary text-light ">
        <div className="card-body ">
          <div className="card-title">Title:{postData.state?.title}</div>
          <div className="card-text">
            Description:{postData.state?.description}
          </div>
          <div className="card-text">Country:{postData.state?.country}</div>
          <div className="card-text">City:{postData.state?.city}</div>
          <div className="card-text">Budget:{postData.state?.budget}</div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailCard;
