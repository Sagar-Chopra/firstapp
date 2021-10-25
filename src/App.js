import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';



const App = () => {

  /*let count = 0;

  const[num, setNum] = useState(count);
  


  const Decrem = () => {
    if(num > 0){
      setNum(num-1);
      setNum(num-1);
    }else{
      alert('You have reached minimum Value [0]');
      setNum(0);
    }
   } */

   const[text,setText] = useState("No Notes");
   const[items,setItems] = useState([]);

  

   const changeText2 = (event)=>{
        // console.log(event);
       setText(event.target.value);
       
   }

   const addItem = () =>{
     setItems((oldItems)=>{
       return [...oldItems, text];

      });
  }

  const deleteItem = () =>{
    setItems(0);
  }
    
    


  return(
  <>
    <div >
      <div>
      <h1>To do App</h1>
      
        <input type="text" placeholder="type here" onChange={changeText2} value={text}></input>
        <Tooltip title="Add">
          <Button onClick={addItem} ><AddIcon/></Button>
          
        </Tooltip>
        <Tooltip title="Delete">
          <Button onClick={deleteItem} ><DeleteIcon/></Button>
          
        </Tooltip>

        
        { 
          items.map((item) =>{
            return <li>{item}</li>
          
          }
          )
        }
        
      </div>
    </div>
  </>
  )
};

export default App;



