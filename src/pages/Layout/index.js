import { Button } from 'antd-mobile'
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <>
            <Outlet />
            <div>Layout here</div>
            <Button color='primary'>测试全局</Button>
            <div className='local'>
                <Button color='primary'>测试局部</Button>
            </div>
        </>
    )
}

export default Layout