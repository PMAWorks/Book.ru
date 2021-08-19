import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './Pages/Header/Header';
import { TopMenu } from './Pages/TopMenu/TopMenu';
import { Cat } from './Pages/Cat/Cat';
import { NoPage } from './Pages/NoPage/NoPage';
import CatContainer from './Pages/Cat/CatContainer';
import ReadBooksContainer from './Pages/ReadBooks/ReadBooksContainer';

function App() {
  return (
    <div className="App">
      <Header></Header> 
      <TopMenu></TopMenu>
      <Switch> //Работа с роутерами
        <Route exact path="/" render={({ match, location }) => <Cat></Cat>}></Route>
        <Route path="/Cat" render={({ match, location }) => <CatContainer></CatContainer>}></Route>
        <Route path="/Book/:BookNum" render={({ match, location }) => <CatContainer></CatContainer>}></Route>
        <Route path="/ReadBook/:BookNum" render={({ match, location }) => <ReadBooksContainer></ReadBooksContainer>}></Route>
        <Route path="/Cat/:CatNumber" render={({ match, location }) => <CatContainer></CatContainer>}></Route>
        <Route exact path="/AudioBooks" render={({ match, location }) => <NoPage></NoPage>}></Route>
        <Route exact path="/Magazines" render={({ match, location }) => <NoPage></NoPage>}></Route>
      </Switch>
    </div>
  );
}

export default App;
