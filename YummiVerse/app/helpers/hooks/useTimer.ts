import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const useTimer = (duration: number, runWithoutPress = false) => {
  const [time, setTime] = useState(duration * 60)
  const [isRunning, setIsRunning] = useState(false)

  const intervalRef = useRef<any>(null)

  useEffect(() => {
    if(runWithoutPress) startTimer()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = useCallback(() => {
    if (intervalRef.current) return

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
          setIsRunning(false)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    setIsRunning(true)
  }, [])

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    setIsRunning(false)
  }, [])

  const handleButtonPress = useCallback(() => {
    if (isRunning) {
      stopTimer()
    } else {
      startTimer()
    }
  }, [isRunning, startTimer, stopTimer])

  const formatTime = useMemo(() => {
    return (seconds: number) => {
      const minutes = Math.floor(seconds / 60)
      const secs = seconds % 60
      return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    }
  }, [])
 
  return {
    time,
    isRunning,
    formatTime,
    handleButtonPress
  }
}

export default useTimer