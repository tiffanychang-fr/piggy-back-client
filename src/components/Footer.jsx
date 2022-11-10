import React from "react";

const Footer = () => {
  return (
    <footer className="footer-outer-container">
      <div className="footer-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">
              Copyright &copy; Piggy Back 2022
            </div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="#!">
                Privacy Policy
              </a>
              <a className="link-dark text-decoration-none" href="#!">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
