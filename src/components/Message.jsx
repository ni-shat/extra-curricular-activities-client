import React from "react";
import { useContext } from "react";
// import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from "../providers/AuthProvider";
const Message = ({ message }) => {
    //   const [user] = useAuthState(auth);
    const { user } = useContext(AuthContext);

    return (
        <div
            className={` ${message.uid === user.uid ? "right" : ""} mt-60 mx-60`}>
            <img
                className="chat-bubble__left"
                src={message.avatar}
                alt="user avatar"
            />
            <div className="chat-bubble__right">
                <p className="user-name">{message.name}</p>
                <p className="user-message">{message.text}</p>
            </div>
        </div>
    );
};
export default Message;