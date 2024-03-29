import { useState } from "react";
// import { usenb}

function Register() {

    // const router =  
    const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmPassword: "" })
   
    console.log(userData, "userData")

    function handleChange(event) {
        
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (userData.name && userData.email && userData.password && userData.confirmPassword) {
        
            alert("Registeration COmpleted.")
        } else {
            alert("Alert all fields are required.")
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name : </label><br />
                <input type="text" name="name" onChange={handleChange} required /><br />
                <label>Email : </label><br />
                <input type="email" name="email" onChange={handleChange} required /><br />
                <label>Password : </label><br />
                <input type="password" name="password" onChange={handleChange} required /><br />
                <label>Confirm Password : </label><br />
                <input type="password" name="confirmPassword" onChange={handleChange} required /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;