import type { TBtnProps } from './types'

export default function Button({text}: TBtnProps) {
    return (
        <button className="pro-button">{text}</button>
    )
}