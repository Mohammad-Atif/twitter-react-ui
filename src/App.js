import logo from './logo.svg';
import './App.css';
import './styles.css';
import { Header } from './Components/Header/Header';
import { TweetBox } from './Components/Tweet/TweetBox';

function App() {
  return (
    <div className="App">
      <Header/>
      <TweetBox/>
    </div>
  );
}

export default App;
