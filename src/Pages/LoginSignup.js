import { useState } from "react"
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            navigate('/home');
        }
    }

  return (
    <div className="pt-16 pb-24">
        <nav className="pl-20">
            <img src="images/logoH.png" alt="logo" />
        </nav>
        <div className="w-[50%] max-w-[450px] mx-auto mt-10">
            <h2 className="text-3xl text-center text-[#141414] font-bold font-inter">Log in or Sign up</h2>
            <p className="text-center text-[#434343] font-inter mt-2 mx-10">Join millions of others in sharing successful moves on <span>HelpMeOut</span>.</p>
            <button className="authBtn mt-6">
                <img src="images/google.png" alt="google" />
                Continue with Google
            </button>
            <button className="authBtn mt-4">
                <img src="images/facebook.png" alt="facebook" />
                Continue with Facebook
            </button>
            <div className="relative mt-7 px-5">
                <hr className="h-[2px] w-full bg-[#B9C2C8]" />
                <span className="bg-white text-[#B9C2C8] absolute left-[50%] translate-x-[-50%] top-[-12px] px-3">or</span>
            </div>
            <form onSubmit={handleSubmit} className="mt-7">
                <label htmlFor="email" className="text-[#141414] font-work font-semibold text-sm">Email</label>
                <input 
                type="text" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="w-full border-[#B6B3C6] border-[1px] font-work rounded-lg p-4 mt-2 mb-3 outline-none" 
                />
                <label htmlFor="password" className="text-[#141414] font-work font-semibold text-sm">Password</label>
                <input 
                type="text" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" 
                className="w-full border-[#B6B3C6] border-[1px] font-work rounded-lg p-4 mt-2 outline-none" 
                />
                <button type="submit" className="p-4 rounded-lg w-full bg-[#120B48] font-work font-semibold text-white mt-6">Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default LoginSignup