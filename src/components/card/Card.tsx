import React from 'react';

type ChildrenProps = {
	children: React.ReactNode;
};

export default function Card({ children }: ChildrenProps) {
	return (
		<div className='row justify-content-center mt-5'>
			<div className='col-12 col-md-10 col-lg-5 mt-5'>
				<div className='bg-white py-4 px-5 p-md-4 p-lg-5 rounded-custom shadow-lg d-flex align-items-center justify-content-center flex-column'>
					{children}
				</div>
			</div>
		</div>
	);
}
