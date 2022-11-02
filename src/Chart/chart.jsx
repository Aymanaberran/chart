import React from 'react'
import { Pie} from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'

  const data={
    labels: [
      'salaire',
      'travel',
      'enfant',
      
    ],
   
      
      datasets: [{
        
        data: [300, 50, 100],
        backgroundColor: [
          '#385170',
          '#9fd3c7',
          '#bbe4e9'
        ],
        hoverOffset:4,
        borderRadius:10,
        spacing:5
      }]
    };
    

  
    


export default function Doughnat() {
  return (
    <div className='cha'>
      <h1 className='ct'>chart</h1>
      <div className="ayman">
      <Pie data={data}/>

      </div>
   

    </div>
  )
}