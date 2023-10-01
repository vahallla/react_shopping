import "../css/footer.css";
export default function Footer() {
  return (
    <footer className="footer mw" >
      <div className="top">
        <nav>
          <a href="#">CONTACT</a>
          <a href="#">TERMS OF SERVICES</a>
          <a href="#">SHIPPING AND RETURNS</a>
        </nav>
        <div>
          <p>Give an email, get the newsletter</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="bottom">
        <p>2021 Shelly. Terms of use and privacy policy.</p>
        <div className="icon">
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-regular fa-star"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
