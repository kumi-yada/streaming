import {PropsWithChildren} from 'react';
import {useCurrentFrame, useVideoConfig, interpolate} from 'remotion';

interface TextProps extends PropsWithChildren {
	pulse?: boolean;
}

export const Text = ({pulse, children}: TextProps) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	let opacity = 1;
	if (pulse) {
		const opacity1 = interpolate(frame, [0, durationInFrames / 2], [0.4, 1]);
		const opacity2 = interpolate(
			frame,
			[durationInFrames / 2, durationInFrames],
			[1, 0.4]
		);

		opacity = opacity1 >= 1 ? opacity2 : opacity1;
	}

	return (
		<div
			className="text-gray-700 uppercase text-3xl tracking-widest font-light italic"
			style={{opacity}}
		>
			{children}
		</div>
	);
};
