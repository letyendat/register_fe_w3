import React, { useState } from "react";
import userApi from "../../api/userApi";
import SignUpForm from "./SignUpForm";
import { useMutation } from 'react-query'

Register.propTypes = {};

function Register(props) {
    // const [loading, setLoading] = useState(false);
    const registerAccount = async (values) => {
        try {
            const response = await userApi.Register(values);
            if (response.message === "Success") {
                alert("Register Success")
            }
            setInfo(response);
        } catch (error) {
            alert(error.response.data.message);
        }
        
       
    };
    const { isLoading, isError, error, mutate } = useMutation(registerAccount, { retry: 0 })
    const [info, setInfo] = useState({})

    const handleFormSubmit = async (values) => {
        mutate(values)
    };

    return (
        <div>
            <SignUpForm onSubmit={handleFormSubmit} loadingState={isLoading} />
        </div>
    );
}

export default Register;
