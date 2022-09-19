
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='container'>
        <h1>Welcome Back</h1>
        <form>
        <label>Email</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <input type="submit" className="button" value="Sign In" onClick={()=>{alert("Login SuccessFully")}} />
        </form>
        
      </div>
    </div>
  );
}

export default App;
