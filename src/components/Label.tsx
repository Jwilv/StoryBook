// import { LabelProps } from '../interfaces/label'
import './label.css'

type LabelSize = 'normal' | 'h1' | 'h2' | 'h3';

export interface LabelProps {
  /**
  * this the principal Label
  */
  label: string;
  /**
   *this the size of Label
   */
  size: LabelSize;
  /**
   * this is uppercase tag
   */
  allCaps?: boolean;
}

export const Label = ({
  label = 'no label',
  size = 'normal',
  allCaps = false,
}: LabelProps) => {
  return (
    <label className={`${size}`}>
      {allCaps ? label.toUpperCase() : label}
    </label>
  )
}
