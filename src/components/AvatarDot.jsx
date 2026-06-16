import { useState } from 'react'

export default function AvatarDot({ realSrc, alt }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <img
        src="/images/pixel-avatar.png"
        alt={alt}
        className="sidebar-avatar sidebar-avatar--dot"
        style={{ imageRendering: 'pixelated' }}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className="avatar-modal" onClick={() => setOpen(false)}>
          <img src={realSrc} alt={alt} className="avatar-modal-img" />
        </div>
      )}
    </>
  )
}
