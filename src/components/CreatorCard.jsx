import ImgWithFallback from './ImgWithFallback';
import './CreatorCard.css';

export default function CreatorCard({ rank, name, totalSales, avatar, fallbackAvatar }) {
  return (
    <article className="creator-card">
      <span className="creator-card__rank">{rank}</span>
      <div className="creator-card__avatar-wrap">
        <ImgWithFallback src={avatar} fallback={fallbackAvatar} alt={name} className="creator-card__avatar" />
      </div>
      <h3 className="creator-card__name">{name}</h3>
      <p className="creator-card__sales">Total Sales: <span>{totalSales}</span></p>
    </article>
  );
}
