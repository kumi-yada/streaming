import {AbsoluteFill} from 'remotion';
import {Mascot} from '../components/Mascot';

export const LoadingScreen = () => {
	return (
		<AbsoluteFill className="bg-red-50 items-center justify-center">
			<AbsoluteFill className="flex flex-col gap-8 items-center justify-center">
				<div className="opacity-80 pr-8">
					<Mascot />
				</div>
				<div className="text-gray-700 uppercase text-3xl tracking-widest font-light italic animate-pulse">
					Loading...
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
