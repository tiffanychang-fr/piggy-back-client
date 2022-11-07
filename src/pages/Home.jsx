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
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">E-Commerce</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Responsive Design</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Web Security</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
