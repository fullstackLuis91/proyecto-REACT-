import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
//importaciones
 const Register = () => {
    const initialValue = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birth: ""
    };
    const [data, setData] = useState(initialValue);
    const {createUser} = useContext (UserContext)

//     traerme la función del UserContext


const handleOnChange = (e) => {
   
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    createUser(data)
    //llamar a la función createUser y pasarle como argumento data (info del formulario)
    setData(initialValue);
    
  };


  

  return (
    <div>
      UserForm
      <form>
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          placeholder="Introduce your name"
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          placeholder="Introduce your lastname"
          onChange={handleOnChange}
        />
        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Introduce your e-mail"
          onChange={handleOnChange}
        />
         <input
          type="password"
          name="password"
          value={data.password}
          placeholder="Introduce your password"
          onChange={handleOnChange}
        />
         <input
          type="date"
          name="birth"
          value={data.birth}
          placeholder="Introduce your birth date"
          onChange={handleOnChange}
        />
        <button onClick={handleSubmit} >
          submit
        </button>
        <br />
      </form>
    </div>
  );
}


export default Register