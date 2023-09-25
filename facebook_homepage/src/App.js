import Navbar from './navbar/Navbar';
import Sidebar from './SideBar/Sidebar';
import "./App.css"
import Feed from './feed/Feed';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className='app-body'>
        <Sidebar/>
        <Feed/>
        </div>
  
    </div>
  );
}

export default App;
