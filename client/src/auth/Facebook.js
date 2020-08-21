import React from 'react'
import axios from 'axios'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


const Facebook =({informParent = f => f }) => {

    const responseFacebook= (response) => {
        console.log(response)
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/facebook-login`,
            data: {userID: response.userID, accessToken: response.accessToken}
        })
        .then(response => {
            console.log('Facebook sigin sucess', response)
            informParent(response)

        })
        .catch(error => {
            console.log('facebook sign in error', error.response)
        })
    }
    return (
        <div className="pb-3">
            <FacebookLogin
            appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
            autoLoad={false}
            callback={responseFacebook}
            render={renderProps => (
                <button onClick={renderProps.onClick} className="btn btn-primary btn-lg btn-block">Log in with Facebbok</button>
              )}
            />
        </div>
    )
}


export default Facebook