import React from 'react'


export default function Login() {
    const [userName, setUserName]= React.useState('')
    const [passWord, setPassWord]= React.useState('')
    return <div>
        <h3> Login</h3>
        <div>
            <form>
                <input name='UserName' value={userName} />
                <input name='PassWord' value={passWord} />
            </form>
        </div>
    </div>
}