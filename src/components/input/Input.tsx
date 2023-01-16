import React from 'react';

type InputProps = {
	resultImage: (file: object) => void;
};

export default function Input({ resultImage }: InputProps) {
	function validateFile(event: React.ChangeEvent<HTMLInputElement>) {
		const target = event.target;
		const file = target.files;

		if (!file || !file[0]) {
			return;
		}

		resultImage(file[0]);
	}

	return (
		<div className='py-4'>
			<label className='custom-file btn btn-primary btn-lg px-5' htmlFor='inputFile'>
				<input type='file' id='inputFile' onChange={(event) => validateFile(event)} />
				Upload Image
			</label>

			<div className='mt-4'>
				<h6 className='fw-bold text-center'>or drop it here.</h6>
			</div>
		</div>
	);
}
