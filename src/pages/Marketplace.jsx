import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NFTCard from '../components/NFTCard';
import CreatorCard from '../components/CreatorCard';
import ImgWithFallback from '../components/ImgWithFallback';
import './Marketplace.css';

const FALLBACK_HERO = 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600';
const HERO_IMAGE = '/imgs/Image Placeholder.png';
const CREATORS = [
  { rank: 1, name: 'Keepitreal', totalSales: '34.53 ETH', avatar: '/imgs/Avatar.png', fallbackAvatar: 'https://i.pravatar.cc/80?img=1' },
  { rank: 2, name: 'DigiLab', totalSales: '28.12 ETH', avatar: '/imgs/Avatar (1).png', fallbackAvatar: 'https://i.pravatar.cc/80?img=2' },
  { rank: 3, name: 'GravityOne', totalSales: '25.89 ETH', avatar: '/imgs/Avatar (2).png', fallbackAvatar: 'https://i.pravatar.cc/80?img=3' },
  { rank: 4, name: 'Juanie', totalSales: '22.45 ETH', avatar: '/imgs/Artist Avatar.png', fallbackAvatar: 'https://i.pravatar.cc/80?img=4' },
  { rank: 5, name: 'BlueWhale', totalSales: '20.11 ETH', avatar: '/imgs/Artist Avatar (1).png', fallbackAvatar: 'https://i.pravatar.cc/80?img=5' },
  { rank: 6, name: 'Mr Fox', totalSales: '18.90 ETH', avatar: '/imgs/Artist Avatar (2).png', fallbackAvatar: 'https://i.pravatar.cc/80?img=6' },
  { rank: 7, name: 'Shroomie', totalSales: '16.50 ETH', avatar: '/imgs/Artist Avatar (3).png', fallbackAvatar: 'https://i.pravatar.cc/80?img=7' },
  { rank: 8, name: 'Robotica', totalSales: '14.22 ETH', avatar: '/imgs/Artist Avatar (4).png', fallbackAvatar: 'https://i.pravatar.cc/80?img=8' },
  { rank: 9, name: 'RustyRobot', totalSales: '12.88 ETH', avatar: '/imgs/Artist Avatar (5).png', fallbackAvatar: 'https://i.pravatar.cc/80?img=9' },
  { rank: 10, name: 'Animakid', totalSales: '11.55 ETH', avatar: '/imgs/Artist Avatar (6).png', fallbackAvatar: 'https://i.pravatar.cc/80?img=10' },
  { rank: 11, name: 'Dotgu', totalSales: '10.00 ETH', avatar: '/imgs/Artist Avatar (7).png', fallbackAvatar: 'https://i.pravatar.cc/80?img=11' },
  { rank: 12, name: 'Ghiblier', totalSales: '9.25 ETH', avatar: '/imgs/Artist Avatar (8).png', fallbackAvatar: 'https://i.pravatar.cc/80?img=12' },
];

const DISCOVER_NFTS = [
  { title: 'Distant Galaxy', creator: 'MoonDancer', price: '1.63 ETH', highestBid: '0.33 wETH', image: '/imgs/Image (1).png', fallbackImage: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400' },
  { title: 'Life On Edena', creator: 'NebulaKid', price: '1.63 ETH', highestBid: '0.33 wETH', image: '/imgs/Image (2).png', fallbackImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400' },
  { title: 'AstroFiction', creator: 'SpaceOne', price: '1.63 ETH', highestBid: '0.33 wETH', image: '/imgs/Image (3).png', fallbackImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400' },
];

export default function Marketplace() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">Discover Digital Art & Collect NFTs</h1>
            <p className="hero__desc">
              NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.
            </p>
            <Link to="/connect-wallet" className="btn btn--primary">
              <i className="fa-solid fa-rocket btn__icon" aria-hidden />
              Get Started
            </Link>
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-value">240k+</span>
                <span className="hero__stat-label">Total Sale</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">100k+</span>
                <span className="hero__stat-label">Auctions</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">20k+</span>
                <span className="hero__stat-label">Artists</span>
              </div>
            </div>
          </div>
          <div className="hero__featured">
            <div className="hero__nft-card">
              <ImgWithFallback src={HERO_IMAGE} fallback={FALLBACK_HERO} alt="Space Walking" className="hero__nft-image" />
              <div className="hero__nft-info">
                <h3 className="hero__nft-title">Space Walking</h3>
                <div className="hero__nft-creator">
                  <i className="fa-solid fa-user hero__nft-avatar" aria-hidden />
                  <span>Animakid</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section creators">
          <div className="section__head">
            <div>
              <h2 className="section__title">Top Creators</h2>
              <p className="section__subtitle">Checkout Top Rated Creators On The NFT Marketplace</p>
            </div>
            <Link to="/rankings" className="btn btn--outline">
              <i className="fa-solid fa-rocket btn__icon" aria-hidden />
              View Rankings
            </Link>
          </div>
          <div className="creators__grid">
            {CREATORS.map((c) => (
              <CreatorCard key={c.rank} rank={c.rank} name={c.name} totalSales={c.totalSales} avatar={c.avatar} fallbackAvatar={c.fallbackAvatar} />
            ))}
          </div>
        </section>

        <section className="section discover">
          <div className="section__head">
            <div>
              <h2 className="section__title">Discover More</h2>
              <p className="section__subtitle">Explore New Trending NFTs</p>
            </div>
            <button type="button" className="btn btn--outline">
              <i className="fa-solid fa-eye btn__icon" aria-hidden />
              See All
            </button>
          </div>
          <div className="discover__grid">
            {DISCOVER_NFTS.map((nft) => (
              <NFTCard key={nft.title} title={nft.title} creator={nft.creator} price={nft.price} highestBid={nft.highestBid} image={nft.image} fallbackImage={nft.fallbackImage} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
