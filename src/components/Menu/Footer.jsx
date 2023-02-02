const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="container">
        <div className="row">
         
          <div className="footer-block">
            <div className="social">
              <a href="/"><i className="fab fa-twitter"></i></a>
              <a href="/"><i className="fab fa-facebook-f"></i></a>
              <a href="/"><i className="fab fa-youtube"></i></a>
              <a href="/"><i className="fab fa-instagram"></i></a>
              <a href="/"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 All rights reserved. Designed by Me</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;