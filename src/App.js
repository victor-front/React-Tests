import Logo from './components/Logo';
import Menu from './components/Menu';

function App() {
	let values = ["Home", "Empresa", "Contato"];
	return (
		<div id="app">
			<header>
				<ul>
					<Logo logoName="Logo" />
					<Menu values={values} />
				</ul>
			</header>
		</div>
	);
}

export default App;
