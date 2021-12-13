import React from "react";
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect } from "react-router-dom";


const fireBaseUIConfig = {
    signInOptions: [
        {
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true,
        },
        GoogleAuthProvider.PROVIDER_ID
    ],
    signInFlow:'popup',
    credentialHelper:'none',
    callbacks: {
        signInSuccessWithAuthResult: () => {
            return false;
        }
    }
}

export default function Login(props) {
    const auth = getAuth();

    if (props.user) {
        return <Redirect to="/" />
    }

    return (
        <div className="card bg-clear mt-3">
            <div className="container card-body mt-5">
                <StyledFirebaseAuth uiConfig={fireBaseUIConfig} firebaseAuth={auth}/>
            </div>
        </div>
    )
}