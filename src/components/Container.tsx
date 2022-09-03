import {PropsWithChildren} from 'react';
import { AbsoluteFill } from 'remotion';

export const Container = ({children}: PropsWithChildren) => {
	return (
		<AbsoluteFill className="bg-red-50 items-center justify-center">
			<AbsoluteFill className="flex flex-col gap-8 items-center justify-center">
                {children}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
