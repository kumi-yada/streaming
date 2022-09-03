import {staticFile, Video} from 'remotion';

export const Mascot = () => {
	return (
		<Video
			loop
			src={staticFile('mascot.webm')}
			className="h-24"
			playbackRate={0.25}
		/>
	);
};
