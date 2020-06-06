import { useState, useEffect, useLayoutEffect } from 'react'

export const useAnimationTrigger = (
  observerEl: React.RefObject<HTMLElement>
) => {
  const [animationTrigger, setAnimationTrigger] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const target = entries[0]
      if (target.isIntersecting) {
        setAnimationTrigger(true)
        observer.unobserve(observerEl.current as Element)
      }
    })

    observer.observe(observerEl.current as Element)
  })

  return animationTrigger
}

export const useLockBodyScroll = () => {
  useLayoutEffect((): (() => void) => {
    const originalStyle = window.getComputedStyle(document.body).overflow

    document.body.style.overflow = 'hidden'

    return () => (document.body.style.overflow = originalStyle)
  }, [])
}

export const useInfiniteScroll = ({
  target,
  onIntersect,
  threshold = 0,
  rootMargin = '0px',
}: {
  target: React.RefObject<HTMLElement>
  onIntersect: IntersectionObserverCallback
  threshold?: number
  rootMargin?: string
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold,
    })

    if (!target) {
      return
    }

    observer.observe(target.current as Element)

    return () => {
      observer.unobserve(target.current as Element)
    }
  }, [target, rootMargin, onIntersect, threshold])
}
