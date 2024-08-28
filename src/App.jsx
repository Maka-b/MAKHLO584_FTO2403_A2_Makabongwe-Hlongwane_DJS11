
import './App.css';

import FetchGenres from './components/CustomHooks/FetchGenres';
import { Routes, Route } from 'react-router-dom';
import { PageExports } from './components/pages/PageExports';
import Sidebar from './components/Elements/Sidebar';

import Favourites from './components/pages/Favourites';
import { store } from './redux/storeP2';




import { connect} from 'react-redux';
// connect is imported to give state global access to App children

function App() {
    
  return ( 
    <div className="relative flex">
      {/* Fetches data from api and dispatches them to redux store */}
      <FetchGenres />
         
      <Sidebar />
      <div className='flex-1 flex flex-col bg-gradient-to-br from-inherit to-slate-700'>
        <div className='px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse)'>
          <div className='flex-1 h-fit pb-40'>
            <Routes>
              <Route path='/'  element={<PageExports.DiscoverPage />} />
              <Route path='/favourites'   element={<Favourites />} />
              <Route path='/podcast/:id' element={<PageExports.PodCastDetails />} />
            </Routes>
          </div>
          {/*React wont render favourites when nested in Routes*/}
          <Favourites viewType='hidden'/>
        </div>
      </div>

      
    </div>
   
  );
}


export default connect(store => store)(App);
