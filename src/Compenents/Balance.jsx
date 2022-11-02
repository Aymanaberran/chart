import React,{useEffect, useState}from 'react'

export default function Balance({balance}) {
    const[cbalance,setbalance] = useState(0);

    useEffect(()=>{
        setbalance(balance);

    },[balance])

  return (
        <div className="balance">
            <p className="titre">
                <span className='   '>
                    Balance :  $
                </span>
                <span className="s_bg">
                     {cbalance}
                </span>
            </p>

        </div>
  )
}

