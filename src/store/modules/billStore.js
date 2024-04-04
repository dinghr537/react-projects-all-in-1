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
        }
    }
})

const { setBillList } = billSlice.actions
const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8888/ka')
        console.log(res.data)
        dispatch(setBillList(res.data))
    }
}


const reducer = billSlice.reducer
export { getBillList }
export default reducer