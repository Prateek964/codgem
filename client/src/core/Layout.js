import React, {Fragment} from 'react'
import {Link , withRouter} from 'react-router-dom'
import {isAuth, signout} from '../auth/Helpers'
import Header from '../core/Header'
import Footer from '../core/Footer'

const Layout = ({ children, history, match }) => {
    const isActive = path => {
        if(match.path === path) {
            return {color: '#000'}
        } else {
            return {color: '#fff'}
        }
    }

    return (
        <Fragment>
            <Header />
            <div className="main-site">
                {children}
            </div>
            <Footer />
        </Fragment>
    )
}


export default withRouter(Layout);