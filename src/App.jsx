import ShowList from './components/Elements/ShowList';
import './App.css';
import GenresList from './components/Elements/FetchGenres';
import FetchGenres from './components/Elements/FetchGenres';
import { Routes, Route } from 'react-router-dom';
import { PageExports } from './components/pages/PageExports';
import Sidebar from './components/Elements/Sidebar';
import Searchbar from './components/Elements/Searchbar';
import TopPlay from './components/Elements/TopPlay';


import { connect, useSelector } from 'react-redux';
// connect is imported to give state global access to App children

function App() {
 
  const user = useSelector(state => state.user)

  return (
    <div className="relative flex">
      <FetchGenres />
      
      
      <Sidebar />
      <div className='flex-1 flex flex-col bg-gradient-to-br from-inherit to-slate-700'>
        <Searchbar />

        <div className='px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse)'>
          <div className='flex-1 -fit pb-40'>
            <Routes>
              <Route path='/' element={<PageExports.DiscoverPage />} />
              <Route path='/' element={<PageExports.TopPodcasts />} />
              <Route path='/' element={<PageExports.Popular />} />
              <Route path='/' element={<PageExports.AroundYou />} />
              <Route path='/' element={<PageExports.PodCastDetails />} />
              <Route path='/' element={<PageExports.EpisodeDetails />} />
              <Route path='/' element={<PageExports.Search />} />

            </Routes>
          </div>
          <div className='xl:sticky relative top-0 h-fit'>
            <TopPlay />
          </div>

        </div>
      </div>

      
    </div>
  );
}


export default connect(store => store)(App);
