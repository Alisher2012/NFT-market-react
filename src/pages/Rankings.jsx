import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NFTCard from '../components/NFTCard';
import ImgWithFallback from '../components/ImgWithFallback';
import './Rankings.css';

const HERO_IMAGE = '/imgs/Image PlaceHolder (1).png';
const HERO_FALLBACK = 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800';
const MORE_FROM_ARTIST = [
  { title: 'Foxy Life', creator: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 ETH', image: '/imgs/Image Placeholder (2).png', fallbackImage: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400', isCollection: true },
  { title: 'Cat From Future', creator: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 ETH', image: '/imgs/Image Placeholder (3).png', fallbackImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400', isCollection: true },
  { title: 'Psycho Dog', creator: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 ETH', image: '/imgs/Image Placeholder (5).png', fallbackImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400', isCollection: true },
  { title: 'Designer Bear', creator: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 ETH', image: '/imgs/Image Placeholder (6).png', fallbackImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400', isCollection: true },
  { title: 'Dancing Robot 0375', creator: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 ETH', image: '/imgs/Image (4).png', fallbackImage: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400', isCollection: true },
  { title: 'Dancing Robot 0356', creator: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 ETH', image: '/imgs/Image (5).png', fallbackImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400', isCollection: true },
  { title: 'Dancing Robot 0321', creator: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 ETH', image: '/imgs/Image (6).png', fallbackImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400', isCollection: true },
  { title: 'Dancing Robot 0512', creator: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 ETH', image: '/imgs/Image (7).png', fallbackImage: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400', isCollection: true },
  { title: 'Dancing Robot 0024', creator: 'Orbitian', price: '1.63 ETH', highestBid: '0.33 ETH', image: '/imgs/Image (8).png', fallbackImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', isCollection: true },
];

export default function Rankings() {
  return (
    <div className="page page--nft-detail">
      <Header />
      <main className="main">
        <section className="nft-detail">
          <div className="nft-detail__hero-wrap">
            <div className="nft-detail__hero-image-wrap">
              <ImgWithFallback src={HERO_IMAGE} fallback={HERO_FALLBACK} alt="The Orbitians" className="nft-detail__hero-image" />
            </div>
            <div className="nft-detail__bottom">
              <div className="nft-detail__left">
                <h1 className="nft-detail__title">The Orbitians</h1>
                <p className="nft-detail__mint">Minted On Sep 30, 2022</p>
              </div>
              <div className="nft-detail__auction">
                <p className="nft-detail__auction-label">Auction ends in:</p>
                <div className="nft-detail__countdown">
                  <div className="nft-detail__countdown-item">
                    <span className="nft-detail__countdown-value">59</span>
                    <span className="nft-detail__countdown-label">Hours</span>
                  </div>
                  <span className="nft-detail__countdown-sep">:</span>
                  <div className="nft-detail__countdown-item">
                    <span className="nft-detail__countdown-value">59</span>
                    <span className="nft-detail__countdown-label">Minutes</span>
                  </div>
                  <span className="nft-detail__countdown-sep">:</span>
                  <div className="nft-detail__countdown-item">
                    <span className="nft-detail__countdown-value">59</span>
                    <span className="nft-detail__countdown-label">Seconds</span>
                  </div>
                </div>
                <button type="button" className="btn btn--primary nft-detail__bid">Place Bid</button>
              </div>
            </div>
          </div>
        </section>

        <section className="section more-from-artist">
          <div className="section__head">
            <h2 className="section__title">More From This Artist</h2>
            <Link to="/connect-wallet" className="btn btn--outline btn--arrow">
              <span>Go To Artist Page</span>
              <i className="fa-solid fa-chevron-right btn__arrow" aria-hidden />
            </Link>
          </div>
          <div className="discover__grid">
            {MORE_FROM_ARTIST.map((nft) => (
              <NFTCard key={nft.title} title={nft.title} creator={nft.creator} price={nft.price} highestBid={nft.highestBid} image={nft.image} fallbackImage={nft.fallbackImage} isCollection={nft.isCollection} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
