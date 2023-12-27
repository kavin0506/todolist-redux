import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, editList} from './ListSlice';

function ListForm(){

const dispatch=useDispatch()
const {selectlist}=useSelector((state)=>state.lists)
    
    const[list,setlist]=useState("")
    const[id,setids]=useState()


function handleAdd(event){
   event.preventDefault()
   dispatch(addList({list}))
    console.log(list);
    setlist(" ")
}

const handleUpdate=()=>{
 dispatch(editList({list,id}))
 setlist("")
}
useEffect(()=>{
setlist(selectlist.list)
setids(selectlist.id)
},[selectlist])
    return(
        <div className='formlist'>
            <Form>
            <Form.Group as={Row} className="pt-5 justify-content-center" controlId="formPlaintextPassword">
                <Form.Label column sm="1">
                AddList
                </Form.Label>
                <Col sm="5">
                <Form.Control type="text" placeholder="Enter Your List" value={list}  onChange={(e)=>setlist(e.target.value)}/>
                </Col>
                <Button className='col-sm-1 mx-1' variant="primary" onClick={handleAdd}>Add</Button>
                <Button className='col-sm-1' variant="primary" onClick={()=>handleUpdate()}>Update</Button>
            </Form.Group>
            </Form>
        </div>
    )
}

export default ListForm;