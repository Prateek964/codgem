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
}


export default withRouter(Header);