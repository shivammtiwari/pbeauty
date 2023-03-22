import React, {useState, useEffect} from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
  const [scrolled,setScrolled]= useState(false);
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 150 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  let navbarClasses=['NavWrap'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }
  return (
    <section className={navbarClasses.join(" ") }>
        <div className='navbar'>
        <div className="logo">
            <h3>Pleasing Beauty<span>.</span></h3>
        </div>
        <div className="menu">
            <i class="fa-solid fa-cart-shopping"></i>
            <a href="google">Login</a>
        </div>
        {/* <div className="menu">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <i class="fa-solid fa-cart-shopping"></i>
            <a href="google">Login</a>
        </div> */}
        </div>
      </section>
  )
}

export default Navbar