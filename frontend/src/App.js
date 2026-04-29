import './App.css';


//import BackendCheck from './api/CheckBackend';
import TopBar from './components/composites/TopBar';
import AboutMeCard from './components/composites/AboutMeCard';
import ProfilePic from './components/composites/ProfilePic';
import BottomBar from './components/composites/BottomBar';

function App() 
{
  return (
    <div className='App'>
      <TopBar/>
      <header className='App-header'>
        <ProfilePic/>
        <div className='CardsRow'>
          <AboutMeCard/>
        </div>
      </header>
      <BottomBar/>
    </div>
  );
}

export default App;