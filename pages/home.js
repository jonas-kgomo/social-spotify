import { useState, useContext } from 'react'
import UserContext from 'lib/UserContext'
import { supabase } from 'lib/Store'

const Login = () => {
  const { signIn } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (type, username, password) => {
    try {
      const { error, user } = 
        type === 'LOGIN'
          ? await supabase.auth.signIn({email: username, password})
          : await supabase.auth.signUp({email: username, password})
      // If the user doesn't exist here and an error hasn't been raised yet,
      // that must mean that a confirmation email has been sent.
      // NOTE: Confirming your email address is required by default.
      if (error) {
        alert('Error with auth: ' + error.message)
      }
      else if (!user) alert('Signup successful, confirmation mail should be sent soon!')
    } catch (error) {
      console.log('error', error)
      alert(error.error_description || error)
    }
  }

  return (
    <div className="flex justify-center ">
      <div className="w-full">
        <div className="border-teal p-4 border-t-12 bg-white mb-6 rounded-lg bg-white">
          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">Email</label>
            <input
              type="text"
              className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">Password</label>
            <input
              type="password"
              className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">

             
            <a
              onClick={(e) => {
                e.preventDefault()
                handleLogin('SIGNUP', username, password)
              }}
              href={'/channels'}
              className="bg-black rounded-lg  hover:bg-teal text-white py-2 px-4 rounded text-center transition duration-150 hover:bg-gray-600 hover:text-white"
            >
              Add User-Name
            </a>
          
            <a
              onClick={(e) => {
                e.preventDefault()
                handleLogin('LOGIN', username, password)
              }}
              href={'/channels'}
              className=" rounded-lg px-4 items-center rounded w-full text-center transition duration-150 text-gray-100  hover:bg-gray-200 bg-black hover:text-gray-800"
            >
             <div className="flex justify-center"><p className="py-2">Login</p>
            <img src="/spot.svg" className="mx-2 px-2 w-10 h-10"  alt="button"/> 
           
               </div>  </a>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Login
