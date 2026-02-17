import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) alert('Спасибо за подписку!');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col footer__brand">
          <Link to="/" className="footer__logo">
            <i className="fa-solid fa-store footer__logo-icon" aria-hidden />
            NFT Marketplace
          </Link>
          <p className="footer__desc">NFT marketplace UI created with Anima for Figma.</p>
          <p className="footer__community">Join our community</p>
          <div className="footer__socials">
            <a href="#" aria-label="Discord"><i className="fa-brands fa-discord" aria-hidden /></a>
            <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube" aria-hidden /></a>
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter" aria-hidden /></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" aria-hidden /></a>
          </div>
        </div>
        <div className="footer__col">
          <h4 className="footer__title">Explore</h4>
          <Link to="/" className="footer__link">Marketplace</Link>
          <Link to="/rankings" className="footer__link">Rankings</Link>
          <Link to="/connect-wallet" className="footer__link">Connect a wallet</Link>
        </div>
        <div className="footer__col footer__newsletter">
          <h4 className="footer__title">Join Our Weekly Digest</h4>
          <p className="footer__desc">Get exclusive promotions & updates straight to your inbox.</p>
          <form className="footer__form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer__input"
            />
            <button type="submit" className="footer__submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <hr className="footer__hr" />
        <p className="footer__copy">© NFT Market. Use this template freely.</p>
      </div>
    </footer>
  );
}
