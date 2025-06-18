import { useState } from "react";
import { imageData } from "./Component/ImageData";
import ImageCard from "./ImageCard";
import './Component/ImageGallery.css';

export default function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const categories = ["전체", ...new Set(imageData.map(img => img.category))];

  const filteredImages = selectedCategory === "전체"
    ? imageData
    : imageData.filter(img => img.category === selectedCategory);

  return (
    <div className="image-gallery-wrapper" style={{ padding: "24px" }}>
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="image-gallery">
        {filteredImages.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}