import React from "react";
import { Link, Route, Switch } from "react-router-dom";

function Footer() {
  return (
    <React.Fragment>
      <footer className="sticky-footer bg-white">
        <section className="border-top">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <i className="fab fa-linkedin text-warning"></i>
                <a
                  href="https://www.linkedin.com/in/yesica-farias-b45760115/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="text-dark">Yesica Farias</span>
                </a>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <i className="fab fa-linkedin text-warning"></i>
                <a
                  href="https://www.linkedin.com/in/carlos-andres-nore%C3%B1a-cruz-3a689983/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="text-dark">Carlos Noreña</span>
                </a>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <i className="fab fa-linkedin text-warning"></i>
                <a
                  href="https://www.linkedin.com/in/mart%C3%ADn-faraguna-6ab136196/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="text-dark">Martin Faraguna</span>
                </a>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <i className="fab fa-linkedin text-warning"></i>
                <span className="text-dark">German</span>
              </div>
            </div>
          </div>
        </section>
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; 2023DHGroup1.com </span>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Footer;
