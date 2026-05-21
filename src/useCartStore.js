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
                cart : [{ ...addToCart, id: Date.now() }, ...state.cart]
            }
        })
       }
    }

})


