import logo from './logo.svg';
import './App.css';
import './styles.css';
import { Header } from './Components/Header/Header';
import { TweetBox } from './Components/Tweet/TweetBox';
import { HomePage } from './Components/HomePage';
import { useState } from 'react';
import { ProfilePage } from './Components/ProfilePage';

function App() {

  const [option,setOption] = useState(()=> {
    return true;
  })

  const handleClick = (e) => {
    setOption(e)
  }

  return (
    <div className="App">
      <Header btnCLick={handleClick}/>
      {
        option?<HomePage/>:<ProfilePage/>
      }
    </div>
  );
}

export default App;
