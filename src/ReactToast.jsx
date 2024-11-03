import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactToast = () => {

    const popUp = () => {
        toast.success("login successfully......👍" , {
            position : "top-center"
        })
    }

    return (
        <>
            <button type='btn' onClick={popUp}>Login</button>
            <ToastContainer/>
        </>
    )
}
export default ReactToast;