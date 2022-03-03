import {useEffect} from "react"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper"
import { clearMessage } from "../../store/reducers/globalReducer";
const Categories = () => {
    const {success} = useSelector(state => state.globalReducer);
    const dispatch = useDispatch();
    useEffect(() => {
     return () => {
        dispatch(clearMessage())
     }
    }, [])
    return(
       <Wrapper>
           <ScreenHeader>
              <Link to="/dashboard/create-category" className="btn-dark">add categories <i className="bi bi-plus"></i></Link>
           </ScreenHeader>
           {success && <div className="alert-success">{success}</div>}
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel molestiae tempora voluptatibus rem neque optio, deserunt, autem, est distinctio assumenda ratione cum esse at. Vero inventore officia perspiciatis quisquam consequatur!
       </Wrapper>
    )
}
export default Categories;