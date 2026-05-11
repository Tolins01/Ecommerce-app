// Lightbox.jsx
import { useState } from 'react'
import './lightbox.css'

export default function LightBox({ close }) {
  const [currentImage, setCurrentImage] = useState(1)

  const nextImage = () => {
    setCurrentImage(prev => (prev === 4 ? 1 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage(prev => (prev === 1 ? 4 : prev - 1))
  }

  return (
  <div className="lightbox-overlay">
    <div className="lightbox">
        <div className="lightbox-main">
         <span className="close" onClick={close}>×</span>
          <img
          className="lightbox-image"
          src={`images/image-product-${currentImage}.jpg`}
          alt={`Product image ${currentImage}`}
        />

        <span className="next-image" onClick={nextImage}>›</span>
        <span className="prev-image" onClick={prevImage}>‹</span>
        </div>
        <div className="thumbnails">
          {[1,2,3,4].map(num => (
            <img
              key={num}
              src={`images/image-product-${num}.jpg`}
              onClick={() => setCurrentImage(num)}
              className={currentImage === num ? 'active thumbnail' : 'thumbnail'}
              alt={`Product image ${currentImage}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}