import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>My Journal App</h1>
        {/*<p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to ="/Journal">MyJournal</Link></li>
                <li><Link to="/Info">Info</Link></li>
            </ul>
          </p>*/}
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Journal" style={{ 
            color: 'white', 
            backgroundColor: 'red',
            borderRadius: '8px' 
            }}>MyPages</Link>
          </div>
    </div>
  );
}

export default NavBar;