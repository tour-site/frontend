import { useNavigate } from "react-router-dom";
import './Component/ImageGallery.css';

export default function ImageCard({ image }) {
  const navigate = useNavigate();

  return (
    <div className="image-card" onClick={() => navigate(`/detail/${image.id}`)}>
      <div className="image-card-inner">
        <img src={image.imageUrl} alt={image.title} />
        <div className="info">
          <h3>{image.title}</h3>
          <p>{image.category}</p>
        </div>
      </div>
    </div>
  );
}
