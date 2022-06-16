import './Journal.css'
import { Link } from 'react-router-dom';
import { userState, useState } from 'react' 





const Write = ({ Write }) => {

  //let [messages, setData] = useState([])

  let [textAreaValue, setTextAreaValue] = useState();

  const handleChange = (event) => {
    console.log(event.target.value)
    setTextAreaValue(event.target.value);
  }

  const handleClick = async () => {
    await fetch("https://localhost:7124/InsertMessage", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {"content": "Some content"}
      ),
    });
  }


  return (
    <div className="Write">
        <p>

        <label>Your entry : </label>
        <br /><br />
        <textarea
          value ={textAreaValue}
          onChange={handleChange}
          rows={20}
          cols={100}
        />
        <br />
        <button onClick={handleClick}>Submit</button>
        </p>
    </div>
  );
}

export default Write;