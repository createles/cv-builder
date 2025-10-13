import { useState } from 'react'
import './App.css'
import InputWrapper from './components/input-forms/InputWrapper'
import InputItem from './components/input-forms/InputItem'

function App() {
  return (
    <>
    <h1> Test </h1>
    <InputWrapper title="Personal Info" wrapId="personal-info">
      <InputItem label="Full name" type="text"></InputItem>
      <InputItem label="Email" type="email"></InputItem>
      <InputItem label="Phone Number" type="tel"></InputItem>
    </InputWrapper>
    <InputWrapper title="Education" wrapId="educ"></InputWrapper>
    <InputWrapper title="Experience" wrapId="expi"></InputWrapper>
    </>
  )
}

export default App
