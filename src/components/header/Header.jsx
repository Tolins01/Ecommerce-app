import Sidebar from '../Sidebar/Sidebar'
import './nav.css'

export default function Header(props) {
  return (
    <header className='header'>
        <nav className="nav">
            <div className="nav-content">
                <div className='nav-left'>
                <ul className='nav-list'>
                    <li className='list'>
                        <img onClick={() => props.toggleSidebar()} className='hambuger' src='/images/icon-menu.svg' alt="Menu"/>
                    </li>
                    <li className='list'>
                        <a href="#">
                        <img className='logo' src='/images/logo.svg' alt="Logo"/>
                        </a>
                    </li>
                    <ul className='other-list'>
                     <li className='list list-search'>
                        <a href="#">Collections</a>
                    </li>
                    <li className='list list-search'>
                        <a href="#">Men</a>
                    </li>
                    <li className='list list-search'>
                        <a href="#">Women</a>
                    </li>
                    <li className='list list-search'>
                        <a href="#">About</a>
                    </li>
                    <li className='list list-search'>
                        <a href="#">Contact</a>
                    </li>
                    </ul>
                    
                </ul>
            </div>

            <div className="nav-right">
                <ul className="nav-list">
                    <li className='list'>
                        <a href="#">
                            <img onClick={() => {  
                                props.cartOpened()
                            }} className='cart-header' src='images/icon-cart.svg' alt="cart"/>
                            {props.itemsNo !==0 && <span className='cart-items-no'>{props.itemsNo}</span>}
                        </a>
                    </li>
                    <li className='list'>
                        <a href='#'>
                            <img className='avatar' src="images/image-avatar.png" alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
            </div>
            <hr className='hr'/>
        </nav>
    </header>
  )
}
