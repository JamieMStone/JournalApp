import './Journal.css'
import { Link } from 'react-router-dom';
import { userState, useState } from 'react' 





const Read = ({ Read }) => {

  let [messages, setData] = useState([])

  const handleClick = async () => {
    console.log("Getting messages...");
    const response = await fetch("https://localhost:7124/GetAllMessages")
    
    const data = await response.json();
    console.log(data);
    setData(data);
  }


  return (
    <div className="Read">
        <p>
            <button onClick={handleClick}>Get all messages</button>
            <br/>
            { 
              messages.map(r =>  (
              <a>{r.contentId} - {r.message}</a>
              ))        
            }
        </p>
    </div>
  );
}

export default Read;