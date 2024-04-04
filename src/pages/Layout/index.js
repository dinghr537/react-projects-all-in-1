import { Button } from 'antd-mobile'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getBillList } from '@/store/modules/billStore'


const Layout = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBillList())
    }, [dispatch])
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