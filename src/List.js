import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import "./List.css"
function List(props){
    const [state, setstate] = useState(false);
    function hover(){
        return(
            <FaTrash className="trash" onClick={()=>props.fun(props.id)} />
        )
    }
    return(
            <div className="list" onMouseEnter={()=>setstate(true)} onMouseLeave={()=>setstate(false)}>
            <div className="txt">{props.data}</div>
            {state?hover():null}
            </div>
        
    )
}

export default List;