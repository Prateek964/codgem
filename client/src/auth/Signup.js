import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Layout from '../core/Layout'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import {isAuth} from './Helpers'


const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'Submit'
    })

    const {name, email, password, buttonText} = values

    const handleChange = (name) => (event) => {
        //console.log(event.target.value)
        setValues({...values, [name]: event.target.value})
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({...values, buttonText: 'Submitting'})
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signup`,
            data: {name, email, password}
        })
        .then(response => {
            console.log('signup success', response)
            setValues({...values, name:'',email: '', password: '', buttonText: 'Submitted'})
            toast.success(response.data.message)
        })
        .catch(error => {
            console.log('SIGNUP ERROR', error.response.data)
            setValues({...values, buttonText: 'Submit Again'})
            toast.error(error.response.data.error)
        })
    }

    const signupForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control" />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control" />
            </div>

            <div>
                {/* <button className="btn btn-primary" onClick={clickSubmit}>{buttonText}</button> */}
                <button
                  type='submit'
                  onClick={clickSubmit}
                  className='tracking-wide sign-in mb-3 col-md-6 offset-md-3 font-semibold bg-indigo-500 text-gray-100 w-full py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                  <span className='ml-3'>{buttonText}</span>
                </button>
            </div>
        </form>
    ) 

    return (
        <Layout>
            <div className="col-md-6 offset-md-3 mt-5">
            <ToastContainer />
            {isAuth() ? <Redirect to="/" /> : null}
            <h1 className="pt-5 text-center">SignUp</h1>
            {signupForm()}
            </div>
        </Layout>
    )
} 


export default Signup;