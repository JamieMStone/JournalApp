import './Home.css';

function Home() {

  const handleClick = (e) => {
    console.log(e);
  }

  return (
    <div className="Home">
        <p>
            Home page
            <button onClick={(e) => {handleClick(e)}}>Click me to test API</button>
        </p>
    </div>
  );
}

export default Home;
