import React, { useContext, useState, useEffect } from 'react';
import {  onAuthStateChanged  } from "firebase/auth";
import { auth } from "../api/firebase.js";
import Itemprofile from "../components/handling/Itemprofile";
import AppContext from "../context/AppContext.js";
import "../styles/components/profile.scss";

const ProfileFirestore = () => {
    const { state } = useContext(AppContext);
    const { profile } = state;
    return(
        <>
            {profile.map((item) => (
                <Itemprofile key={item.id} profile={item}/>
            ))}
        </>
    );
};

const ProfileAuth = ({ user }) => {
    return(
        <>
            <Itemprofile key={user.uid} profile={user}/>
        </>
    );
};

const ProfileUser = () => {
    const { state } = useContext(AppContext);
    const {  profile } = state;
    const [ user, setUser ] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser({
                    uid: user.uid,
                    email: user.email,
                    namefull: user.displayName
                });
            }
        })
    }, []);

    return(
        <div className="container py-5">
            <div className="py-3"></div>
            <div className="card-profile">
                { profile.length > 0 ? <ProfileAuth user={user} /> : <ProfileFirestore /> }
            </div>
        </div>
    );
};

export default ProfileUser;