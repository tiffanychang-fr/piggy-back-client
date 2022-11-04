import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import caseService from "../services/case.service.js";
import stripeService from "../services/stripe.service.js";
import ConnectNav from "../components/ConnectNav";
import CaseCard from "./CaseCard";

function DashboardSeller() {
  const { user, getToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [allAcceptedCases, setAllAcceptedCases] = useState([]);

  // Render all the cases
  useEffect(() => {
    caseService
      .getAllAcceptedCases(user)
      .then((response) => {
        setAllAcceptedCases(response.data);
      })
      .catch((error) => console.log(error));
  }, [user]);

  const handleClick = async () => {
    setLoading(true);

    try {
      let res = await stripeService.createConnectAccount(user, getToken());
      // console.log(res.data); // get login link
      window.location.href = res.data.link;
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const connected = () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center mb-4">
          <h2>Your Cases</h2>
        </div>
      </div>

      <div className="row">
        {allAcceptedCases.length === 0 ? (
          <p className="text-muted">
            <small>There is no pending cases.</small>
          </p>
        ) : (
          allAcceptedCases.map((singleCase) => (
            <CaseCard key={singleCase._id} singleCase={singleCase} />
          ))
        )}
      </div>
    </div>
  );

  const notConnected = () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <div className="p-5 pointer">
            <h4>Setup payouts to accept cases</h4>
            <p className="lead">
              MERN partners with stripe to transfer earnings to your bank
              account
            </p>
            <button
              disabled={loading}
              onClick={handleClick}
              className="btn btn-primary mb-3"
            >
              {loading ? "Processing..." : "Setup Payouts"}
            </button>
            <p className="text-muted">
              <small>
                You'll be redirected to Stripe to complete the onboarding
                process.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <ConnectNav />
      <div>
        {/* if seller has setup the stripe account, then show all the
        cases, otherwise show the stripe setup cta button */}
        {getToken &&
        user &&
        user.stripe_seller &&
        user.stripe_seller.charges_enabled
          ? connected()
          : notConnected()}
      </div>
    </>
  );
}

export default DashboardSeller;
