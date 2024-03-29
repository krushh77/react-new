const themedata = {
    light: {
        background: "rgb(255,255,255)",
        color:"rgb(0,29,53)"
    },

    dark: {
        background: "rgb(0,29,53)",
        color: "rgb(255,255,255)",

    }
}





const initialstate = {theme: themedata.light }


const reducertheme = (state = initialstate , action) => {

    switch (action.type){
        case "light" : 
        return  {...state,theme: themedata.light}

        case "dark" : 
        return  {...state,theme:  themedata.dark }


        default :  
        return  state
    }
     
}
export default reducertheme