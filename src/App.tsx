
import { useState, } from 'react';

import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: "Groceries" | "Utlilities" | "Entertainment";
}

function App() { 


const [expenses, setexpenses] = useState<Expense[]>([]);

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
