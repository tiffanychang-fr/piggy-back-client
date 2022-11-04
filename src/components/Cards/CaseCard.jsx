import React from "react";
import { Link } from "react-router-dom";

const CaseCard = ({ singleCase }) => {
  return (
    <div className="col-md-4">
      <div className="card bg-dark text-light py-3 my-2">
        <div className="card-body">
          <h1>🤖</h1>
          <div className="card-title">Case Id: {singleCase._id}</div>
          <div className="card-subtitle text-muted">
            accepted by @{singleCase.receivedBy.username}
          </div>
          <p className="card-text">
            Post description: {singleCase.post.description}
          </p>
          <p className="card-text mb-3">
            ☎️{singleCase.receivedBy?.phoneNumber} 💌
            {singleCase.receivedBy?.email}
          </p>
          <Link to={{ pathname: `/my-posts/details/${singleCase.post._id}` }}>
            <button className="btn btn-warning">Post Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
