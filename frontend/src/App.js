import './component/App.css';
import Buyprivatejet from './buyprivatejet'
import Main from './main';
import Private from './private';
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Main/> } />
        <Route path='private' element={ <Private/> } />
        <Route path="buyprivatejet" element={ <Buyprivatejet/> } />
      </Routes>
    </div>
  );
}

export default App;
