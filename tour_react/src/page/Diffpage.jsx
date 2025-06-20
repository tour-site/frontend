import { useParams } from "react-router-dom";
import { imageData } from "./Component/ImageData";
import './Component/ImageGallery.css';

export default function DetailPage() {
  const { id } = useParams();
  const image = imageData.find(img => img.id === Number(id));

  if (!image) return <div style={{ padding: '24px' }}>이미지를 찾을 수 없습니다.</div>;

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>{image.title}</h1>
      <img
        src={image.imageUrl}
        alt={image.title}
        style={{ width: '100%', maxWidth: '800px', marginBottom: '16px' }}
      />
      <p style={{ color: '#666' }}>지역: {image.category}</p>
    </div>
  );
}