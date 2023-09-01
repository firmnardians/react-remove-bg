import React, { memo } from 'react';

type ChildrenProps = {
	children: React.ReactNode;
	resultImage: (file: Blob) => void;
	setDropped: (data: boolean) => void;
};

function __Card({ children, resultImage, setDropped }: ChildrenProps) {
	function dragOverHandler(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();
		setDropped(true);
	}

	function dropHandler(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();

		let arr: any[] = [];

		if (event.dataTransfer.items) {
			arr.concat(event.dataTransfer.items);
			arr.forEach((item: any, i: any) => {
				if (item?.kind === 'file') {
					const file = item.getAsFile();
					resultImage(file);
				}
			});
		} else {
			arr.concat(event.dataTransfer.items);
			arr.forEach((file: any, i: any) => resultImage(file));
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

const Card = memo(__Card);
export default Card;
