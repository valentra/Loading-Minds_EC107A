import React from 'react'
import "../Footer/Footer.css"
const Footer = () => {
  return (
    
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          
        <div class="col-sm-12 col-md-6 ">
            <h6>About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
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
