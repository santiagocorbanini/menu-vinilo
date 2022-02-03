import logoPampa from './assets/img/LogoPampaWhite.png'
import logoVinilo from './assets/img/logo_vinilo.jpg'

const Footer = () => {
  return (
          <div className="footer">
            <div className="container">
              <div className="row">
                  {/*<!-- Footer Location
                  <div className="col-lg-4 mb-5 mb-lg-0">
                      <h4 className="text-uppercase mb-4">Location</h4>
                      <p className="lead mb-0">
                          2215 John Daniel Drive
                          <br />
                          Clark, MO 65243
                      </p>
                  </div>
                  -->*/}
                  {/*<!-- Footer Social Icons-->*/}
                  <div className="col-lg-6 mb-5 mb-lg-0">
                      <a href="https://www.pampacode.com" target={"_blank"}>
                          <img src={logoPampa} alt="Pampacode" id='logo-footer-pampa' />
                      </a>
                      <p className="mt-2">
                      Desarrollo de Software - © {(new Date().getFullYear())}.
                      </p>
                      <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/pampacode" target={"_blank"}><i className="fab fa-fw fa-instagram"></i></a>
                      <a className="btn btn-outline-light btn-social mx-1" href="https://www.pampacode.com" target={"_blank"}><i className="fas fa-fw fa-globe"></i></a>
                      <a className="btn btn-outline-light btn-social mx-1" href={"mailto:info@pampacode.com"}><i className="fas fa-envelope"></i></a>
                  </div>
                  {/*<!-- Footer About Text-->*/}
                  <div className="col-lg-6">
                      <img src={logoVinilo} alt="Vinilo Bar" id='logo-vinilo' />
                      <p className="mt-2">
                          Junín, Bs As, Argentina.
                      </p>
                      <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/vinilo.bar/" target={"_blank"}><i className="fab fa-fw fa-instagram"></i></a>
                      <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/ViniloBarClub" target={"_blank"}><i className="fab fa-facebook-f"></i></a>
                  </div>
              </div>
            </div>
          </div>
  )
};

export default Footer;
