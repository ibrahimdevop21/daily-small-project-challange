import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='App'>
      <Header name='Anna' color='purple' />
      <Main greet='Howdy' />
      <SideBar greet='Hi' />
    </div>
  );
}

export default App;
