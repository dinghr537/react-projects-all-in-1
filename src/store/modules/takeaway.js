import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"


const foodSlice = createSlice({
    name: "foods",
    initialState: {
        foodsList: [],
        activeIndex: 0,
        cartList: []
    },
    reducers: {
        setFoodsList(state, action) {
            state.foodsList = action.payload
        },
        setActiveIndex(state, action) {
            state.activeIndex = action.payload
        },
        addCart(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            if (item) {
                item.count ++
            } else {
                state.cartList.push(action.payload)
            }
        },
        increCount(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            item.count ++
        },
        decreCount(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            if (item.count === 0) {
                return
            }
            item.count --

        },
        clearCart(state) {
            state.cartList = []
        }
    }
})

const { setFoodsList, setActiveIndex, addCart, increCount, decreCount, clearCart } = foodSlice.actions
const url = "http://localhost:3004/takeaway"
const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get(url)
        dispatch(setFoodsList(res.data))
    }
}

export { fetchFoodsList, setActiveIndex, addCart, increCount, decreCount, clearCart  }
const foodsReducer = foodSlice.reducer 
export default foodsReducer