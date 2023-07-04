import  {useState, useEffect} from 'react'

const DataFetching = () =>{
    const [posts, setPosts] = useState([])

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(res => setPosts(res))
    }

    useEffect(()=>{
        fetchData()
    },[])
  
    return (
        <div className='fetch'>
             
            {posts.length > 0 && (
                    <p>
                    {posts.map((p) => (
                        <ul>
                             <li>{p.id}</li>
                             <li>{p.title}</li>
                        </ul>
                    ))}
                    </p>
            )}
        </div>
    )
}

export default DataFetching;