import { createSlice } from "@reduxjs/toolkit"

const counterStore = createSlice({
    name: 'counter',
    // 初始化state
    initialState: {
        count: 0
    },
    // 修改状态的方法 同步方法 支持直接修改
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    }
})

// 解构出来 actionCreater 函数
const {increment, decrement} = counterStore.actions
// 获取reducer
const reducer = counterStore.reducer

// 导出 actionCreater (按需导出)
export {increment, decrement}
// 导出 reducer (默认导出)
export default reducer