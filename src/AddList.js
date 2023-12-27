import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToObj, checkList, deleteList, } from './ListSlice';

function AddList(){

  const{listTask, check}=useSelector((state)=>state.lists)


  const dispatch=useDispatch()


console.log(check)


const handleEdit=(event)=>{
  dispatch(addToObj(event))
  // console.log(event)
}

  const handledelete=(value)=>{
  dispatch(deleteList(value))
  }

  const handleCheck=(id)=>{
   
      dispatch(checkList(id))
  
  }

    return(
        <div>
             <Table striped bordered hover style={{width:'60%',margin:'10px auto'}}>
      <thead>
        <tr>
          <th>CheckList</th>
          <th>YourList</th>
          <th>action</th>

        </tr>
      </thead>
      <tbody>
        {
        listTask&&  listTask.map((event,index)=>(
            
              <tr key={index}>
            <td><Form.Check  type='checkbox' onClick={()=>handleCheck(event.id)}/>
            </td>
            <td className={ event.check ? "check" : ""}>{event.list}</td>
            <td><Button className='mx-2' variant="primary" onClick={()=>handleEdit(event)}>Edit</Button>
            <Button  variant="primary" onClick={()=>handledelete(event.id)}>Delete</Button>
            </td>
        </tr>
            
          ))
        }
        
      </tbody>
    </Table>
        </div>
    )
}

export default AddList;