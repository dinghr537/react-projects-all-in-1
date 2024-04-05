import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const billSlice = createSlice({
    name: 'bill',
    initialState: {
        billList: []
    },
    reducers: {
        setBillList(state, action) {
            state.billList = action.payload
        },
        addBill(state, action) {
            state.billList.push(action.payload)
        }
    }
})

const { setBillList, addBill } = billSlice.actions
const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8888/ka')
        console.log(res.data)
        dispatch(setBillList(res.data))
    }
}
const addToBillList = (data) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:8888/ka', data)
        console.log(res.data)
        dispatch(addBill(res.data))
    }
}


const reducer = billSlice.reducer
export { getBillList, addToBillList }
export default reducer