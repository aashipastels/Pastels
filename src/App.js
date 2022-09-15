
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Food from './components/Food';
import Review from './components/Review';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Route path="/">

    <Header/>
    <Body />
    <Food/>
    <Review
    name= "Google"/>
    <Review
    name= "Facebook"/>
    </Route>
  );
}

export default App;
