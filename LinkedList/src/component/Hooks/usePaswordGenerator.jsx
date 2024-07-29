import React, { useState } from 'react'

const UsePaswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const generatePassword = (charLength, passwordRegression) => {

    if(charLength === 0){
      setErrorMessage("Enter Char Length");
      return
    }
    let updatedPasswordRegression = passwordRegression.filter(item => item?.state)
    if(updatedPasswordRegression.length === 0){
      setErrorMessage("Please Select one option")
      return
    }
    console.log("updated", updatedPasswordRegression)
    let charSet = "";
    updatedPasswordRegression.forEach((item, index) => {
      switch (item.title) {
        case "Include UpperCase Letter":
           charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          break;
        case "Include LowerCase Letter":
           charSet += "abcdefghijklmnopqrstuvwxyz"
          break;
        case "Include Numbers":
          charSet += "0123456789"
          break;
        case "Include Symbol":
          charSet += "!@#$%^&*()_+[]{}|;:,.<>?/~"
          break;

        default:
          break
      }
    })
     let newPassword = ""
    for(let i=0 ;i<charLength ;i++){
        let randomNumber = Math.floor(Math.random() * charSet.length);
         newPassword += charSet[randomNumber]
    }
    console.log("newp",newPassword)
    setPassword(newPassword)
    setErrorMessage("")
  }
  return { password, errorMessage, generatePassword }
}

export default UsePaswordGenerator