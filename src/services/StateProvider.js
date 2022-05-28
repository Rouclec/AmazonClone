import React from 'react'

//Prepares the data layer
export const StateContext = React.createContext();

//Wrap our app and provide the Data layer
export const StateProvider = ({reducer, initialState, children}) => {
  return (
    <StateContext.Provider
    value={React.useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
  )
}

//Pull information from the data layer
export const useStateValue = () => React.useContext(StateContext);