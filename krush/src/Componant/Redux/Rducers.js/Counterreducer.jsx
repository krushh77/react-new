const initialstate = {counter: 123 }


const counterreducer = (state = initialstate , action) => {

    switch (action.type){
        case "INCREMENT" : 
        return  {...state, counter:  state.counter + 1 }

        case "DICREMENT" : 
        return  {...state, counter:  state.counter - 1 }


        default :  
        return  state
    }
     
}
export default counterreducer