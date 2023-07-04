import React, { useContext } from 'react'
import { UserName,UserPlace } from '../../App';

function Component() {
   const user = useContext(UserName)
   const place = useContext(UserPlace)

    return(
        <div>
          <h1>Name:{user} <br/>Place:{place}  </h1>
        </div>
    );
}

export default Component