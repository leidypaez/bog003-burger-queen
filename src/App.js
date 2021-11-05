import logo from './Logo.png';
import './App.css';


function App() {
  return (
    <body>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={"./img/camareros.png"} alt="Mesero"/>
        <button>
         Mesero
        </button>
      </header>
      

      
    </div>
    </body>
  );
}


export default App;
