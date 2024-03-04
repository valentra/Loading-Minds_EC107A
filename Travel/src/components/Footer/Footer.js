import React from 'react'
import "../Footer/Footer.css"
const Footer = () => {
  return (
    
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          
        <div class="col-sm-12 col-md-6 ">
            <h6>About</h6>
            <p class="text-justify">Embark on your journey of discovery with<br/> our seamless travel experiences, unlocking the wonders of the world at your fingertips.</p>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Booking</a></li>
              <li><a href="">Review</a></li>
              <li><a href="">Contact Us</a></li>
              
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Connect With Us</h6>
            <ul class="footer-links">
              <li><a href="">Instagram</a></li>
              <li><a href="">Facebook</a></li>
              <li><a href="">Github</a></li>
              
            </ul>
          </div>
        </div>
        {/* <hr> */}
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; Made with ❤ Loading Minds
            </p>
          </div>

          
        </div>
      </div>
</footer>
  )
}

export default Footer
