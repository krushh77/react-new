import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {

    const router = useNavigate()

    const [userData, setUserData] = useState({ email: "", password: "" })

    console.log(userData, "userData")

    function handleChange(event) {
       
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (userData.email && userData.password) {
           
            try {
               
                const response = { data: { success: true, message: "Login Sucessfull." } }
              
                if (response.data.success) {
                    setUserData({ email: "", password: "" })
                    toast.success(response.data.message)
                    router('/')
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        } else {
            alert("All fields are required.")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email : </label><br />
                <input type="email" name="email" value={userData.email} onChange={handleChange} required /><br />
                <label>Password : </label><br />
                <input type="password" name="password" value={userData.password} onChange={handleChange} required /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}


export default Login;