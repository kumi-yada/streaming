import {AbsoluteFill} from 'remotion';
import {Mascot} from '../components/Mascot';
import {Text} from '../components/Text';

export const LoadingScreen = () => {
	return (
		<AbsoluteFill className="bg-red-50 items-center justify-center">
			<AbsoluteFill className="flex flex-col gap-8 items-center justify-center">
				<div className="opacity-80 pr-8">
					<Mascot />
				</div>
				<Text pulse>Loading...</Text>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
