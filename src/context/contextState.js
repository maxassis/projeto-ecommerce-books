import React,{useState, createContext} from 'react'


export const contextState = createContext()


export function StateProvider(props) {
    const [buy, setBuy] = useState([])

    return(
        <contextState.Provider value={[buy, setBuy]}>
            {props.children}
        </contextState.Provider>


    )



}