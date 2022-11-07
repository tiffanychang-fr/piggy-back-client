import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import caseService from "../services/case.service.js";
import stripeService from "../services/stripe.service.js";
import ConnectNav from "../components/ConnectNav";
import CaseCard from "../components/Cards/CaseCard";

function DashboardSeller() {
  const { user, getToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [allPendingCases, setAllPendingCases] = useState([]);
  const [allAcceptedCases, setAllAcceptedCases] = useState([]);
  const [pendingBtnIsActive, setPendingBtnIsActive] = useState(false);

  // Render all the cases
  useEffect(() => {
    caseService
      .getAllPendingOffers(user)
      .then((response) => {
        setAllPendingCases(response.data);
      })
      .catch((error) => console.log(error));
  }, [user]);

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

  const renderCases = () => (
    <>
      {pendingBtnIsActive &&
        allPendingCases.map((singleCase) => (
          <CaseCard key={singleCase._id} singleCase={singleCase} />
        ))}

      {!pendingBtnIsActive &&
        allAcceptedCases.map((singleCase) => (
          <CaseCard key={singleCase._id} singleCase={singleCase} />
        ))}
    </>
  );

  const connected = () => (
    <div className="container-fluid">
      <ul className="nav nav-tabs mt-4 mb-3">
        <li className="nav-item">
          <Link
            to="#"
            className="btn"
            onClick={() => setPendingBtnIsActive(true)}
          >
            <h4>Pending Requests</h4>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="#"
            className="btn"
            onClick={() => setPendingBtnIsActive(false)}
          >
            <h4>Your Cases</h4>
          </Link>
        </li>
      </ul>

      <div className="row">
        {allAcceptedCases.length === 0 ? (
          <p className="text-muted">
            <small>There is no pending cases.</small>
          </p>
        ) : (
          renderCases()
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
