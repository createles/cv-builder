import { useState } from 'react'
import './App.css'
import InputWrapper from './components/input-forms/InputWrapper'
import InputItem from './components/input-forms/InputItem'
import PrintPreview from './components/print-view/PrintPreview'

function App() {
  const [fullName, setFullName] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  return (
    <div className="app-body">
      <div className="input-forms">
    <InputWrapper title="Personal Info" wrapId="personal">
      <InputItem label="Full name" type="text" value={fullName} onChange={handleFullNameChange}></InputItem>
      <InputItem label="Email" type="email"></InputItem>
      <InputItem label="Phone Number" type="tel"></InputItem>
    </InputWrapper>
    <InputWrapper title="Education" wrapId="educ"></InputWrapper>
    <InputWrapper title="Experience" wrapId="expi"></InputWrapper>
    </div>
    <PrintPreview fullName={fullName}></PrintPreview>
    </div>
  )
}

export default App
