import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const ConnectNav = () => {
  const { user, getToken } = useContext(AuthContext);

  return (
    <div className="d-flex justify-content-around">
      {getToken &&
        user &&
        user.stripe_seller &&
        user.stripe_seller.charges_enabled && (
          <>
            <div className="container">
              <div className="row justify-content-around my-3">
                <div className="col-md-3 text-center m-2">
                  <div className="card bg-dark text-light">
                    <div className="card-body">
                      <h2>👾</h2>
                      <h5 className="py-2">Seller profile</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 text-center m-2">
                  <div className="card bg-dark text-light">
                    <div className="card-body">
                      <h2>🛴</h2>
                      <h5 className="py-2">Pending balance</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 text-center m-2">
                  <div className="card bg-dark text-light">
                    <div className="card-body">
                      <h2>🔧</h2>
                      <h5 className="py-2">Payout settings</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default ConnectNav;
