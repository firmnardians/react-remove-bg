import React from 'react';

type ChildrenProps = {
	children: React.ReactNode;
	resultImage: (file: Blob) => void;
	setDropped: (data: boolean) => void;
};

export default function Card({ children, resultImage, setDropped }: ChildrenProps) {
	function dragOverHandler(event: any) {
		// Prevent default behavior (Prevent file from being opened)
		event.preventDefault();

		setDropped(true);
	}

	function dropHandler(ev: any) {
		// Prevent default behavior (Prevent file from being opened)
		ev.preventDefault();

		if (ev.dataTransfer.items) {
			// Use DataTransferItemList interface to access the file(s)
			[...ev.dataTransfer.items].forEach((item, i) => {
				// If dropped items aren't files, reject them
				if (item.kind === 'file') {
					const file = item.getAsFile();

					resultImage(file);
				}
			});
		} else {
			// Use DataTransfer interface to access the file(s)
			[...ev.dataTransfer.files].forEach((file, i) => {
				resultImage(file);
			});
		}
	}

	return (
		<div onDrop={(event) => dropHandler(event)} onDragOver={(event) => dragOverHandler(event)} className='row justify-content-center mt-5 '>
			<div className='col-12 col-md-10 col-lg-5 mt-5'>
				<div className='card-custom bg-white py-4 px-5 p-md-4 p-lg-5 rounded-custom shadow-lg d-flex align-items-center justify-content-center flex-column'>
					{children}
				</div>
			</div>
		</div>
	);
}
