import React, { useEffect, useRef } from "react";
import { getAuth, GoogleAuthProvider, EmailAuthProvider, User } from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

interface LoginProps {
  user: User | null;
}

const Login: React.FC<LoginProps> = ({ user }) => {
  const uiRef = useRef<firebaseui.auth.AuthUI | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const auth = getAuth();

    if (!uiRef.current) {
      uiRef.current = new firebaseui.auth.AuthUI(auth);
    }

    if (user) return;

    uiRef.current.start(containerRef.current!, {
      signInOptions: [
        {
          provider: EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true,
        },
        GoogleAuthProvider.PROVIDER_ID,
      ],
      signInFlow: "popup",
      callbacks: {
        signInSuccessWithAuthResult: () => false,
      },
    });

    return () => {
      uiRef.current?.reset();
    };
  }, [user]);

  if (user) return <p>You are already logged in!</p>;

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <div ref={containerRef} />
      </div>
    </div>
  );
};

export default Login;