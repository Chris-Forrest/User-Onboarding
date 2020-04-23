import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
display:flex;
flex-direction:column;
align-items:center;
border:1px solid rgb(210, 210, 210 );
border-radius: 5px;
box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
margin: 8px;
padding: 12px;
background-color:white;
width: 50%;

`;

const Warning = styled.p`
    width: 100%;
    font-size: 1.5rem;
    color: red;
    box-shadow: none;
    margin: 1% 0;
`

const StyledLabel =styled.label`
    /* color: white; */
`

export default function Form({
  values,
  changeValues,
  checkboxChange,
  submitUser,
  disabled,
  errors,
}) {
  return (
    <StyledForm onSubmit={submitUser}>
      <div className="errors">
        <Warning>
            {errors.username}
        </Warning>
        <Warning>
            {errors.email}
        </Warning>
        <Warning>
            {errors.password}
        </Warning>
        <Warning>
            {errors.termsOfService}
        </Warning>
      </div>
      <StyledLabel>User Name</StyledLabel>
      <input
        data-cy_username_input='cy_username_input'
        name="username"
        value={values.username}
        onChange={changeValues}
      ></input>
      <StyledLabel>Email</StyledLabel>
      <input 
      data-cy_email_input='cy_email_input'
      name="email" 
      value={values.email} 
      onChange={changeValues}></input>
      <StyledLabel>Password</StyledLabel>
      <input
        data-cy_password_input='cy_password_input'
        name="password"
        value={values.password}
        onChange={changeValues}
      ></input>
      <StyledLabel>Terms of Service</StyledLabel>
      <input
        type="checkbox"
        name="termsOfService"
        onChange={checkboxChange}
      ></input>
      <button onClick={submitUser} disabled={disabled}>
        Submit
      </button>
    </StyledForm>
  );
}