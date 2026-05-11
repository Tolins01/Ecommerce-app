import Header from './components/header/Header'
import MainContent from './components/mainContent/MainContent'

import LightBox from './components/Lightbox/LightBox'
import Sidebar from './components/Sidebar/Sidebar'
import { useState } from 'react'
import './App.css'
const product = {
  title: "Fall Limited Edition Sneakers",
  actual: 250,
  discounted: 125,
  discount: 50
}



function App() {
  const [cartItems, setCartItems] = useState({itemsNo: 0, isClicked: false}) 
  const [isDeleted, setIsDeleted] = useState(false)
  const [count, setCount] = useState(0)
  const [issidebarOpen, setIsSidebarOpen] = useState(false)
  const [productViewed, setProductViewed] = useState(false)
  
  const viewed = ()=>{
        setProductViewed(!productViewed)
      }
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!issidebarOpen)
  }

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const deleteCartItem = () => {
    alert("Item removed from cart!")
    setIsDeleted(!isDeleted)
    setCartItems(prev => ({...prev, itemsNo: 0}))
  }

  const cartOpened = () => {
    setCartItems(prev => ({...prev, isClicked: !prev.isClicked}))
  } 
  const updateCart = ()=>{
    alert("Item added to cart!")
    setCartItems(prev =>({...prev, itemsNo: count}))
  }
  
  return (
    <>
      <div className={`${!productViewed ? "container" : "container-dim"}`}>
          <Sidebar toggleSidebar={toggleSidebar} issidebarOpen={issidebarOpen} />
          <Header cartOpened={cartOpened} Items={cartItems.isClicked}  toggleSidebar={toggleSidebar} itemsNo={cartItems.itemsNo} />
          <MainContent cartClicked={cartItems.isClicked} ItemsNo={cartItems.itemsNo} count={{ next: increment, prev: decrement,count:count }} deleteCartItem={{deleteCartItem,isDeleted}}
          updateCart={updateCart} product={product} cartOpened={cartOpened}
          viewed={viewed}/>
          {productViewed && <LightBox close={viewed} />}
      </div>    
    </>
  
  )
}

export default App
