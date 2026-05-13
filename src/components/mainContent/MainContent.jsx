import './mainContent.css'
import Button from '../Button/Button'
import Price from '../Price/Price'
import Items from '../Items/Items'
import Display from '../Display/Display'
import Cart from '../Cart/Cart'


export default function MainContent(props) {
  
  return (
    <main className="main">
      <Display viewedProd = {props.viewed}/>
      <div className={`cart-card${props.cartClicked ? '-open' : ''}`}>
        <Cart deleteCartItem={props.deleteCartItem.deleteCartItem} title={props.product.title} price={props.product.discounted} quantity={props.ItemsNo.itemsNo} isdeleted={props.isDeleted} cartOpened={props.cartOpened} />
      </div>

      <section className='section product-info'>
        <h2 className='company'>SNEAKER COMPANY</h2>
        <h1 className='product-name'>{props.product.title}</h1> 
        <p className='product-description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <Price actual={`$${props.product.actual.toFixed(2)}`} discounted={`$${props.product.discounted.toFixed(2)}`} discount={`${props.product.discount}'%'`}/>
      
       <div className="button-items">
        <Items count={props.count} />
        <Button text="Add to cart" img={true} onClick={props.updateCart} />
       </div>
      </section> 
      {props.alert && (
        <div className="alert">
          {props.alert.Message}
        </div>
      )}
    </main>
  )
}
