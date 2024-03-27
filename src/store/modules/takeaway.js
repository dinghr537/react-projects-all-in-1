import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"


const foodSlice = createSlice({
    name: "foods",
    initialState: {
        foodsList: []
    },
    reducers: {
        setFoodsList(state, action) {
            state.foodsList = action.payload
        }
    }
})

const { setFoodsList } = foodSlice.actions
const url = "http://localhost:3004/takeaway"
const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get(url)
        dispatch(setFoodsList(res.data))
    }
}

export { fetchFoodsList }
const foodsReducer = foodSlice.reducer 
export default foodsReducer