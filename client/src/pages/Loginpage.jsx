import axios from "axios";
import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Loginpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);

    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const response = await axios.post('/login', { email, password });
            const userInfo = response.data;
    
            setUser(userInfo);
            alert('Login Successful');
            setRedirect(true);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Server Error:', error.response.data);
                alert('Login failed. Server Error.');
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Network Error:', error.request);
                alert('Login failed. Network Error.');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error:', error.message);
                alert('Login failed. An unexpected error occurred.');
            }
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className=" mt-20 grow flex justify-around">
            <div className="">
                <h1 className="text-2xl text-center mb-4">Login</h1>

                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                    <input
                        type="email"
                        placeholder="Email or Id"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                    <button className="bg-red-500 p-2 w-full text-white rounded-2xl">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
