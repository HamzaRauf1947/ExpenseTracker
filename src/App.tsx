
import { useState, } from 'react';

import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';


function App() { 


const [expenses, setexpenses] = useState([
    // {id:1,description:"aaa",amount:10,category:"Utlilities"},
    // {id:2,description:"bbb",amount:55,category:"Groceries"},
    // // {id:3,description:"xxx",amount:10,category:"Entertainment"},
    // {id:4,description:"zzzz",amount:10,category:"Utlilities"},
  ]);

  const [selectCategory, setSelectCategory] = useState("")

const visibleExpenses = selectCategory ? expenses.filter(e=>e.category===selectCategory):expenses


  return (
    <>
  

   
       <div className="mb-5">
        <ExpenseForm onSubmit={expense=>setexpenses([...expenses, {...expense,id:expenses.length+1}])}/>
      </div>
    
  
    
      
           <div className="mb-3">
      <ExpenseFilter onSelectCategory={(category)=>setSelectCategory(category)}/>
      </div>
           <ExpenseList expenses={visibleExpenses}
       onDelete={(id)=> setexpenses(expenses.filter(e=>e.id!=id))}
       />
     
  
     
    </>
  )
}

export default App
