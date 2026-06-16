import { useState } from 'react'

export default function AvatarDot({ realSrc, alt }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <img
        src={realSrc}
        alt={alt}
        className="sidebar-avatar sidebar-avatar--dot"
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
