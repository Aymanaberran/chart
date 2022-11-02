

import { useEffect, useState } from 'react';
import './App.css';
import Balance from './Compenents/Balance';
import Expense_liste from './Compenents/ExpenseListe';
import Transactions from './Compenents/Transactions';
import {v4 as uuidv4} from 'uuid';
import Doughnat from './Chart/chart';

function App() {
  const[balance,setbalance] = useState(0);
  const [expenses,setExpenses]=useState([
    { id :uuidv4() , label:'salaire',amount :'300'},
    { id :uuidv4(), label:'travel',amount :'600'},
  ]);
  const [incomes,setIncomes]=useState([
    { id :uuidv4() , label:'enfant',amount :'300'},
    { id :uuidv4() , label:'education',amount :'600'},
  ]);
  
  const addInc=(income)=>{
    setIncomes([income, ...incomes]);


  }
  const addExp=(expense)=>{
    setExpenses([expense,...expenses])
  }

  const removeInc=(id)=>{
      const updateinc=incomes.filter(income=>income.id!==id);
      setIncomes(updateinc)
  }
  const removeExp=(id)=>{
    const updateExp=expenses.filter(expense=>expense.id!==id);
    setExpenses(updateExp)
};

useEffect(() =>{
  calculBalance();

});
const calculBalance = ()=>{
  const totalin=incomes.map(income=>income.amount);
  const totalex=expenses.map(expense=>expense.amount);
  const totalnc=totalin.reduce((amount,item)=> parseInt(amount) + parseInt(item),0)
  const totalexp=totalex.reduce((amount,item)=> parseInt(amount) + parseInt(item),0)
  setbalance(parseInt(totalnc)-parseInt(totalexp));
}


  return (
    <div className="App">

      <Balance balance={balance}/>
      <div className='global'>
      <div className="">
        <Doughnat />
      </div>   
      <div className='content'>
      <Transactions
        addInc={addInc} 
        addExs={addExp}
        />
      <Expense_liste 
            incomes ={incomes}
            expenses ={expenses}
            removeInc={removeInc}
            removeExp={removeExp}



            />
      </div>

   
       
      
    
    </div>
    </div>
  );
}

export default App;
