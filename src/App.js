import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
import ButtonList from './components/ButtonList';
import Watch from './components/Watch';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
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
    ],
  },
]);
function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </div>
  );
}

export default App;
