import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard page</h1>
      <div className="container">
        <div className="row justify-content-around mt-5">
          <div className="col-md-3 ">
            <div className="card border-primary ">
              <div className="card-body">
                <Link className="text-decoration-none " to={"/profile"}>
                  <h3 className="py-3 px-3">Profile</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-primary ">
              <div className="card-body ">
                <Link className="text-decoration-none" to={"/my-posts"}>
                  <h3 className="py-3 px-3">My Posts</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-primary ">
              <div className="card-body">
                <Link className="text-decoration-none" to={"/my-orders"}>
                  <h3 className="py-3 px-3">My Orders</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-primary ">
              <div className="card-body">
                <Link className="text-decoration-none" to={"/seller"}>
                  <h3 className="py-3 px-3">Seller Dashboard</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
