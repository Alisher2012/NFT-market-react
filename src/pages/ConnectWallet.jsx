import Header from '../components/Header';
import Footer from '../components/Footer';
import NFTCard from '../components/NFTCard';
import ImgWithFallback from '../components/ImgWithFallback';
import './ConnectWallet.css';

const BANNER_IMAGE = '/imgs/Image PlaceHolder (7).png';
const BANNER_FALLBACK = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200';
const PROFILE_AVATAR = '/imgs/Artist Avatar.png';
const PROFILE_AVATAR_FALLBACK = 'https://i.pravatar.cc/200?img=10';
const ARTIST_NFTS = [
  { title: 'Distant Galaxy', creator: 'Animakid', price: '1.63 ETH', highestBid: '0.33 wETH', image: '/imgs/Image (1).png', fallbackImage: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400' },
  { title: 'Life On Edena', creator: 'Animakid', price: '1.63 ETH', highestBid: '0.33 wETH', image: '/imgs/Image (2).png', fallbackImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400' },
  { title: 'AstroFiction', creator: 'Animakid', price: '1.63 ETH', highestBid: '0.33 wETH', image: '/imgs/Image (3).png', fallbackImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400' },
  { title: 'CryptoCity', creator: 'Animakid', price: '1.63 ETH', highestBid: '0.33 wETH', image: '/imgs/Image (4).png', fallbackImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400' },
  { title: 'ColorfulDog 0524', creator: 'Animakid', price: '1.63 ETH', highestBid: '0.33 wETH', image: '/imgs/Image (5).png', fallbackImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400' },
  { title: 'Space Tales', creator: 'Animakid', price: '1.63 ETH', highestBid: '0.33 wETH', image: '/imgs/Image (6).png', fallbackImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400' },
  { title: 'Cherry Blossom Girl 037', creator: 'Animakid', price: '1.63 ETH', highestBid: '0.33 wETH', image: '/imgs/Image (7).png', fallbackImage: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400' },
  { title: 'Dancing Robots 0987', creator: 'Animakid', price: '1.63 ETH', highestBid: '0.33 wETH', image: '/imgs/Image (8).png', fallbackImage: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400' },
  { title: 'IceCream Ape', creator: 'Animakid', price: '1.63 ETH', highestBid: '0.33 wETH', image: '/imgs/Image (9).png', fallbackImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
];

export default function ConnectWallet() {
  return (
    <div className="page page--artist-profile">
      <Header />
      <main className="main">
        <section className="artist-profile">
          <div className="artist-profile__banner-wrap">
            <ImgWithFallback src={BANNER_IMAGE} fallback={BANNER_FALLBACK} alt="" className="artist-profile__banner" />
            <div className="artist-profile__card">
              <div className="artist-profile__top">
                <ImgWithFallback src={PROFILE_AVATAR} fallback={PROFILE_AVATAR_FALLBACK} alt="Animakid" className="artist-profile__avatar" />
                <div className="artist-profile__text">
                  <h1 className="artist-profile__name">Animakid</h1>
                  <p className="artist-profile__bio-label">Bio</p>
                  <p className="artist-profile__bio">The Internet&apos;s Friendliest Designer Kid.</p>
                </div>
              </div>
              <div className="artist-profile__actions">
                <button type="button" className="artist-profile__wallet">
                  <i className="fa-solid fa-wallet artist-profile__wallet-icon" aria-hidden />
                  0xc0E3...B79C
                </button>
                <button type="button" className="artist-profile__follow">
                  <i className="fa-solid fa-plus artist-profile__follow-icon" aria-hidden />
                  Follow
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section artist-nfts">
          <div className="discover__grid">
            {ARTIST_NFTS.map((nft) => (
              <NFTCard key={nft.title} title={nft.title} creator={nft.creator} price={nft.price} highestBid={nft.highestBid} image={nft.image} fallbackImage={nft.fallbackImage} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
