import './App.css';
import Allies from './components/Allies';
import Contact from './components/Contact';
import Download from './components/Download';
import Footer from './components/Footer';
import Home from './components/Home';
import Lambders from './components/Lambders';
import Navbar from './components/Navbar';
import Segments from './components/Segments';

function App() {
	return (
		<div className="App">
			<header className="App-header">

				<Navbar/>
				<Home/>      
				<Lambders/>
				<Segments/>    
				<Allies/>
				<Download/>
				<Contact/>
				<Footer/>
			
			
			</header>
		</div>
	);
}

export default App;
