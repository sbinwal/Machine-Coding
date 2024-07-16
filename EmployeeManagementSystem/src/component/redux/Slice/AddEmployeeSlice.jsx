import { createSlice } from "@reduxjs/toolkit"


const EmployeeSlice = createSlice({
    name : "EmployeeSlice",
    initialState : {
        employeeData : JSON.parse(localStorage.getItem("employeeData")) || [],
        isEmployeeModal : false
    },
    reducers : {
        addEmployee : (state,action) =>{
                state.employeeData.push(action.payload)
                localStorage.setItem("employeeData", JSON.stringify(state.employeeData))
        },
        removeEmployee : (state,action) =>{
            state.employeeData.splice(action.payload,1)
            localStorage.setItem("employeeData", JSON.stringify(state.employeeData))
    },
        openEmployeeModal : (state) =>{
            state.isEmployeeModal = true
    },
    closeEmployeeModal : (state) =>{
        state.isEmployeeModal = false
}
    }
})

export const {addEmployee,openEmployeeModal,closeEmployeeModal,removeEmployee} = EmployeeSlice.actions
export default EmployeeSlice.reducer