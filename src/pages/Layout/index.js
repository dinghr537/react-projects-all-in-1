import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <>
            <Outlet />
            <div>Layout here</div>

        </>
    )
}

export default Layout