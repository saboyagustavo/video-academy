import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Playlist } from './components/Playlist';

function App() {
  return (
    <div className="center">
      <h1>Video Academy</h1>
      <Playlist />
    </div>
  );
}

export default App;
