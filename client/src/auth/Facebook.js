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
        <div className="pb-2">
            <FacebookLogin
            appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
            autoLoad={false}
            callback={responseFacebook}
            render={renderProps => (
                // <button onClick={renderProps.onClick} className="btn btn-primary btn-lg btn-block">Log in with Facebbok</button>
                <button
                      onClick={renderProps.onClick}
                      className='w-full sign-in col-md-6 offset-md-3 max-w-xs font-bold shadow-sm rounded-lg py-2 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline '
                    >
                      <div className=' p-2 rounded-full '>
                        <i className='fab fa-facebook' />
                        <span className='ml-4'>Sign In with Facebook</span>
                      </div>
                    </button>
              )}
            />
        </div>
    )
}


export default Facebook