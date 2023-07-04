import React from "react";
import { UserContext, UserTech } from "../../App";

const UseContextHook = () => {
    return ( 
        <div>
           <UserContext.Consumer>
            {
                person => {
                   return (
                    <UserTech.Consumer>
                    {
                        technology => {
                            return <div>He is { person }, in {technology}</div>
                        }
                    }
                </UserTech.Consumer>
                   )
                }
            }
           </UserContext.Consumer>
        </div>
     );
}
 
export default UseContextHook;