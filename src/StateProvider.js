import React, { createContext, useContext, useReducer } from 'react'

// this prepares data layout
export const StateContext = createContext()

// wrap our app and provide the data
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// pull information out of the data layout
export const useStateValue = () => useContext(StateContext)
