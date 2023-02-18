import { FC } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

const Video: FC = () => {
	const onPlayerReady: YouTubeProps['onReady'] = (event) => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo()
	}

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
		},
	}

	return <YouTube videoId="fOHj5kGU4fY" opts={opts} onReady={onPlayerReady} />
}

export default Video
