import { createSlice } from "@reduxjs/toolkit";


const initialState={
        listTask:[],
        selectlist:{},
        
}

const ListSlice=createSlice({
    name:'listSlice',
    initialState,
    reducers:{
            addList:(state,action)=>{
                    let id=Math.floor(Math.random()*100);
                    const listname={...action.payload,id}
                    state.listTask.push(listname)
                    // console.log(listname)
            },
            deleteList:(state,action)=>{
                state.listTask=state.listTask.filter((val)=>val.id!==action.payload )
                    // console.log(action)               
            },
             editList:(state,action)=>{
                state.listTask=state.listTask.map((event)=>(
                        event.id===action.payload.id ? action.payload:event
                ))
            },
            addToObj:(state,action)=>{
                state.selectlist=action.payload
            },
            checkList:(state,action)=>{
                
                state.listTask = state.listTask.map((task)=>  (task.id === action.payload ) ?  task.check ?{...task,check:false}:{...task, check:true }:task)


                // console.log(val)
            }
        
    }
})

 export const  {addList,deleteList,editList,addToObj,checkList}=ListSlice.actions

 export default ListSlice.reducer

