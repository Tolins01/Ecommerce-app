import "./button.css"

export default function Button(props) {
  return (
  
      <button className='add-to-cart' onClick={props.onClick}>
            {props.img && <img className='cart'  src='images/icon-cart.svg' alt="cart"/>}
            {props.text}   
     </button>

  )
}
