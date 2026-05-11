import './sidebar.css';

export default function Sidebar(props) {
  return (
    <>
    {props.issidebarOpen && (
      <aside id='aside' className="sidebar">
        <img onClick={()=> { props.toggleSidebar() }} className='close-sidebar' src='images/icon-close.svg' alt="close sidebar"/> 
        <ul className="sidebar-list">
            <li className="sidebar-item">
                <a href="#">Collections</a>
            </li>
            <li className="sidebar-item">
                <a href="#">Men</a>    
            </li>
            <li className="sidebar-item">
                <a href="#">Women</a>
            </li>
            <li className="sidebar-item">
                <a href="#">About</a>
            </li>
            <li className="sidebar-item">
                <a href="#">Contact</a>
            </li>
        </ul>                                                  
    </aside>)}
    </>
  )
}
