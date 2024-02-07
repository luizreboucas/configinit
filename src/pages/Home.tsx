
import { Link } from "react-router-dom"
import { useUser } from "../redux/hooks/useUser"

const Home = () => {
   const {id, setUserId} = useUser()
    
    return (
        <>
            <h2>Home PAge</h2>
            <Link to={`/contact/${id}`}>Contact page</Link>
            <input placeholder="digite seu id" onChange={(e) => setUserId(e.target.value)}/>
            <h2>id: ${id}</h2>
        </>
        
    )
}

export default Home