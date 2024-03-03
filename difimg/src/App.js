import './App.css';
import Romance from './Romance';
import Action from './Action';
import Horror from './Horror.jsx';
import Crime from './Crime.jsx';
import Adventure from './Adventure.jsx';

function App() {
  return (
    <div className='warpMovie'>
      <h1 id='main-head'>Movies</h1>
      <div className='roMovie'>
      <h2>Romance Movies :</h2>
      <Romance />
      </div>
      <div>
      <h2>Action Movies :</h2>
      <Action/>
      </div>
      <div>
        <h2>Horror Movies :</h2>
        <Horror />
      </div>
      <div>
        <h2>Crime Thriller :</h2>
        <Crime />
      </div>
      <div>
        <h2>Adventure Movies :</h2>
        <Adventure />
      </div>
    </div>
  );
}
export default App;
