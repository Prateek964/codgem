import React, { Component } from 'react'


export default class Footer extends Component {
   

    render() {
        return (
            <div>
                
<footer id="footer">

<div className="footer-newsletter" data-aos="fade-up">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h4>Work With Us</h4>
        <p>Explore your passion for teaching and coding with a high growth fun loving culture</p>
        <form action="" method="post">
          <input type="email" name="email" placeholder="Drop your email id and we will get back to you" /><input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
</div>

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact" data-aos="fade-up" data-aos-delay="100">
        <h3>CodGem</h3>
        <p>
          Bengaluru <br />
          Karnataka<br />
          India <br /><br />
          <strong>Phone:</strong> +91 9651908287<br />
          <strong>Email:</strong> prateek96.4@gmail.com<br />
        </p>
      </div>

      <div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="200">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <a href="#hero">Home</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#faq">FAQ's</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="300">
        <h4>Our Services</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="400">
        <h4>Our Social Networks</h4>
        <p>Be a part of rapidly growing family of coders</p>
        <div className="social-links mt-3">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="https://chat.whatsapp.com/E6FOlXiMDJM6zzPnsaL7rD" className="whatsapp" target="_blank"><i className="bx bxl-whatsapp"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          
        </div>
      </div>

    </div>
  </div>
</div>

<div className="container py-4">
  <div className="copyright">
    &copy; Copyright <strong><span>CodGem</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
    Designed by <a href="/">CodeGem</a>
  </div>
</div>
</footer>

<a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
            </div>
        )
    }
}
