import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from "../../firebase.init"
const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    let location = useLocation();
    if (error) {
        toast.error(error.message)
    }
    if (loading) {
        return <p>loading</p>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;