import './Journal.css'
import { Link } from 'react-router-dom';

const Journal = ({ Journal }) => {
  return (
    <div className="Journal">
        <p>
            <div className="links">
              <Link to="/Read" style={{ 
              color: 'white', 
              backgroundColor: 'red',
              borderRadius: '8px'
              }}>Read</Link>
              <Link to="/Write" style={{ 
              color: 'white', 
              backgroundColor: 'green',
              borderRadius: '8px'
              }}>Write</Link>
          </div>
        </p>
    </div>
  );
}

export default Journal;