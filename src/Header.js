import './header.css';
import $ from 'jquery';



const Header = () =>{
    return(
        <>           
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div class="container-fluid">    
                    <a className="navbar-brand" href="https://www.pyforschool.com/">
                        pyforschool.com
                    </a>
                    <button className="navbar-toggler" type="button" id="openbutton">
                        <span className="navbar-toggler-icon"></span>
                    </button>
             </div>                   
            </nav>
            
        </>
    );
}

export default Header;
$(document).ready(function(){
    $("#openbutton").click(function(){
    
    $(".overflow-auto").toggleClass("d-none");


    });
});

    

