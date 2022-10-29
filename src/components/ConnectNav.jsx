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
              <div className="container">
                <div className="row justify-content-around my-3">
                  <div className="col-md-3 text-center m-2">
                    <div className="card bg-dark text-light">
                      <div className="card-body">
                        <h2>👾</h2>
                        <h5 className="py-2">
                          Seller profile: @{user.username}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-center m-2">
                    <div className="card bg-dark text-light">
                      <div className="card-body">
                        <h2>🛴</h2>
                        <h5 className="py-2">
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
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-center m-2">
                    <div className="card bg-dark text-light">
                      <div
                        className="card-body"
                        onClick={() => handlePayoutSetting()}
                      >
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
      {isLoading && <Loading />}
    </>
  );
};

export default ConnectNav;
