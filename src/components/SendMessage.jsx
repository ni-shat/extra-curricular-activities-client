import React, { useState } from "react";
// import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { db } from "../providers/AuthProvider";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const auth = getAuth(app);

const SendMessage = () => {

    const [message, setMessage] = useState("");

    const sendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() === "") {
            alert("Enter valid message");
            return;
        }
        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        });
        setMessage("");
    };

    return (
        <div>
            <form onSubmit={(event) => sendMessage(event)} className="send-message">
                <input
                    value={message}
                    placeholder="type message..."
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default SendMessage;