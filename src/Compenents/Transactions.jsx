import React, { useState } from 'react'

import {v4 as uuidv4} from 'uuid'
export default function Transactions({addInc,addExs}) {
    const [label,setLabel] = useState('');
    const [amount,setAmount] = useState('');
    const addIncome=(income)=>{
        addInc(income);
        setTimeout(() =>{
            setLabel('');
            setAmount('');
        },100);

    }
    const addExpense=(expense)=>{
        addExs(expense);
        setTimeout(() =>{
            setLabel('');
            setAmount('');
        },100);

    }
  return (
    <div className='row'>
        <div className="form">
            <div className="fr">
                <div className='d-btn'>
                   
                <div className='inp'>
                    <input type="text" className='form_name' placeholder=' Your Label' value={label} onChange={(event)=>setLabel(event.target.value)} /><br />
                    <input type="number" className='form_amount'placeholder='Your Amount' value={amount} onChange={(event)=>setAmount(event.target.value)} />
                </div>
                <div className='btnflex'>
                <button  disabled={!label || !amount} className="btnsucc" onClick={()=> addIncome({id:uuidv4(),label,amount})}>
                        Income
                    </button>
               
                    <button disabled={!label || !amount} className="btndan"  onClick={()=> addExpense({id:uuidv4(),label,amount})}>
                        Expense
                    </button>
                </div>
                </div>
                


            </div>
        </div>
      
    </div>
  )
}
