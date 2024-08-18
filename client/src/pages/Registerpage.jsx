import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Registerpage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function RegisterUser(ev) {
        ev.preventDefault();

        try {
            axios.post('/register', {
                name,
                email,
                password
            });
            alert('Registration successful. Now you can log in');

        } catch (e) {
            alert('Registration failed . please try again later');

        }
    }
    return (
        <div className=" mt-20 grow flex justify-around">
            <div className="">
                <h1 className="text-2xl text-center mb-6">Register</h1>

                <form className="max-w-md mx-auto" onSubmit={RegisterUser}>
                    <input type="text" placeholder="Name"
                        value={name}
                        onChange={ev => setName(ev.target.value)} />
                    <input type="email" placeholder="Email or Id"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                    <input type="password" placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />
                    <button className="bg-red-500 p-2 w-full text-white rounded-2xl">Sign up</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet? <Link className="underline text-black" to={'/login'}>Login</Link>
                    </div>
                </form>

            </div>

        </div>
    );
}