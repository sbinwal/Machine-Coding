import { configureStore } from "@reduxjs/toolkit";
import EmployeeSlice from '../Slice/AddEmployeeSlice'

const store = configureStore({
    reducer : {
        "EmployeeSlice" : EmployeeSlice
    }
})

export default store