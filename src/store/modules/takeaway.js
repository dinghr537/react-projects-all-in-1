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
        }
    }
})

const { setFoodsList, setActiveIndex, addCart } = foodSlice.actions
const url = "http://localhost:3004/takeaway"
const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get(url)
        dispatch(setFoodsList(res.data))
    }
}

export { fetchFoodsList, setActiveIndex, addCart }
const foodsReducer = foodSlice.reducer 
export default foodsReducer