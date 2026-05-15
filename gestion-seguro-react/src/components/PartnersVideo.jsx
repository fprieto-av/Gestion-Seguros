import { useRef, useCallback, useEffect } from 'react'
import partnersLoopVideo from '../assets/video/Para Web Actualizado.mp4'
import bannerHome from '../assets/img/banner-home.jpg'

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
      <video
        ref={videoRef}
        className="partners-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={bannerHome}
        onLoadedMetadata={(e) => syncAspectRatio(e.currentTarget)}
      >
        <source src={partnersLoopVideo} type="video/mp4" />
      </video>
    </div>
  )
}
