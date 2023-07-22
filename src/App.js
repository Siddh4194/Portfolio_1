import logo from './logo.svg';
import './App.css';
import Container from './components/container';
import { HomeIcon } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Nav from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
function App(props) {
  return (
    <div className="App">
      <Container scWidth={props.scWidth} scheight={props.scheight}/>
      <Nav/>
    </div>
  );
}

export default App;
