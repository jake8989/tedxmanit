import './App.css';
import Nav1 from './components/UI/Nav1';
import Sponsors from './components/UI/Sponsors';
import { Typography } from '@mui/material';
import About from './components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import NotFound from './components/UI/NotFound';
import Organizers from './pages/Organizers';
import Home from './pages/Home';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/organizers',
		element: <Organizers />,
	},
	{
		path: '*',
		// element: <NotFound></NotFound>,
	},
]);
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
