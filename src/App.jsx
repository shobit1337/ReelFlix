import { Sidebar, Navbar } from './components';
import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <main className='main'>
        <Sidebar />
        <div className='main-section'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;
