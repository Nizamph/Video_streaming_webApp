import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
import ButtonList from './components/ButtonList';
import Watch from './components/Watch';
import SearchPage from './components/SearchPage';
import { useDispatch } from 'react-redux';
import Shimmer from './components/Shimmer';
import {
  setShowSuggestion,
  setShowSuggestionException,
} from './reduxStore/searchSlice';
import ShimmerList from './components/ShimmerList';

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
  //   // dispatch(setShowSuggestion(false));
  //   dispatch(setShowSuggestionException(true));
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
