import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoContainer from './components/videos/VideoContainer';
import ButtonList from './components/UI/ButtonList';
import Watch from './components/watch/Watch';
import SearchPage from './components/search/SearchPage';
import { useDispatch } from 'react-redux';
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
  // const handleOnShowException = () => {
  //   console.log('calling div from the app');
  //   dispatch(setShowSuggestion(false));
  // };
  return (
    <div>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </div>
  );
}

export default App;
