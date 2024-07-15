import './App.css'
import { useState } from 'react'

function App() {
 
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [message,setMessage] = useState()
  const [bmi,setBmi] =useState()

  //Logic
  const calcbmi = (e) => {
     e.preventDefault()

     if(weight===0 || height===0){
      alert('Enter a valid weight and height');
     }

     else{
        let bmi = (weight/((height*height)/10000)).toFixed(2)
        setBmi(bmi)

        if(bmi < 18.6){
          setMessage('Your Are Under weight')
        }

        else if(bmi >= 18.6 && bmi < 24.9){
          setMessage('You are healthy')
        }

        else{
          setMessage('You are Overweight')
        }
     }
     
  }
  

  const reload = () =>{
    window.location.reload()
  }

  return (
   <div className="App">
     <div className="container">
       <h1>BMI Calculator</h1>
       <form onSubmit={calcbmi}>
         <div>
          <label>Weight(kg):</label>
          <input type="text" placeholder='Enter Weight value' value={weight} onChange={(e) => {setWeight(e.target.value)}}/>
         </div>

         <div>
          <label>Height(cm):</label>
          <input type="text" placeholder='Enter Height value' value={height} onChange={(e) => {setHeight(e.target.value)}}/>
         </div>

         <div>
           <button className='btn' type='submit'>Submit</button>
           <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
         </div>

         <div className="centre">
          <h2>Your BMI is : {bmi} </h2>
          <p>{message}</p>
         </div>
       </form>
     </div>
   </div>
  )
}

export default App
