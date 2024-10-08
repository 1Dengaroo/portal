import React from 'react'
import { UnderlineButtonProps } from './types'

export const UnderlineButton: React.FC<UnderlineButtonProps> = ({
  label,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button
      className={`relative group ${className}`}
      type={type || 'button'}
      {...props}
    >
      <span
        className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px]
        after:bg-current after:w-0 group-hover:after:w-full after:transition-all after:duration-300 after:origin-left"
      >
        {label}
      </span>
    </button>
  )
}
