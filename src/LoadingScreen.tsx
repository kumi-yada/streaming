import {AbsoluteFill} from 'remotion';

export const LoadingScreen = () => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<div className="text-gray-700 uppercase animate-pulse text-3xl">Loading ...</div>
		</AbsoluteFill>
	);
};
