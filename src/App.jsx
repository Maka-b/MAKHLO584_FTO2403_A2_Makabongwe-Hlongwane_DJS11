import ShowList from './components/ShowList';
import './App.css';
import GenresList from './components/FetchGenres';


function App() {
  return (
    <div className="App">
      <ShowList />
      <GenresList />
      
    </div>
  );
}

export default App;
