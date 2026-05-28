import { useState } from 'react'
import './App.css'
import { useCartStore } from './useCartStore'

function App() {

  const {courses, reserveSeat, cart} = useCartStore()

    function format (value){
    return new Intl.NumberFormat("en-NG", {
      style : 'currency', 
      currency : 'NGN'
    }).format(value)
  }


    const totalCost = cart.reduce((acc, current) => {
      return acc + current.price
         }, 0)

  console.log(cart)

  return (
    <>
      <div>
        <h1 id='header'>Vocational Course Reservation System</h1>
        <br />

         <div className='layout-container'>

                {/* cart ---box */}
          <div className='cart-box'>
             <h1>Cart</h1>
               {
                cart.map((item) => {
            
                  return (
                      <div key={item.id}>
                        <li >
                        <span>{item.title}</span>
                         ----------
                        <span>{format(item.price)}</span>
                        <button style={{color : 'red'}}>Delete</button>
                      </li>

                       </div>
                      
                  )
                })
               }
               <p>Total Cost : {format(totalCost)}</p>
          </div>
           
           {/* course--box */}
          <div className='course-box'>
            {
               courses.map((course) => {
                 
                return(
                  <div className='box' key={course.id}>
                     <h1> Course Title : {course.title}</h1>
                     <p> Price : {format(course.price)}</p>
                     <p> Available Seats : {course.availableSeats}</p>
                      
                      {
                        course.availableSeats > 0 
                        ?  <button onClick={() => reserveSeat(course.id)} id='button'>Reserve Seat</button>
                        :  <button disabled={course.availableSeats === 0 } id='disable-button'>Sold out</button>
                      }
                     
                  </div>
                )
               })
            }
          </div>
       
        </div>
        
      </div>
      


    </>
  )
}

export default App
