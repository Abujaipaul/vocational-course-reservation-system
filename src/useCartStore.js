import {create} from 'zustand'



export const useCartStore = create(function (set) {
   
    return{
        courses : [
        {id : 1, title : 'Data Analytics', price : 150000, availableSeats : 2},
        {id : 2, title : 'Front Engineering', price : 160000, availableSeats : 3},
        {id : 3, title : 'Product Design', price : 120000, availableSeats : 2},
       ],
       cart : [], 

       reserveSeat : function (courseId){

        set(function (state) {
             const updatedCourses = state.courses.map((course) => {
                if(course.id === courseId){
                    return {
                        ...course, availableSeats : course.availableSeats - 1
                    }
                }else{
                    return course
                }
             })

            //  const addToCart = state.courses.filter((course) => {
            //    return courseId === course.id
            //  })

            const addToCart = state.courses.find((course) => {
                return courseId === course.id
            })

            return {
                courses : updatedCourses,
                cart : [{ ...addToCart, cartId: Date.now() }, ...state.cart]
            }
        })
       },
       
      handleRemove : function(itemId) {
       set(function(state) {
          const itemToBeRemoved = state.cart.find(item => item.cartId === itemId) //use .find to get the item to be removed from the cart
        //   const itemToBeRemoved = state.cart.filter(item => item.cartId === itemId) //use .filter to get the item to be removed from the cart
          const filteredItems = state.cart.filter(item => item.cartId !== itemId)

          console.log(itemToBeRemoved)
          
          const updatedCourses = state.courses.map((data) => {
            if(data.id === itemToBeRemoved.id){
                return {...data, availableSeats : data.availableSeats + 1 }
            }
            // if(data.id === itemToBeRemoved[0].id){ // used [0] to access the filtered array item
            //     return {...data, availableSeats : data.availableSeats + 1 }
            // }
            return data
          })
         

        return {
            cart: filteredItems,
            courses : updatedCourses
        }
    })
}


    }

})


