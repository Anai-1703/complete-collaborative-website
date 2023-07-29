import { useEffect, useState } from "react";
import { getToken } from "../services/token/getToken";
import { getUserToken } from "../services/token/getUserToken";
import { getTokenInfo } from "../services/token/getTokenInfo";
import { getUser } from "../services/GetUser";
import { Link } from "react-router-dom";
import { DefaultAvatar } from "./DefaultAvatar";

import './UserFloat.css';


const UserFloat = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = getToken();
        const userToken = getUserToken();

        if (token && userToken) {
        const tokenInfo = getTokenInfo(token);
        const userId = tokenInfo.id;

        getUser(userId, userToken)
            .then((userData) => {
            setUser(userData);
            })
            .catch((error) => {
            console.error("Error fetching user data:", error);
            });
        }
    }, []);

    if (!user) {
        return null; // No mostrar nada si no hay usuario o token válido
    }

    const userData =  user[0].user[0];

    return (
        <section className="user-float">
            <Link className="link-to-user-float" to={`/users/${userData.id}`}>
                {userData.avatarURL ? (
                <img className="user-avatar" src={userData.avatarURL} alt="Avatar" />
                ) : (
                <DefaultAvatar post={true} />
                )}
                <span className="user-name-float">{userData.nameMember}</span>
            </Link>
            <Link className="float-btn" to="/new-post">
            <svg className="float-btn"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z"
                    fill="blueviolet"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19Z"
                    fill="blue"
                />
            </svg>
            </Link>
        </section>
    );
};

export default UserFloat;
