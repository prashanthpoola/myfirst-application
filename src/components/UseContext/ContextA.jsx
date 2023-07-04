import React from 'react'
import {UserContext,UserPlace} from '../../App'

const ComponentF = () => {
    return (
        <div>
            <UserContext.Consumer>
            {
                user =>{
                    return(
                        <UserPlace.Consumer>
                            {place => {
                                return <div>User Name: {user} <br/> User Place  : {place}</div>
                            }}
                        </UserPlace.Consumer>
                    )
                }
            }   
             </UserContext.Consumer>
        </div>
    );
}
export default ComponentF