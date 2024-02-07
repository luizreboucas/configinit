import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { storeUserId } from '../reducers/userReducer'


export const useUser = () => {
    
    const id = useSelector((state: RootState) => state.userId.id)
    const dispatch = useDispatch()

    const setUserId = (id:string) => {
        dispatch(storeUserId({id}))
    } 
    return {
        id,
        setUserId
    }
}