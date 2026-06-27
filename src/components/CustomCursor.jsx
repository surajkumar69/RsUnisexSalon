import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Add slight delay for dot to create trailing effect
      setTimeout(() => {
        setDotPosition({ x: e.clientX, y: e.clientY })
      }, 50)
    }

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: `${position.x - 10}px`,
          top: `${position.y - 10}px`,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          transition: 'transform 0.2s ease',
        }}
      />
      <div
        className="custom-cursor-dot hidden md:block"
        style={{
          left: `${dotPosition.x - 4}px`,
          top: `${dotPosition.y - 4}px`,
        }}
      />
    </>
  )
}

export default CustomCursor
