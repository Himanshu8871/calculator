
import React,{useState} from 'react';


const Calculator = () => {
const [valueA,setValueA]= useState(0);
const [valueB,setValueB]= useState(0);
const [operations,setOperations]= useState('+');
const [result,setResult]= useState(0);

const handleSubmit = ()=>{
  
    if(operations==='+'){
    setResult(parseInt(valueA)+parseInt(valueB));
     }

     if(operations==='-'){
        setResult(valueA-valueB);
         }

      if(operations==='*'){
         setResult(valueA*valueB);
             }

      if(operations==='/'){
         setResult(valueA/valueB);
                 }

  }

    return (
      <div className="form">
          <h1>calculator in React js </h1>
          <h3>Result : {result}</h3>

              <div>  
              <input type='text' value={valueA} onChange={(e)=>setValueA(e.target.value)}/><br/><br/>
              <h3>{operations}</h3>
              <input type='text' value={valueB} onChange={(e)=>setValueB(e.target.value)}/>
              <button onClick={handleSubmit}>Submit</button>
            </div>
         <div>
         <button onClick={()=>setOperations('+')}>+</button>
         <button onClick={()=>setOperations('-')}>-</button>
         <button onClick={()=>setOperations('*')}>*</button>
         <button onClick={()=>setOperations('/')}>/</button>
         </div>
      </div>
    )
  }


export default Calculator;