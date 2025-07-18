import type React from "react";
import style from './index.module.css'

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isBig?: boolean
  isReverse?: boolean
}

export default function Button({children, className, isBig, isReverse, ...props}: PropsButton) {
  return (
    <div>
      <button className={`${isBig ? style.big : ''} ${isReverse ? style.reverse : ''} ${className}`} {...props}>{children}</button>
    </div>
  )
}
