import './App.css';
import Container from '@mui/material/Container';
import Posts from './components/Posts';

function App() {
	return (
		<Container>
			<div>
				<h1>Blog</h1>
				<Posts />
			</div>
		</Container>
		
	);
}

export default App;
