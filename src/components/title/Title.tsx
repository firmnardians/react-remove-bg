type TitleProps = {
	title: string;
	description: string;
};

export default function Title({ title, description }: TitleProps) {
	return (
		<div className='pt-5'>
			<h1 className='text-center fw-bold'>{title}</h1>
			<h5 className='text-muted text-center'>{description}</h5>
		</div>
	);
}
