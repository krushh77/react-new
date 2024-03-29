import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



function Registerr (){

  const router = useNavigate()

const [registerdata, setregisterdata] = useState({name: "", email: "", password: "", confirmpassword: ""})
console.log(registerdata,"registerdata")


function handlechange(event){
  setregisterdata({ ...registerdata, [event.target.name]: event.target.value})
  
}


async function handleSubmit(event) {
  if (registerdata.name && registerdata.email && registerdata.password && registerdata.confirmPassword) {
   
     try {
        const response = { data: { success: true, message: "Registeration Completed." } }
      
        if (response.data.success) {
            setregisterdata({ name: "", email: "", password: "", confirmPassword: "" })
            toast.success(response.data.message)
            router('/login')
        }
    } catch (error) {
        toast.error(error.response.data.message)
    }
} else {
    alert("All fields are required.")
}
}



return(

<div>
<form onSubmit={handleSubmit}>
    <label>name</label><br/>              
          <input type="text" name="name" value={registerdata.name}  onChange={handlechange} required/><br/>

       <label>email</label><br/>
          <input type="email" name="email"  value={registerdata.email} onChange={handlechange}  required/><br/>

       <label>password</label><br/>
           <input type="password" name="password"  value={registerdata.password} onChange={handlechange}  required/><br/>

        <label>confirm password</label><br/>
           <input type="password" name="confirmpassword"  value={registerdata.confirmpassword} onChange={handlechange}  required/><br/>

        <input type="submit" value="Registerr"/>

  </form>
</div>
)







}
export default Registerr;