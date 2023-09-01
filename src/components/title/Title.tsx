type TitleProps = {
	title: string;
	description: string;
};

export default function Title({ title, description }: TitleProps) {
	return (
		<div className='pt-5'>
			<h2 className='text-center fw-bold'>{title}</h2>
			<h6 className='text-muted text-center'>{description}</h6>
		</div>
	);
}
