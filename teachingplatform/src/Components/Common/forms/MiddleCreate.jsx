import React , {useState} from 'react'

const MiddleCreate = () => {

    const [username, setUserName] = useState("")
    const [firstname, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhoneNo] = useState("")
    const [crpassword, setCreatePassword] = useState("")
    const [cfpassword, setConfirmPassword] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [date, setDate] = useState("")

  return (
    <>
      <input name="email" type="email" id="useremailname" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" class="block min-w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
    
    </>
  )
}

export default MiddleCreate
