import { useEffect, useState, forwardRef, useRef, useCallback } from 'react'

const OptimizedVideo = forwardRef(function OptimizedVideo({
  webm,
  mp4,
  className,
  poster,
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  preload = 'metadata',
  lazy = false,
  onLoadedMetadata,
  'aria-hidden': ariaHidden,
}, ref) {
  const innerRef = useRef(null)
  const [active, setActive] = useState(!lazy)
  const [reduceMotion, setReduceMotion] = useState(false)

  const setRefs = useCallback((node) => {
    innerRef.current = node
    if (typeof ref === 'function') ref(node)
    else if (ref) ref.current = node
  }, [ref])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = (e) => setReduceMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!lazy) return
    const el = innerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          obs.disconnect()
        }
      },
      { rootMargin: '160px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [lazy])

  const shouldPlay = autoPlay && active && !reduceMotion

  useEffect(() => {
    if (!shouldPlay) return
    const video = innerRef.current
    if (!video) return
    video.play().catch(() => {})
  }, [shouldPlay, active])

  return (
    <video
      ref={setRefs}
      className={className}
      autoPlay={shouldPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={active && !reduceMotion ? preload : 'none'}
      poster={poster}
      onLoadedMetadata={onLoadedMetadata}
      aria-hidden={ariaHidden}
    >
      {active && !reduceMotion && (
        <>
          {webm && <source src={webm} type="video/webm" />}
          {mp4 && <source src={mp4} type="video/mp4" />}
        </>
      )}
    </video>
  )
})

export default OptimizedVideo
