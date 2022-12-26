import './previousnext.css';
import {Link} from "react-router-dom";

const PreviousNext = (props) =>{
    return(
        <>  
                
            <ul className='page'>
                <li><Link to={props.links.previous} className='btn btn-secondary' role='button'> Previous </Link></li>
                <li className="align-self-end ml-auto"><Link to={props.links.next} className='btn btn-secondary' role='button'> Next </Link></li>
            </ul>   
                         
        </>
    );
}

export default PreviousNext;


