import ImgWithFallback from './ImgWithFallback';
import './NFTCard.css';

export default function NFTCard({ title, creator, price, highestBid, image, fallbackImage, isCollection }) {
  return (
    <article className="nft-card">
      <div className="nft-card__image-wrap">
        <ImgWithFallback src={image} fallback={fallbackImage} alt={title} className="nft-card__image" />
      </div>
      <h3 className="nft-card__title">{title}</h3>
      <div className="nft-card__creator">
        {isCollection ? (
          <>
            <i className="fa-solid fa-leaf nft-card__collection-icon" aria-hidden />
            <span>{creator}</span>
          </>
        ) : (
          <>
            <i className="fa-solid fa-user nft-card__avatar" aria-hidden />
            <span>{creator}</span>
          </>
        )}
      </div>
      <div className="nft-card__meta">
        <div>
          <span className="nft-card__label">Price</span>
          <span className="nft-card__value">{price}</span>
        </div>
        <div>
          <span className="nft-card__label">Highest Bid</span>
          <span className="nft-card__value">{highestBid}</span>
        </div>
      </div>
    </article>
  );
}
