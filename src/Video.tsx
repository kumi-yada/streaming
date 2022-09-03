import {Composition} from 'remotion';
import {LoadingScreen} from './screens/LoadingScreen';
import './style.css';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="LoadingScreen"
				component={LoadingScreen}
				durationInFrames={70}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
