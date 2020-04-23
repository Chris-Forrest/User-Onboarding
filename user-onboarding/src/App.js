import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import Form from "./components/Form";
import "./App.css";

const StyledContainer = styled.div`
margin-left:25%;
`

const StyledDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
border:1px solid rgb(210, 210, 210 );
border-radius: 5px;
box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
margin: 8px;
padding: 12px;
background-color:#39aafa;
width: 50%;
`

const url = "https://reqres.in/api/users"



const initialFormValues = {
  username: "",
  email: "",
  password: "",
  termsOfService: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  termsOfService: false,
};

const formValidation = yup.object().shape({
  username: yup
    .string()
    .min(3, "username must have at least 3 characters!")
    .required("username is required!"),
  email: yup
    .string()
    .email("a VALID email is required")
    .required("email is required"),
  password: yup
    .string()
    .required("password is required"),
  //termsOfService: yup
   // .required("you must agree to terms of service")

})

export default function App() {
  const [users, setUsers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const [formDisabled, setFormDisabled] = useState(true)

  const [formErrors, setFormErrors] = useState(initialFormErrors)

  // const getUsers = () => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setUsers(res.data.data);
  //     })
  //     .catch((err) => {
  //       debugger;
  //     })
  // }

  // useEffect(() => {
  //   getUsers();
  // }, []);
  // console.log(users)

  const postUser = (user) => {
    axios
      .post(url, user)
      .then((res) => {
        setUsers([...users, res.data])
        console.log(res.data);
      })
      .catch((err) => {
        debugger;
      })
  }

useEffect(()=> {

}, [users])

  const changeValues = (event) => {

    const name = event.target.name
    const value = event.target.value
    yup
    .reach(formValidation, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: '',
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const checkboxChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked,
    })
  }

  useEffect(()=>{
    formValidation.isValid(formValues)
    .then(valid => {
      setFormDisabled(!valid)
    })
  }, [formValues])

  const submitUser = (event) => {
    event.preventDefault()

    const newUser = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      termsOfService: formValues.termsOfService,
    };
// console.log(newUser)
    postUser(newUser)
    setFormValues(initialFormValues)
  };

  return (
    <StyledContainer>
      <Form
        values={formValues}
        changeValues={changeValues}
        checkboxChange={checkboxChange}
        submitUser={submitUser}
        disabled={formDisabled}
        errors={formErrors}/>
        <StyledDiv>
      {
        users.map(user=>{
         return( <div className="userCard">
            <h2>{user.username}</h2>
        <p>{user.email}</p>
          </div>)
        })
      }
      </StyledDiv>
    </StyledContainer>
  );
}