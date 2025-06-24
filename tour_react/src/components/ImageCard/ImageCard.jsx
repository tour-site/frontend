import { useNavigate } from "react-router-dom";
import styles from'./ImageGallery.module.css';

export default function ImageCard({ image }) {
  const navigate = useNavigate();

  return (
    <div className={styles.imagecard} onClick={() => navigate(`/detail/${image.id}`)}>
      <div className={styles.imagecardinner}>
        <img src={image.imageUrl} alt={image.title} />
        <div className={styles.info}>
          <h3>{image.title}</h3>
          <p>{image.category}</p>
        </div>
      </div>
    </div>
  );
}
