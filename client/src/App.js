import React from 'react';
import Layout from './core/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroImg from './img/hero-img.svg'
import AboutImg from './img/about-img.svg'
import Portfolio1 from './img/portfolio/portfolio-1.jpg'
import Portfolio2 from './img/portfolio/portfolio-2.jpg'
import Portfolio3 from './img/portfolio/portfolio-3.jpg'
import Portfolio4 from './img/portfolio/portfolio-4.png'
import Portfolio5 from './img/portfolio/portfolio-5.jpg'
import Portfolio6 from './img/portfolio/portfolio-6.jpg'
import Portfolio7 from './img/portfolio/portfolio-7.png'
import Portfolio8 from './img/portfolio/portfolio-8.png'
import Portfolio9 from './img/portfolio/portfolio-9.jpg'
import Team1 from './img/team/team-1.jpg'
import Team2 from './img/team/team-2.jpg'
import Team3 from './img/team/team-3.jpg'
import Team4 from './img/team/team-4.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Client1 from './img/clients/iitk.png'
import Client2 from './img/clients/jpmorgan.png'
import Client3 from './img/clients/ey.png'
import Client4 from './img/clients/pwc.png'
import Client5 from './img/clients/google.png'
import Client6 from './img/clients/goldmansachs.png'
import Client7 from './img/clients/target.png'
import Client8 from './img/clients/creditsuisse.png'
import {Helmet} from 'react-helmet'


const App = (props) => {
  
  return (
    <Layout>
  <section id="hero" className="d-flex align-items-center">

<div className="container">
  <div className="row">
    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
      <h1>Code Foundations with Code Champ</h1>
      <h2>Everyone’s talking about coding, but where do you start? This path will give you an introduction to the world of code and basic concepts.</h2>
      <a href="#about" className="btn-get-started scrollto">Get Started</a>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img">
      <img src={HeroImg} className="img-fluid animated" alt="" />
    </div>
  </div>
</div>

</section>

<main id="main">

<section id="about" className="about">
  <div className="container">

    <div className="row justify-content-between">
      <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
        <img src={AboutImg} className="img-fluid" alt="" data-aos="zoom-in" />
      </div>
      <div className="col-lg-6 pt-5 pt-lg-0">
        <h3 data-aos="fade-up">Opening a World of Learning</h3>
        <p data-aos="fade-up" data-aos-delay="100">
          Our task, regarding creativity, is to help children climb their own mountains, as high as possible
        </p>
        <div className="row">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <i className="bx bx-code-alt"></i>
            <h4>Start Early</h4>
            <p>Coding is our passport to the future, for tomorrow belongs to the people who prepare for it today</p>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <i className="bx bx-terminal"></i>
            <h4>Explore Your Interest</h4>
            <p>Learning doesn't just "happen"! It requires careful planning and implementation</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<section id="services" className="services section-bg">
  <div className="container">

    <div className="section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>Check out the great services we offer</p>
    </div>

    <div className="row">
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
        <div className="icon-box">
          <div className="icon"><i className="bx bx-time-five"></i></div>
          <h4 className="title"><a href="">Learn on your schedule</a></h4>
          <p className="description">Learn anytime, anywhere with your regular studies and get recognized for your coding skills</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
        <div className="icon-box">
          <div className="icon"><i className="bx bx-book-reader"></i></div>
          <h4 className="title"><a href="">Personalized Learning</a></h4>
          <p className="description">Kick start your coding journey with interactive and personalized one-to-one sessions with our educators</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
        <div className="icon-box">
          <div className="icon"><i className="bx bx-bot"></i></div>
          <h4 className="title"><a href="">Problem-Solving skills</a></h4>
          <p className="description">Learn through real life problems and implement scalable solutions with our specialized courses</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
        <div className="icon-box">
          <div className="icon"><i className="bx bx-world"></i></div>
          <h4 className="title"><a href="">Make Your Website</a></h4>
          <p className="description">Deploy your website as the main project and create your online presence</p>
        </div>
      </div>

    </div>

  </div>
</section>


<section id="portfolio" className="portfolio">
  <div className="container">

    <div className="section-title" data-aos="fade-up">
      <h2>Portfolio</h2>
      <p>Check out our upcoming Programs</p>
    </div>

    <div className="row" data-aos="fade-up" data-aos-delay="100">
      <div className="col-lg-12">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">Webinars</li>
          <li data-filter=".filter-card">BootCamps</li>
          <li data-filter=".filter-web">Projects</li>
        </ul>
      </div>
    </div>

    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src={Portfolio1} className="img-fluid" alt="" />
          <div className="portfolio-links">
            <a href="/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="icofont-plus-circle"></i></a>
            <a href="portfolio-details.html" title="More Details"><i className="icofont-link"></i></a>
          </div>
          <div className="portfolio-info">
            <h4>App 1</h4>
            <p>App</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <div className="portfolio-wrap">
          <img src={Portfolio2} className="img-fluid" alt="" />
          <div className="portfolio-links">
            <a href="/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-plus-circle"></i></a>
            <a href="portfolio-details.html" title="More Details"><i className="icofont-link"></i></a>
          </div>
          <div className="portfolio-info">
            <h4>Web 3</h4>
            <p>Web</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src={Portfolio3} className="img-fluid" alt="" />
          <div className="portfolio-links">
            <a href="/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="icofont-plus-circle"></i></a>
            <a href="portfolio-details.html" title="More Details"><i className="icofont-link"></i></a>
          </div>
          <div className="portfolio-info">
            <h4>App 2</h4>
            <p>App</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <div className="portfolio-wrap">
          <img src={Portfolio4} className="img-fluid" alt="" />
          <div className="portfolio-links">
            <a href="/img/portfolio/portfolio-4.png" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="icofont-plus-circle"></i></a>
            <a href="portfolio-details.html" title="More Details"><i className="icofont-link"></i></a>
          </div>
          <div className="portfolio-info">
            <h4>Card 2</h4>
            <p>Card</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <div className="portfolio-wrap">
          <img src={Portfolio5} className="img-fluid" alt="" />
          <div className="portfolio-links">
            <a href="/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="icofont-plus-circle"></i></a>
            <a href="portfolio-details.html" title="More Details"><i className="icofont-link"></i></a>
          </div>
          <div className="portfolio-info">
            <h4>Web 2</h4>
            <p>Web</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src={Portfolio6} className="img-fluid" alt="" />
          <div className="portfolio-links">
            <a href="/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="icofont-plus-circle"></i></a>
            <a href="portfolio-details.html" title="More Details"><i className="icofont-link"></i></a>
          </div>
          <div className="portfolio-info">
            <h4>App 3</h4>
            <p>App</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <div className="portfolio-wrap">
          <img src={Portfolio7} className="img-fluid" alt="" />
          <div className="portfolio-links">
            <a href="/img/portfolio/portfolio-7.png" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="icofont-plus-circle"></i></a>
            <a href="portfolio-details.html" title="More Details"><i className="icofont-link"></i></a>
          </div>
          <div className="portfolio-info">
            <h4>Card 1</h4>
            <p>Card</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <div className="portfolio-wrap">
          <img src={Portfolio8} className="img-fluid" alt="" />
          <div className="portfolio-links">
            <a href="/img/portfolio/portfolio-8.png" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="icofont-plus-circle"></i></a>
            <a href="portfolio-details.html" title="More Details"><i className="icofont-link"></i></a>
          </div>
          <div className="portfolio-info">
            <h4>Card 3</h4>
            <p>Card</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <div className="portfolio-wrap">
          <img src={Portfolio9} className="img-fluid" alt="" />
          <div className="portfolio-links">
            <a href="/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-plus-circle"></i></a>
            <a href="portfolio-details.html" title="More Details"><i className="icofont-link"></i></a>
          </div>
          <div className="portfolio-info">
            <h4>Web 3</h4>
            <p>Web</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>


<section id="faq" className="faq section-bg">
  <div className="container">

    <div className="section-title" data-aos="fade-up">
      <h2>FAQs</h2>
      <p>Frequently Asked Questions</p>
    </div>

    <ul className="faq-list">

      <li data-aos="fade-up" data-aos-delay="100">
        <a data-toggle="collapse" className="" href="#faq1">Why should I join your course?<i className="icofont-simple-up"></i></a>
        <div id="faq1" className="collapse show" data-parent=".faq-list">
          <p>
            We believe in strong foundation and we are constantly working to deliver you the best resources out there to help you make best use of the learning.
          </p>
        </div>
      </li>

      <li data-aos="fade-up" data-aos-delay="200">
        <a data-toggle="collapse" href="#faq2" className="collapsed">What are your unique features? <i className="icofont-simple-up"></i></a>
        <div id="faq2" className="collapse" data-parent=".faq-list">
          <p>
            We do not believe in just theoritical learning. Rather we expose our students to real life problems and help them build a proper thinking skill to implement real life solutions. Our projects focus towards this goal.
          </p>
        </div>
      </li>

      <li data-aos="fade-up" data-aos-delay="300">
        <a data-toggle="collapse" href="#faq3" className="collapsed">What are advantages of joining these courses?<i className="icofont-simple-up"></i></a>
        <div id="faq3" className="collapse" data-parent=".faq-list">
          <p>
            We offer personalized learning. We know that not all the students learn the same way, so we offer flexible courses and students can study at their own pace.
          </p>
        </div>
      </li>

      <li data-aos="fade-up" data-aos-delay="400">
        <a data-toggle="collapse" href="#faq4" className="collapsed">What types of resources are available about/for educational support personnel? <i className="icofont-simple-up"></i></a>
        <div id="faq4" className="collapse" data-parent=".faq-list">
          <p>
            We believe in one-to-one interactive learning. We provide ample of resources like slides for concepts, we believe that student must think first then if he/she encounters difficulty then we are here for help. At the end, we provide source codes of all of our projects so that students can play around with it.
          </p>
        </div>
      </li>

      <li data-aos="fade-up" data-aos-delay="500">
        <a data-toggle="collapse" href="#faq5" className="collapsed">What effects does NEP 2020 create in coding world and how do you see it? <i className="icofont-simple-up"></i></a>
        <div id="faq5" className="collapse" data-parent=".faq-list">
          <p>
            We firmly believe that NEP 2020 is a great step and its clearly mentioned that coding should be taught from school level. We hold a view that coding develops a logical thinking and it is also an essential tool that everyone should have.
          </p>
        </div>
      </li>

      <li data-aos="fade-up" data-aos-delay="600">
        <a data-toggle="collapse" href="#faq6" className="collapsed">I am in school, why do I need these things now? <i className="icofont-simple-up"></i></a>
        <div id="faq6" className="collapse" data-parent=".faq-list">
          <p>
            Gone are the days when these basic fundamentals were taught directly in engineering. With rapidly growing digital world, these are some key skills that each individual should be imparted from begining and we are constanly striving to provide students with high quality learning.
          </p>
        </div>
      </li>

    </ul>

  </div>
</section>


<section id="team" className="team">
  <div className="container">

    <div className="section-title" data-aos="fade-up">
      <h2>Team</h2>
      <p>Our team is always here to help</p>
    </div>

    <div className="row">

      <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
        <div className="member">
          <img src={Team1} className="img-fluid" alt="" />
          <div className="member-info">
            <div className="member-info-content">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
            </div>
            <div className="social">
              <a href=""><i className="icofont-twitter"></i></a>
              <a href=""><i className="icofont-facebook"></i></a>
              <a href=""><i className="icofont-instagram"></i></a>
              <a href=""><i className="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
        <div className="member">
          <img src={Team2} className="img-fluid" alt="" />
          <div className="member-info">
            <div className="member-info-content">
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
            </div>
            <div className="social">
              <a href=""><i className="icofont-twitter"></i></a>
              <a href=""><i className="icofont-facebook"></i></a>
              <a href=""><i className="icofont-instagram"></i></a>
              <a href=""><i className="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
        <div className="member">
          <img src={Team3} className="img-fluid" alt="" />
          <div className="member-info">
            <div className="member-info-content">
              <h4>William Anderson</h4>
              <span>CTO</span>
            </div>
            <div className="social">
              <a href=""><i className="icofont-twitter"></i></a>
              <a href=""><i className="icofont-facebook"></i></a>
              <a href=""><i className="icofont-instagram"></i></a>
              <a href=""><i className="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
        <div className="member">
          <img src={Team4} className="img-fluid" alt="" />
          <div className="member-info">
            <div className="member-info-content">
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
            </div>
            <div className="social">
              <a href=""><i className="icofont-twitter"></i></a>
              <a href=""><i className="icofont-facebook"></i></a>
              <a href=""><i className="icofont-instagram"></i></a>
              <a href=""><i className="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>


<section id="clients" className="clients section-bg">
  <div className="container">

    <div className="section-title" data-aos="fade-up">
      <h2>Clients</h2>
      <p>Our Mentors have worked here</p>
    </div>

    <OwlCarousel
    loop
    >
    <div className="owl-carousel clients-carousel" data-aos="fade-up" data-aos-delay="100">
      <img src={Client1} alt="IIT Kanpur" />
      <img src={Client2} alt="JP Morgan" />
      <img src={Client3} alt="Ernst & Young" />
      <img src={Client4} alt="PwC" />
      <img src={Client5} alt="Google" />
      <img src={Client6} alt="Goldman Sachs" />
      <img src={Client7} alt="Target" />
      <img src={Client8} alt="Credit Suisse" />
    </div>
    </OwlCarousel>

  </div>
</section>

<section id="contact" className="contact">
  <div className="container">

    <div className="section-title" data-aos="fade-up">
      <h2>Contact Us</h2>
      <p>Contact us and get started</p>
    </div>

    <div className="row">

      <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
        <div className="info">
          <div className="address">
            <i className="icofont-google-map"></i>
            <h4>Location:</h4>
            <p>Bangaluru | Karnataka | India</p>
          </div>

          <div className="email">
            <i className="icofont-envelope"></i>
            <h4>Email:</h4>
            <p>prateek96.4@gmail.com</p>
          </div>

          <div className="phone">
            <i className="icofont-phone"></i>
            <h4>Call:</h4>
            <p>+91 9651908287</p>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.5522455855!2d77.49085307114936!3d12.954294597642475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1597232433332!5m2!1sen!2sin" frameBorder="0"></iframe>

        </div>

      </div>

      <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">Your Email</label>
              <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Subject</label>
            <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div className="validate"></div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Message</label>
            <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>

    </div>

  </div>
</section>

</main>

    </Layout>
  )
}

export default App;
