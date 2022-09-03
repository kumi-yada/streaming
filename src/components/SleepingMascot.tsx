import {staticFile, Video} from 'remotion';

export const SleepingMascot = () => {
	return (
		<Video
			src={staticFile('mascot.webm')}
			className="h-24"
			playbackRate={0.2}
		/>
	);
};
