import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div>一级路由</div>
            <Link to='/board'>面板</Link>
            <Link to='/about'>关于</Link>
            <Outlet />  
        </>
    )
}

export default Layout