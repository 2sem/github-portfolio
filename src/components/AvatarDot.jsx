import { useState } from 'react'

export default function AvatarDot({ realSrc, alt }) {
  const [real, setReal] = useState(false)

  return (
    <img
      src={real ? realSrc : '/images/pixel-avatar.png'}
      alt={alt}
      className="sidebar-avatar sidebar-avatar--dot"
      style={real ? { objectPosition: 'top' } : { imageRendering: 'pixelated' }}
      onClick={() => setReal(r => !r)}
    />
  )
}
