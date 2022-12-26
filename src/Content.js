import './content.css';
import {NavLink} from "react-router-dom";
import Videos from './Videos';
import PreviousNext from './PreviousNext';

const Content = (props) =>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 d-none d-lg-block overflow-auto height" id="#navbarSupportedContent">
                        <h4 className='h4 pt-2'>Python Course - 1</h4>
                        <table className="table table-hover">
                            <tbody>
    <tr>
      <th className='bg-secondary text-white p-1'>Setting up the environment</th>
    </tr>
    <tr>
    <td className='link'><NavLink activeClassName="active" to ='/1'>Installing Python on Windows(1:53)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/2'>Working with IDLE(4:17)</NavLink></td>
  </tr>
    <tr>
      <th className='bg-secondary text-white p-1'>Python Basics</th>
    </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/3'>Printing in Python(4:36)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/4'>The Escape Character(3:57)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/5'>Values and Types(4:29)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/6'>Let's calculate-Introduction to Variable(5:45)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/7'>Variables(5:24)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/8'>Naming Rules of Variables(4:24)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/9'>Types Convertion Function(3:39)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/10'>Reading input from Keyboard(9:10)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/11'>Comments(2:03)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/12'>Program-Area of Rectangle(4:47)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/13'>Arithmetic Operators(2:23)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/14'>Operator Precedence(4:23)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/15'>Algebraic Expression to Python Statement(2:33)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/16'>Types of Errors(5:59)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/17'>More about print()(7:25)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/18'>Program-Celsius to Fahrenheit Converter(4:20)</NavLink></td>
  </tr>
    <tr>
      <th className='bg-secondary text-white p-1'>Conditional Statements</th>
    </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/19'>Boolean Expression and Relational Operator(3:20)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/20'>if statement(6:30)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/21'>if else statement(7:42)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/22'>if elif else statement(6:13)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/23'>Logical Operator(6:17)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/24'>Nested if Statement(3:57)</NavLink></td>
  </tr>
    <tr>
      <th className='bg-secondary text-white p-1'>Loops</th>
    </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/25'>While Loops(4:21)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/26'>Printing Number Series(7:30)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/27'>Sum of Numbers(7:11)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/28'>Program:Calculate Factorial(5:18)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/29'>User Control the Loop iterations(5:18)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/30'>Infinite Loops(1:44)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/31'>for loop(6:32)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/32'>Program:Printing Multiplication table(3:58)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/33'>Program:Sum of n Natural Number(5:03)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/34'>break and continue Statement(3:39)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/35'>Else in Loops(4:11)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/36'>Program:check Prime Number(7:04)</NavLink></td>
  </tr>
    <tr>
      <th className='bg-secondary text-white p-1'>Programming Challenges</th>
    </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/37'>Sum of digits(5:57)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/38'>Armstrong Number(5:41)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/39'>Check Plindrome Number(9:00)</NavLink></td>
  </tr>
  <tr>
    <td className='link'><NavLink activeClassName="active" to ='/40'>Finding Perfect Number(5:24)</NavLink></td>
  </tr>
  </tbody>
</table>    
                    </div>
                    <div className="col-sm-9 ">
                    <PreviousNext links = {props.v}/>
                    
                    <Videos links={props.v.videolink} />
                    
                    </div>

                
                </div>
            </div>
        </>
    );
}

export default Content;