import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import Placespage from "./Placespage.jsx";
import AccountNav from "../AccountNav.jsx";

export default function Profilepage() {

    const [redirect, setRedirect] = useState(null);
    const { user, ready, setUser } = useContext(UserContext);
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function Logout() {
        await axios.post('/logout');
        setUser(null);
        setRedirect('/');
    }

    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />;
    }


    

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div>
            <AccountNav/>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email}) <br />

                    <button onClick={Logout} className='w-52 justify-center mt-5  bg-primary text-white rounded-full '>Logout</button>

                </div>
            )}
            {subpage === 'places' && (
                <Placespage />
            )}
        </div>
    );
}
