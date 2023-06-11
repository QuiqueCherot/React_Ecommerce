import './App.css';
import Main from './components/pages/main';
import ResponsiveAppBar from './components/Nav-Bar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Main/>
    </div>
  );
}

export default App;
