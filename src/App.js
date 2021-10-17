import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link} from '@reach/router';
import Home from './Views/Home';
import NewPoll from './Views/NewPoll';
import ViewPoll from './Views/ViewPoll';
import UpdatePoll from './Views/UpdatePoll';
import PageHeader from './Components/PageHeader';



function App() {
  return (
    <div className="App">
      <body>
          <Router>
            <Home path="/"></Home>
            <NewPoll path="/polls/new"></NewPoll>
            <ViewPoll path="/polls/:id"></ViewPoll>
            <UpdatePoll path="/polls/:id/edit"></UpdatePoll>
          </Router>
      </body>
      
    </div>
  );
}

export default App;
