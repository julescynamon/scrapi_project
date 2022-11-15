import './App.css';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

function App() {
	return (
		<Container>
			<Suspense>
				<Outlet />
			</Suspense>
		</Container>
	);
}

export default App;
