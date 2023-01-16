import Title from './components/title/Title';
import Input from './components/input/Input';
import Card from './components/card/Card';

function App() {
	function handleRemoveBg(result: object) {
		console.log(result);
	}

	return (
		<div className='container'>
			<Title title='Remove Image Background' description='Get a transparent background for any image.' />

			<Card>
				<div className='px-4'>
					<Input resultImage={(result) => handleRemoveBg(result)} />
				</div>
			</Card>

			<div className='mt-4 d-flex align-items-center justify-content-center mt-5'>
				<p>@firmnardians</p>
			</div>
		</div>
	);
}

export default App;
