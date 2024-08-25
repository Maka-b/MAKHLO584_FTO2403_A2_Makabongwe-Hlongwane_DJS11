import ShowList from './components/Elements/ShowList';
import './App.css';
import GenresList from './components/Elements/FetchGenres';
import FetchGenres from './components/Elements/FetchGenres';
import { Routes, Route } from 'react-router-dom';
import { PageExports } from './components/pages/PageExports';
import Sidebar from './components/Elements/Sidebar';
import Searchbar from './components/Elements/Searchbar';
import Favourites from './components/pages/Favourites';
import { store } from './redux/storeP2';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from './components/pages/Modal';


import { connect, Provider, useSelector } from 'react-redux';
// connect is imported to give state global access to App children

function App() {
  
  const isClicked = useSelector((state)=> state.click.isClicked)
  
  const location = useLocation()
  const [favLength, setFavLength] = useState(0)
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favourites');
    if (savedFavorites) {
      const favArray = JSON.parse(savedFavorites);
      setFavLength(favArray.length);
    } else {
      setFavLength(0);
    }
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
   
  return (
    
    <div className="relative flex">
      <FetchGenres />
      
      
      <Sidebar />
      <div className='flex-1 flex flex-col bg-gradient-to-br from-inherit to-slate-700'>

        <div className='px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse)'>
          <div className='flex-1 h-fit pb-40'>

            <Routes>
              <Route path='/'   element={<PageExports.DiscoverPage />} />
              <Route path='/favourites' key={favLength}  element={<Favourites />} />
              <Route path='/' element={<PageExports.AroundYou />} />
              <Route path='/podcast/:id' element={<PageExports.PodCastDetails />} />
              <Route path='/' element={<PageExports.EpisodeDetails />} />
            </Routes>
        
          </div>
          <Favourites viewType='hidden'/>
          

        </div>
      </div>

      
    </div>
   
  );
}


export default connect(store => store)(App);
