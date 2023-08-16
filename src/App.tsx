import Title from './components/title/Title';
import Input from './components/input/Input';
import Card from './components/card/Card';
import { useState } from 'react';
import Spinner from './components/spinner/Spinner';

let blob = null;

function App() {
	const [isRemoveSuccess, setRemoveSuccess] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const [idDropped, setDropped] = useState(false);

	async function handleRemoveBg(result: Blob) {
		setLoading(true);

		try {
			const form = new FormData();
			form.append('image_file', result);

			const response = await fetch(process.env.REACT_APP_API as string, {
				method: 'POST',
				headers: {
					'X-Api-Key': process.env.REACT_APP_KEY as string,
				},
				body: form,
			});

			if (response.status === 200) {
				setRemoveSuccess(true);
			} else if (response.status === 402) {
				alert('API ini kena limit, hanya bisa request sebanyak 50 kali dalam sebulan.');
			} else {
				setRemoveSuccess(false);
			}

			setLoading(false);

			const outputBlob = await response.blob();

			blob = URL.createObjectURL(outputBlob);
			const image = document.getElementById('resultImage') as HTMLImageElement | null;
			const down = document.getElementById('download') as HTMLAnchorElement | null;

			if (image !== null) {
				image.src = blob;
			}

			if (down !== null) {
				down.href = blob;
				down.download = `${+new Date()}.png`;
			}
		} catch (err) {
			setLoading(false);
		}
	}

	return (
		<div className='container'>
			<Title title='Remove Image Background' description='Get a transparent background for any image.' />

			{isRemoveSuccess ? (
				<div className='d-flex flex-column align-items-center justify-content-center mt-5'>
					<img id='resultImage' alt='Remove Background' className='img-result img-fluid shadow-lg mx-auto d-block' />

					<a href='/#' id='download' className='mt-5'>
						<button className='btn btn-primary btn-md px-5 fw-bold'>Download Image</button>
					</a>
				</div>
			) : (
				<Card resultImage={(result) => handleRemoveBg(result)} setDropped={(data) => setDropped(data)}>
					{isLoading ? (
						<Spinner />
					) : (
						<div className='px-4'>
							{idDropped ? (
								<div className='px-4'>
									<h5 className='fw-bold'>DROP IMAGE IN HERE</h5>
								</div>
							) : (
								<Input resultImage={(result) => handleRemoveBg(result)} />
							)}
						</div>
					)}
				</Card>
			)}

			<div className='mt-4 d-flex align-items-center justify-content-center mt-5'>
				<a target='_blank' href='https://1998s.dev' rel='noreferrer'>
					<p className='fw-bold'>🔥firmnardians🔥</p>
				</a>
			</div>
		</div>
	);
}

export default App;
