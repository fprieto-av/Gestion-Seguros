import { useRef, useCallback, useEffect } from 'react'
import evaluacionMp4 from '../assets/video/evaluacionA+.mp4'
import OptimizedVideo from './OptimizedVideo'

export default function PartnersVideo() {
  const shellRef = useRef(null)
  const videoRef = useRef(null)

  const syncAspectRatio = useCallback((video) => {
    const { videoWidth, videoHeight } = video
    if (!videoWidth || !videoHeight || !shellRef.current) return
    shellRef.current.style.setProperty('--partners-ar', `${videoWidth} / ${videoHeight}`)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onResize = () => {
      if (video.videoWidth) syncAspectRatio(video)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [syncAspectRatio])

  return (
    <div className="partners-shell reveal delay-1" ref={shellRef}>
      <OptimizedVideo
        ref={videoRef}
        className="partners-video"
        mp4={evaluacionMp4}
        autoPlay
        muted
        loop
        playsInline
        lazy
        preload="none"
        onLoadedMetadata={(e) => syncAspectRatio(e.currentTarget)}
      />
    </div>
  )
}
