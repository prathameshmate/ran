import React, { useState } from 'react';


const FormLogin = () => {

    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");

    const [arr, updateArr] = useState([]);

    const fun1 = (event) => {
        updateEmail(event.target.value);
    }
    const fun2 = (event) => {
        updatePassword(event.target.value);
    }

    const passData = (event) => {
        event.preventDefault();
        if (email  && password) {
            updateArr(() => {
                return [
                    ...arr,
                    { email: email, password: password }
                ];
            })
        }
        else {
            alert("filled the data ...");
        }
        updateEmail("");
        updatePassword("");
    }

    return (
        <>
            <form action="" onSubmit={passData}>
                <label htmlFor="">UserName:</label> <br />
                <input type="email" placeholder='enter you email' value={email} onChange={fun1} />

                <br />

                <label htmlFor="">PassWord : </label> <br />
                <input type="password" placeholder='enter your password' value={password} onChange={fun2} />
                <button type='submit'>Submit</button>
            </form>
            <div>
                {arr.map((currValue, unique) => {
                    return (

                        <p key={unique}>email :{currValue.email} and password :{currValue.password}</p>
                    );
                })
                }
            </div>

        </>
    )
}
export default FormLogin;