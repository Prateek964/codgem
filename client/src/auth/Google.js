import React from 'react'
import axios from 'axios'
import GoogleLogin from 'react-google-login'

const Google =({informParent = f => f }) => {

    const responseGoogle= (response) => {
        console.log(response.tokenId)
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/google-login`,
            data: {idToken: response.tokenId}
        })
        .then(response => {
            console.log('google sigin sucess', response)
            informParent(response)

        })
        .catch(error => {
            console.log('google sign in error', error.response)
        })
    }
    return (
        <div className="pb-2">
            <GoogleLogin
            clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
                // <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-danger btn-lg btn-block">Log in with google</button>
                <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className='w-full sign-in col-md-6 offset-md-3 max-w-xs font-bold shadow-sm rounded-lg py-2 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'
                    >
                      <div className=' p-2 rounded-full '>
                        <i className='fab fa-google ' />
                        <span className='ml-4'>Sign In with Google</span>
                      </div>
                    </button>
              )}
            />
        </div>
    )
}


export default Google