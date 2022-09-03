import {Container} from '../components/Container';
import {SleepingMascot} from '../components/SleepingMascot';
import {Text} from '../components/Text';

export const LoadingScreen = () => {
	return (
		<Container>
			<div className="opacity-80 pr-8">
				<SleepingMascot />
			</div>
			<Text pulse>Loading...</Text>
		</Container>
	);
};
