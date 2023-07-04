import { useState } from "react";

const Home = () =>{
    const [name, setName] = useState({
        first_name:'', last_name:''
    })
    return(
        <div className="home">
            <form>
                <input type = "text" value = {name.first_name}
                onChange={e=> setName({...name,first_name: e.target.value})}></input>
                <input type="text" value = {name.last_name}
                onChange={e => setName({...name,last_name: e.target.value})}></input>
            </form>
            <h3>
                Your Full Name:{name.first_name}  {name.last_name}
            </h3>
        </div>
    );
}

export default Home;