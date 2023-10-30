import { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ handleSubmit }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = (event) => {
        event.preventDefault()
        handleSubmit(username, password)
        setPassword('')
        setUsername('')
    }
    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={login}>
                <div>
          username
                    <input
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        id='username'
                    />
                </div>
                <div>
          password
                    <input
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        id='password'
                    />
                </div>
                <button type="submit" id='login-button'>login</button>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default LoginForm