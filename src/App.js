import './App.css';
import Container from './components/container';
import Nav from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHouse, faLightbulb, faPhone, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-bootstrap";
function App(props) {
  
    if(props.scWidth<=650){
      return (
        <div>
          <div className="nav-mobile">
            <div className="nav-icon">
                <NavLink href="#home"><FontAwesomeIcon icon={faHouse}/></NavLink>
            </div>
            <div className="nav-icon">
                <NavLink href="#about"><FontAwesomeIcon icon={faUserAlt}/></NavLink>
            </div>
            <div className="nav-icon">
                <NavLink href="#skills"><FontAwesomeIcon icon={faLightbulb}  /></NavLink>
            </div>
            <div className="nav-icon">
            <NavLink href="#project"><FontAwesomeIcon icon={faBook}/></NavLink>
            </div>
            <div className="nav-icon">
                <NavLink href="#contact"><FontAwesomeIcon icon={faPhone}/></NavLink>
            </div>
      </div>
          <div className="App">
            <Container scWidth={props.scWidth} scheight={props.scheight}/>
          </div>
        </div>
        )
    }
      return (
        <div className="App">
        <Container scWidth={props.scWidth} scheight={props.scheight}/>
        <Nav/>
      </div>)
    
}

export default App;
