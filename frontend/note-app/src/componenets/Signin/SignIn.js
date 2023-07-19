import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Signin.css";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault();
        const user = { username, password };

        axios({
            method: "POST",
            url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/users/login`,
            headers: {
                "Content-Type": "application/json",
            },
            data: user,
        })
            .then((res) => {
                console.log("User logged in");
                const token = res.data.token;
                localStorage.setItem("token", token);
                navigate("/dashboard");
            })
            .catch((err) => {
                alert("Authentication failed");
                setUsername("");
                setPassword("");
            });
    };


    // ...

const handleRegister = (e) => {
    e.preventDefault();

    const user = { username, password }; // Ensure you have values for username and password

    axios({
        method: "POST",
        url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/users/`,
        headers: {
            "Content-Type": "application/json",
        },
        data: user,
    })
        .then((res) => {
            console.log("New User created");
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
        })
        .catch((err) => {
            alert(err.response.data.error); // Display the error message from the backend
            setUsername("");
            setPassword("");
        });
};

// ...





    // 
    





    
    return (
        <div className="Signin">
            <h1 className="SigninHead">Noter</h1>
            <div className="SigninForm">
                <form>
                    <div className="FormUsername">
                        <span className="FormLabel">Username</span>
                        <input
                            type="text"
                            className="FormInput"
                            required
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>
                    <div className="FormPassword">
                        <span className="FormLabel">Password</span>
                        <input
                            type="password"
                            className="FormInput"
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="FormBtns">
                        <button className="Btns" onClick={handleSignin}>
                            Sign In
                        </button>
                        <button
                            className="Btns registerBtn"
                            onClick={handleRegister}
                        >
                            {" "}
                            Create Account{" "}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;














































































// //console.log("Backend URL:", process.env.REACT_APP_NOTERAPP_BACKEND);

// import axios from "axios";
// import React, { useState } from 'react';

// function SignIn() {

//    const [username, setUsername] = useState("");
//    const [password, setPassword] = useState("");

//     const handleSignin = (e) => {
//         e.preventDefault();

//         const user = {email: username, password};

//         axios({
//             method: "POST",
//             url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/user/login`,
//             headers: {
//                 "Content-type": "application/json",
//             },
//             data: user,
//         }).then((res) => {
//             console.log("User Logged In");
//             const token = res.data.token;
//             localStorage.setItem("token", token);           
//         }).catch((e) => {
//           alert("Authentication failed");
//           setUsername("");
//           setPassword("");
//         })
//     };

//     const handleRegister =(e) => {
//         e.preventDefault();

//         const user = {username, password};

//         axios({
//             method:"POST",
//             url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/users/create`,
//             headers: {
//                 "Content-type": "application/json",
//             },
//             data: user,
//         }).then((res) => {
//             console.log("New User Created!");
//             localStorage.setItem("token", res.data.token);
//         })
//          .catch((e)=> {
//             alert(e);
//             setUsername("");
//             setPassword("");
//             });
        
    
//     }

//   return (
//     <div className='Signin'>
//         <h1 className='SigninHead'>NOTES</h1>
//         <div className='Signinform'>
//         <form>
//             <div className='FormUsername'>
//                 <span className='FormLabel'>Username</span>
//                 <input type="text" className='FormInput' required value={username} onChange={(e) => {
//                   setUsername(e.target.value); 
//                 }} 
//                 />


//             </div>


//             <div className='FormPassword'>
//              <span className='FormLabel'>Password</span>
//              <input type="password" className='FormInput' required value={password} onChange={(e) => {
//                 setPassword(e.target.value);
//              }}/>


//             </div>


//             <div className='FormBtns'>
//                 <button className='Btns' onClick={handleSignin}>Sign In</button>

//                 <button className='Btns registerBtn' onClick={handleRegister}>Create Account</button>


//                 {/* <button className='Btns registerBtns'  onClick={handleRegister}></button> */}
//             </div>
//         </form>
//         </div>
//     </div>
//   );
// }

// export default SignIn;

















































// import axios from "axios"
// import React, { useState } from 'react'

// function SignIn() {

//    const [username, setUsername] = useState("")
//    const [password, setPassword] = useState("")

//     const handleSignin = (e) => {
//         e.preventDefault();

//         const user = {username,password};

//         axios({
//             method: "POST",
//             url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/user/login`,
//             headers: {
//                 "Content-type": "application/json"
//             },
//             data: user,
//         }).then((res) => {
//             console.log("User Logged In");
//             const token = res.data.token;
//             localStorage.setItem("token", token);           
//         }).catch((e) => {
//           alert("Authentication failed");
//           setUsername("");
//           setPassword("");
//         })
//     };

//     const handleRegister =(e) => {
//         e.preventDefault()

//         const user = {email: username, password};

//         axios({
//             method:"POST",
//             url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/users/create`,
//             headers: {
//                 "Content-type": "application/json",
//             },
//             data: user,
//         }).then((res) => {
//             console.log("New User Created!")
//             localStorage.setItem("token", res.data.token)
//         })
//          .catch((e)=> {
//             alert(e);
//             setUsername("");
//             setPassword("");
//             });
        
    
//     }

//   return (
//     <div className='Signin'>
//         <h1 className='SigninHead'>NOTES</h1>
//         <div className='Signinform'>
//         <form>
//             <div className='FormUsername'>
//                 <span className='FormLabel'>Username</span>
//                 <input type="text" className='FormInput' required value={username} onChange={(e) => {
//                   setUsername(e.target.value); 
//                 }} 
//                 />


//             </div>


//             <div className='FormPassword'>
//              <span className='FormLabel'>Password</span>
//              <input type = "password" className='FormInput' required value={password} onChange={(e) => {
//                 setPassword(e.target.value)
//              }}/>


//             </div>


//             <div className='FormBtns'>
//                 <button className='Btns' onClick={handleSignin}>Sign In</button>

//                 <button className='Btns registerBtn' onClick={handleRegister}>Create Account</button>


//                 {/* <button className='Btns registerBtns'  onClick={handleRegister}></button> */}
//             </div>
//         </form>
//         </div>
//         </div>
//   );
// }

// export default SignIn