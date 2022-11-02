import React from 'react'
import img from '../cash.png'
export default function Expense_liste({incomes,expenses,removeExp,removeInc}) {
  return (
    <div className='expense_liste'>

<div className='liste_expense'>
        <h3 className='titreexpense'>Incone</h3>
        <ul className='liste_gr'>
          {
            incomes.map((income)=>
              <li key={income.id} className='liste_li'>
              <div className="icones">
                <h5 className='s_text'>
                {income.label}$ {income.amount}
                </h5>
                <span className='d_text'>
                <button className="btnr" onClick={()=>removeInc(income.id)}><img src={img} alt="icon" className='ic' /></button>
                </span>
              </div>
          
          </li>
              )
          }
            
            
        </ul>
      
        </div>
        <div className="liste_expense">
        <h3 className='titreexpense'>Expenses</h3>
        <ul className='liste_gr'>
          {
            expenses.map(expense=>
                  <li  key={expense.id} className='liste_li'>
                  <div className="icones">
                    <h5 className='s_text'>
                    {expense.label} $ {expense.amount}
                    </h5>
                    <span className='d_text'>
                     <button className="btnr" onClick={()=>removeExp(expense.id)}><img src={img} alt="icon" className='ic' /></button> 
                    
                    </span>
                  </div>
              
              </li>
          )
          }   
        </ul>
      
        </div>
        
     
    </div>
  )
}
