import React, {useReducer} from 'react'
import './App.css'
import DataFetching from './components/Hook/DataFetching'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarHead from './components/NavbarHead'
import Home from './components/Hook/UseState'
import Effect from './components/Hook/UseEffect'
import Component from './components/UseContext/Context1'
import Reducer from './components/Hook/UseReducer'
import CRhook from './components/Hook/UsecontextReducer'
import AlarmClock from './components/alarm/Alarm'




export const UserName = React.createContext() 
export const UserPlace = React.createContext()
export const Num = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch (action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
   const [count, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
        <BrowserRouter>
              <NavbarHead></NavbarHead>
              <Routes>
              {/* <Route path='/' element={<Home></Home>}></Route> */}
              <Route path='/UseState' element={<Home></Home>}></Route>
                <Route path='/datafetching' element={<DataFetching></DataFetching>}></Route>
                <Route path='/useEffect' element= {<Effect></Effect>}></Route>
                <Route path='/useReducer' element = {<Reducer></Reducer>}></Route>
                <Route path='Alarm' element = {<AlarmClock></AlarmClock>}></Route>
                <Route path = '/reducer' element = {<CRhook></CRhook>}></Route>
                <Route path='/useContext' element={
                <UserName.Provider value={'Prashanth'}>
                <UserPlace.Provider value={'Medak'} >   
                {/* Constant value use to ''(Qutation) */}
                <Component></Component>
                </UserPlace.Provider>
                </UserName.Provider>}></Route>
              </Routes>
        </BrowserRouter>
        <Num.Provider value={{countState:count, countDispatch:dispatch}}>
            {/* Updated value's use to {} (flower bracket) */}
            <div>
                count- {count}
                <CRhook></CRhook>
            </div>               
        </Num.Provider>
        </div>
    );
}

export default App
