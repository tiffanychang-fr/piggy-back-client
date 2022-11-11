import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import stripeService from "../services/stripe.service";
import Loading from "../components/Loading/Loading";

const ConnectNav = () => {
  const { user, getToken } = useContext(AuthContext);
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const accountBalance = async () => {
      try {
        const response = await stripeService.getAccountBalance(
          user,
          getToken()
        );
        // console.log(response.data);
        setBalance(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    accountBalance();
  }, [user, getToken]);

  const handlePayoutSetting = async () => {
    setIsLoading(true);
    try {
      const response = await stripeService.payoutSetting(user, getToken());
      // console.log(response.data);
      // window.location.href = response.data.url;
      window.open(response.data.url, "_blank");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-around">
        {getToken &&
          user &&
          user.stripe_seller &&
          user.stripe_seller.charges_enabled && (
            <>
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
                  <h1 className="h2 hb-0">Seller Dashboard</h1>
                  <h5>Hello, @{user.username}</h5>
                </div>

                <div className="row justify-content-around my-3">
                  <div className="col-md-4 text-center my-2">
                    <div className="card border-left-primary py-3 shadow">
                      <div className="card-body">
                        <h2>👾</h2>
                        <h3 className="py-2 text-primary-dashboard">
                          Seller profile: @{user.username}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center my-2">
                    <div className="card border-left-success py-3 shadow">
                      <div className="card-body">
                        <h2>🛴</h2>
                        <h3 className="py-2 text-success">
                          Pending balance:{" "}
                          {balance &&
                            balance.pending &&
                            balance.pending.map((balancePending, index) => (
                              <span key={index}>
                                {stripeService.currencyFormatter(
                                  balancePending
                                )}
                              </span>
                            ))}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center my-2">
                    <div className="card border-left-warning py-3 shadow">
                      <div
                        className="card-body"
                        onClick={() => handlePayoutSetting()}
                      >
                        <h2>🔧</h2>
                        <h3 className="py-2 text-warning">Payout settings</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default ConnectNav;
