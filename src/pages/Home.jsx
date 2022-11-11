import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Home() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <header className="masthead">
        <div className="container">
          {isLoggedIn && (
            <>
              <div className="masthead-subheading">Welcome Back!</div>
              <div className="masthead-heading text-uppercase">Any news ?</div>
              <Link to="/dashboard">
                <button className="btn btn-primary btn-xl text-uppercase">
                  GO TO DASHBOARD
                </button>
              </Link>
            </>
          )}

          {!isLoggedIn && (
            <>
              <div className="masthead-subheading">Welcome To Piggy Back!</div>
              <div className="masthead-heading text-uppercase">
                It's Nice To Meet You
              </div>
              <Link to="/signup">
                <button className="btn btn-primary btn-xl text-uppercase">
                  JOIN THE COMMUNITY
                </button>
              </Link>
            </>
          )}
        </div>
      </header>
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">
              We connect foreigners and locals to help you settle down easily.
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Marketplace</h4>
              <p className="text-muted">
                More than 100+ locals are available on our platform to provide
                help to you. You select your helper.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Community</h4>
              <p className="text-muted">
                Simply create a post to find local helper. Get prepared for your
                arrival in a foreign country !
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Secure Payment</h4>
              <p className="text-muted">
                Partner with stripe to secure online payment and transfer
                earnings to your bank account.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
