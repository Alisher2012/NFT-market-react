/**
 * Renders img with src; on error uses fallback (e.g. external URL).
 * Use localPath like "/imgs/hero.png" and fallback like "https://...".
 */
export default function ImgWithFallback({ src, fallback, alt, className, ...props }) {
  const effectiveSrc = src || fallback;
  return (
    <img
      alt={alt}
      className={className}
      src={effectiveSrc}
      onError={(e) => {
        if (fallback && e.target.src !== fallback) {
          e.target.src = fallback;
        }
      }}
      {...props}
    />
  );
}
