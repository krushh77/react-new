import { useState } from "react";



function Login (){

const [registerdata, setregisterdata] = useState({name: "", email: "", password: "", confirmpassword: ""})
console.log(registerdata,"registerdata")


function handlechange(event){
  setregisterdata({ ...registerdata, [event.target.name]: event.target.value})
  
}


async function handleSubmit(event) {
  event.preventDefault();
  if (registerdata.name && registerdata.email && registerdata.password && registerdata.confirmpassword) {
      
      alert("Registeration COmpleted.")
  } else {
      alert("Alert all fields are required.")
  }
}



return(

<div>
<form onSubmit={handleSubmit}>
    <label>name</label><br/>              
          <input type="text" name="name" onChange={handlechange} required/><br/>

       <label>email</label><br/>
          <input type="email" name="email" onChange={handlechange}  required/><br/>

       <label>password</label><br/>
           <input type="password" name="password" onChange={handlechange}  required/><br/>

        <label>confirm password</label><br/>
           <input type="password" name="confirmpassword" onChange={handlechange}  required/><br/>

        <input type="submit" value="Login"/>

  </form>
</div>
)







}
export default Login;