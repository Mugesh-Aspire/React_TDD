import React from 'react'
import { loginRequest } from '../sampleApi'


export default function Login() {
    const [userName, setUserName] = React.useState('')
    const [passWord, setPassWord] = React.useState('')
    const [successMessage, setSuccessMessage] = React.useState('')

    const onPressLogin =  () => {
        // const successMessage = await loginRequest()
        setSuccessMessage('User loggedin successfully.')
    }
    return <div>
        <h3> Login</h3>
        <div>
            <form>
                <input name='UserName' value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input name='PassWord' value={passWord} onChange={(e) => setPassWord(e.target.value)} />
                <div>
                    <button id='login' onClick={onPressLogin}>Login</button>
                </div>
            </form>
        </div>
        <div className='success'>{successMessage}</div>
    </div>
}