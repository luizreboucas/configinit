import { Link, useParams } from "react-router-dom"


const Contact = () => {

    const { id } = useParams()
    return (
        <>
            <Link to={'/'}>voltar</Link>
            <h2>Contact PAge</h2>
            <h4>id: {id}</h4>
        </>
        
    )
}

export default Contact