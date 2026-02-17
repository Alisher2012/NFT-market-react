import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <i className="fa-solid fa-store header__logo-icon" aria-hidden />
        <span>NFT Marketplace</span>
      </Link>
      <nav className="header__nav">
        <Link to="/" className="header__link">Marketplace</Link>
        <Link to="/rankings" className="header__link">Rankings</Link>
        <Link to="/connect-wallet" className="header__link">Connect a wallet</Link>
      </nav>
      <Link to="/connect-wallet" className="header__btn header__btn--primary">
        <i className="fa-solid fa-user-plus header__btn-icon" aria-hidden />
        Sign Up
      </Link>
    </header>
  );
}
