import './display.css'
import{ useState } from 'react' 



export default function Display(props) {

    const [currentImage, setCurrentImage] = useState(1)

     const nextImage = () => {
        setCurrentImage(currentImage === 4 ? 1 : currentImage + 1)
     }  

     const prevImage = () => {
        setCurrentImage(currentImage === 1 ? 4 : currentImage - 1)
     }

    const handleClicked= ()=>{
         props.viewedProd()
          setCurrentImage(1)
     }

  return (
     <section className='section-image'>
            <button onClick={handleClicked} className="display-image-but" aria-label='display-image-but'>
               <img  className="product-image" src={`images/image-product-${currentImage}.jpg`} alt="sneaker display slides"/>
            </button>
            

            <div className="desktop-images">
              {
               [1,2,3,4].map( val => ( 
                  <button 
                     className="desk-img-btn"
                     onClick={()=> setCurrentImage(val)} 
                     key={val} 
                     arial-label={`sneaker ${val} display`}
                     >
                     <img 
                     className="product-image desk-img" 
                     src={`images/image-product-${val}.jpg`} 
                     alt={`sneaker ${val} display`}/>
                  </button>
                 
               ))
              }
            </div>
            <button className='next' onClick={nextImage}>
                <img src="images/icon-next.svg" alt="next" />
            </button> 
            <button className='prev' onClick={prevImage}>
                <img src="images/icon-previous.svg" alt="previous" />
            </button>
          </section>
  )
}
