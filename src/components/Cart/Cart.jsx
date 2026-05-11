import './cart.css'
import Button from '../Button/Button'
import Price from '../Price/Price'


export default function Cart(props) {

    const handleDelete = () => {
        props.deleteCartItem()
    }

 
  return (
    <div className='card'>
        <div className='card-content'>
            <h2 className='card-title'>Cart</h2>
             <hr /> 

             {props.quantity !== 0 ? (
               <>
                 {!props.isDeleted?<div className='card-items'>
                    <div className="card-item" >   
                        <img className='card-image' src='images/image-product-1-thumbnail.jpg' alt="product thumbnail"/> 
                            <div className='card-item-info'>
                             <p className='card-item-name'>{props.title}</p>
                                <p className='card-item-price'>${props.price} x {props.quantity} <span className='card-item-total'>${(props.price * props.quantity).toFixed(2)}</span></p>
                        </div>
                         <img onClick={handleDelete} className='delete' src='images/icon-delete.svg' alt="delete item"/>
                    </div>
                    <Button text="Checkout" img={false} onClick={props.cartOpened}/>
                 </div>:
                 <div className='alertEmpty'>
                    <Button text="Continue shopping" img={false} onClick={props.cartOpened}/> 
                 </div>
                 }
               </>
             ) : (
               <div className='alertEmpty'>
                 <h2>Your cart is empty</h2>
               </div>
             )}
         </div>
        
    </div>
  )
}
