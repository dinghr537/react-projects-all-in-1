import { Link, useNavigate } from 'react-router-dom'


// option 1: <Link>

// option 2: useNavigate
const Login = () => {
    const navigate = useNavigate()

    return (
        <>
            <div>LOGIN ...</div>

            <Link to="/article">go to article page</Link>

            <button onClick={()=>navigate('/article')}>go</button>
        </>
        
    )
}

export default Login