import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

interface INumberButtonProps {
  onMinus?: () => void
  onPlus?: () => void
}

export const NumberButton: React.FC<INumberButtonProps> = ({
  children,
  onMinus = () => {},
  onPlus = () => {}
}) => (
  <div className="btn btn_number">
    <button className="btn btn_icon" onClick={onMinus}>
      <FiMinus />
    </button>
    <p>{children}</p>
    <button className="btn btn_icon" onClick={onPlus}>
      <FiPlus />
    </button>
  </div>
)
