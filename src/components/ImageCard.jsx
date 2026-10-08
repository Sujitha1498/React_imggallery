function ImageCard({ image }) {
  return (
    <article className="image-card">
      <div className="image-container">
        <img src={image.url} alt={image.title} />
      </div>

      <div className="card-content">
        <span className="card-number">{image.id}</span>

        <div>
          <h2>{image.title}</h2>
          <p>{image.description}</p>
        </div>
      </div>
    </article>
  );
}

export default ImageCard;