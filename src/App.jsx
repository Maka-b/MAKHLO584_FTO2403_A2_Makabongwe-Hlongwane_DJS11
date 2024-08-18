import ShowList from './components/ShowList';
import './App.css';
import GenresList from './components/FetchGenres';
import FetchGenres from './components/FetchGenres';


function App() {
  return (
    <div className="App">
      <ShowList />
      <FetchGenres />
      
    </div>
  );
}

export default App;
