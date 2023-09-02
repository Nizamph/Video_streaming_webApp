import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoContainer from './components/videos/VideoContainer';
import ButtonList from './components/UI/ButtonList';
import Watch from './components/watch/Watch';
import SearchPage from './components/search/SearchPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Shimmer from './components/UI/Shimmer';
import {
  setShowSuggestion,
  setShowSuggestionException,
} from './reduxStore/searchSlice';
import ShimmerList from './components/UI/ShimmerList';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: '/',
        element: (
          <>
            <ButtonList />
            <VideoContainer />
          </>
        ),
      },
      {
        path: 'watch',
        element: <Watch />,
      },
      {
        path: 'results',
        element: <SearchPage />,
      },
    ],
  },
  {
    path: '/shimmer',
    element: <ShimmerList />,
  },
]);
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const clearLocalStorageOnTabClose = () => {
      localStorage.clear();
      localStorage.setItem('currentMenu', 1);
    };

    window.addEventListener('beforeunload', clearLocalStorageOnTabClose);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorageOnTabClose);
    };
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </div>
  );
}

export default App;
