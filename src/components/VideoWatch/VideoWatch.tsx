import { FC, useState } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
// import ReactPlayer from 'react-player'
import Title from '../../ui/Title/Title'
import styles from './VideoWatch.module.scss'

const VideoWatch: FC = () => {
	const [video, setVideo] = useState(false)
	const onPlayerReady: YouTubeProps['onReady'] = (event) => {
		setVideo(true)
		// access to player in all event handlers via event.target
		console.log('ready')
		event.target.pauseVideo()
	}

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
			// eslint-disable-next-line no-restricted-globals
			origin: location.hostname,
		},
	}

	return (
		<div className={styles.videoComponentWrapper}>
			<div className={styles.textBackground}>
				<div className={styles.textWrapper}>
					<div>Product Demo</div>
					<Title>Apple Watch. Dear Apple</Title>

					<div></div>
					<div>
						A New Hampshire man is rescued after falling into a frozen river
						while ice skating. A high school senior escapes a visit from a bear.
						A doctor saves his friend’s life — all with the help of Apple Watch.
						Real people read their stories about how Apple Watch has impacted
						their lives.
					</div>
				</div>
			</div>
			<div className={styles.videoWrapper}>
				<YouTube
					videoId="fOHj5kGU4fY"
					opts={opts}
					onReady={onPlayerReady}
					style={{ display: 'none' }}
				/>
				{/* <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" /> */}
				{/* <div>
					{video && (
						<iframe
							width="1280"
							height="720"
							src="https://www.youtube.com/embed/fOHj5kGU4fY"
							title="Apple Watch | Dear Apple | Apple"
							// @ts-ignore
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					)}
				</div> */}
			</div>
		</div>
	)
}

export default VideoWatch
