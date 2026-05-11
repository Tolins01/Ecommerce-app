import "./price.css"

export default function Price(props) {
  return (
    <div className='price'>
           <div className='current-price'>
            <span className='discounted-price'>{props.discounted}</span>
            <span className='discount'>{props.discount}</span>
           </div>
           <span className='original-price'>{props.actual}</span>
    </div>
  )
}
