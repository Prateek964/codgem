<<<<<<< HEAD
import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuth, signout } from '../auth/Helpers'
import logo from '../img/logo.png'

const Header = ({ children, history, match }) => {
  const isActive = path => {
    if (match.path === path) {
      return { color: '#000' }
    } else {
      return { color: '#fff' }
    }
  }

  const nav = () => (
    <header id="header" className="fixed-top">
      <div className="container-fluid d-flex">

        <div className="logo mr-auto">
          <h1 className="text-light">
          <a href="/"><img src={logo} height="35" width="41" alt="codGem" />
            <span>CodGem</span></a>
          </h1>
        </div>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">
              <span className='fa fa-home'></span>Home</Link>
            </li>
            <li className="drop-down"><a href="#">
            <span className='fa fa-list'></span>Learning Paths</a>
              <ul>
                <li><a href="#">Basic</a></li>
                <li><a href="#">Beginner</a></li>
                <li className="drop-down"><a href="#">Intermediate</a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Advanced</a></li>
                <li><a href="#">Expert</a></li>
              </ul>
            </li>
            <li><a href="#contact">
            <span className='fa fa-address-card'></span>Contact Us</a></li>


            {!isAuth() && (
              <Fragment>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                  <span className='fa fa-child'></span>Signup</Link>
                </li>

                <li className="nav-item">
                  <Link to="/signin" className="nav-link">
                  <span className='fas fa-sign-in-alt'></span>Signin</Link>
                </li>
              </Fragment>
            )}

            {isAuth() && isAuth().role === 'admin' && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">{isAuth().name}</Link>
              </li>
            )}

            {isAuth() && isAuth().role === 'subscriber' && (
              <li className="nav-item">
                <Link className="nav-link" to="/private">{isAuth().name}</Link>
              </li>
            )}


            {isAuth() && (

              <li className="nav-item">
                <span className="nav-link" onClick={() => {
                  signout(() => {
                    history.push('/')
                  })
                }}>Signout</span>
              </li>

            )}

          </ul>
        </nav>

      </div>
    </header>
  )
  return (
    <Fragment>
      {nav()}
      <div className="main-site">
        {children}
      </div>
    </Fragment>
  )
=======
import React, {Fragment} from 'react'
import {Link , withRouter} from 'react-router-dom'
import {isAuth, signout} from '../auth/Helpers'

const Header = ({ children, history, match }) => {
    const isActive = path => {
        if(match.path === path) {
            return {color: '#000'}
        } else {
            return {color: '#fff'}
        }
    }

    const nav = () => (
        <header id="header" className="fixed-top">
        <div className="container-fluid d-flex">

         <div className="logo mr-auto">
        <h1 className="text-light"><a href="/"><span>CodGem</span></a></h1>
       </div>

      <nav className="nav-menu d-none d-lg-block">
        <ul>
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
          <li className="drop-down"><a href="">Learning Paths</a>
            <ul>
              <li><a href="#">Basic</a></li>
              <li><a href="#">Beginner</a></li>
              <li className="drop-down"><a href="#">Intermediate</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Advanced</a></li>
              <li><a href="#">Expert</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact Us</a></li>
        

            {!isAuth() && (
               <Fragment>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">Signup</Link>
                    </li>
             
                    <li className="nav-item">
                        <Link to="/signin" className="nav-link">Signin</Link>
                    </li>
               </Fragment>
            )}

           {isAuth() && isAuth().role === 'admin' && (
               <li className="nav-item">
                  <Link className="nav-link" to="/admin">{isAuth().name}</Link>
                </li>
            )}   

            {isAuth() && isAuth().role === 'subscriber' && (
               <li className="nav-item">
                  <Link className="nav-link" to="/private">{isAuth().name}</Link>
                </li>
            )}  


            {isAuth() && (
               
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => {
                            signout(() => {
                                history.push('/')
                            })
                        }}>Signout</span>
                    </li>
               
            )}

        </ul>
      </nav>

    </div>
  </header>
    )
    return (
        <Fragment>
            {nav()}
            <div className="main-site">
                {children}
            </div>
        </Fragment>
    )
>>>>>>> 94f1d0d9a37cafdcb231122a5536c407e72e05d9
}


export default withRouter(Header);