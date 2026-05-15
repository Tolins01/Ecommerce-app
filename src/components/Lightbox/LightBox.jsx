import { useEffect, useRef, useState } from 'react'
import './lightbox.css'

export default function LightBox({ close }) {
  const [currentImage, setCurrentImage] = useState(1)
  const closeBtnRef = useRef(null)

  const nextImage = () => {
    setCurrentImage(prev => (prev === 4 ? 1 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage(prev => (prev === 1 ? 4 : prev - 1))
  }

  // Focus close button when modal opens
  useEffect(() => {
    closeBtnRef.current.focus()
  }, [])

  // Escape key support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        close()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [close])

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Product image gallery"
    >
      <div className="lightbox">
        <div className="lightbox-main">

          <button
            ref={closeBtnRef}
            className="close"
            onClick={close}
            aria-label="Close lightbox"
          >
            ×
          </button>

          <img
            className="lightbox-image"
            src={`images/image-product-${currentImage}.jpg`}
            alt={`Product image ${currentImage}`}
          />

          <button
            className="next-image"
            onClick={nextImage}
            aria-label="Next image"
          >
            <img src="images/icon-next.svg" alt="" />
          </button>

          < button
            className="prev-image"
            onClick={prevImage}
            aria-label="Previous image"
          >
             <img src="images/icon-previous.svg" alt="" />
        </button>
        </div>

        <div className="thumbnails">
          {[1, 2, 3, 4].map(num => (
            <button
              key={num}
              onClick={() => setCurrentImage(num)}
              className={
                currentImage === num
                  ? 'thumbnail active'
                  : 'thumbnail'
              }
              aria-label={`View product image ${num}`}
            >
              <img
                src={`images/image-product-${num}.jpg`}
                alt=""
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}