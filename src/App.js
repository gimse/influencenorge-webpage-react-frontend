import logo from './logo.svg';
import './App.css';
import TopList from './TopList'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Influence Norge</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="icon" type="image/png" href="logo.svg" sizes="16x16" />
      </Helmet>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TopList/>

      </header>
    </div>
  );
}

export default App;
