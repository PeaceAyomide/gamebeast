import React, { useState } from 'react'
import { database } from './Pages/Home/FirbaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './RegistrationAndLogin.css'

const RegistrationAndLogin = () => {

const [login, setLogin] = useState(false)

    const history = useNavigate()

    const handleSubmit = (e, type) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if (type == 'signup') {

            createUserWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, 'authData')
                history('/home')


            }).catch(err => {
                alert(err.code)
                setLogin(true)
            })
        } else {
            signInWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, 'authData')
                history('/home')
            }).catch(err => {
                alert(err.code)
            })

}


    }
  return (
      <div className='Apps'>
          
          <div className="button-container">
              <div className={login == false ?'activeColor' : 'pointer' } onClick={()=>setLogin(false)}>SignUp</div>
              <div className={login == true ? 'activeColor' : 'pointer'} onClick={()=>setLogin(true)}>Login</div>
</div>

          <h1>{ login? 'Login': 'SignUp' }</h1>
          <form onSubmit={(e) => handleSubmit(e, login?'signin': 'signup')}>
          <input name='email' placeholder='Email' /><br />
          <input name='password' type='password' placeholder='Password' /><br/><br/>     
              <button className='btenz'>{ login?'Login':'SignUp'}</button>
          </form>
      </div>
  )
}

export default RegistrationAndLogin