
import { useRef, useState, type FormEvent } from 'react';
import './App.css'
import Form from './components/form';
import ZodForm from './components/ZodForm';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';

// export const categories = ["Groceries","Utlilities","Entertainment"] as const
function App() { 
  // interface PersonType{
  //   name:string,age:number
  // }

  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);

  // const person:PersonType = {name:"",age:0}

  // const handleSubmit = (e:FormEvent)=>{
  //   e.preventDefault()
  //  if(nameRef.current!=null) person.name = nameRef.current.value;
  //  if(ageRef.current!=null) person.age = parseInt(ageRef.current.value);

  //  console.log(person);
   
    
  // }


const [expenses, setexpenses] = useState([
    {id:1,description:"aaa",amount:10,category:"Utlilities"},
    {id:2,description:"bbb",amount:55,category:"Groceries"},
    // // {id:3,description:"xxx",amount:10,category:"Entertainment"},
    // {id:4,description:"zzzz",amount:10,category:"Utlilities"},
  ])
 expenses.map(e=>console.log(e.id)

);

  const [selectCategory, setSelectCategory] = useState("")

const visibleExpenses = selectCategory ? expenses.filter(e=>e.category===selectCategory):expenses


  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor="name">Name</label>
          <input
          ref={nameRef}
            id="name"
            type="text" />
        </div>

        <div className='mb-3'>
          <label htmlFor="age">Age</label>
          <input
          ref={ageRef}
            id="age"
            type="number" />
        </div>

        <button 
        type='submit'
        className='btn btn-primary'>Submit</button>


      </form> */}

      {/* <Form/> */}

      {/* <ZodForm/> */}
  
   <div className='d-flex gap-3'>
      <div className='w-50'>
       <div className="mb-5">
        <ExpenseForm onSubmit={expense=>setexpenses([...expenses, {...expense,id:expenses.length+1}])}/>
      </div>
    
     </div>
    
      <div className='w-50'>
           <div className="mb-3">
      <ExpenseFilter onSelectCategory={(category)=>setSelectCategory(category)}/>
      </div>
           <ExpenseList expenses={visibleExpenses}
       onDelete={(id)=> setexpenses(expenses.filter(e=>e.id!=id))}
       />
      </div>
   </div>
     
    </>
  )
}

export default App
