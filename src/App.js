import './App.css';
import Child from './Child';

function App() {
	function receiveData(data) {
		// name is assigned in data
		console.log(data);
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<Child getData={receiveData} />
			</header>
		</div>
	);
}

export default App;
