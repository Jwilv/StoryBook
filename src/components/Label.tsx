// import { LabelProps } from '../interfaces/label'
import './label.css'

type LabelSize = 'normal' | 'h1' | 'h2' | 'h3';

type LabelColor = 'primary' | 'secondary' | 'tertiary';


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
  /**
   * this is the color of Label
   */
  colorText: LabelColor;
  /**
   * this is the background color of label
   */
  backgroundColor?: string;
}

export const Label = ({
  label = 'no label',
  size = 'normal',
  allCaps = false,
  colorText = 'primary',
  backgroundColor = 'none',
}: LabelProps) => {
  return (
    <label style={{ backgroundColor }} className={`${size} text-${colorText}`}>
      {allCaps ? label.toUpperCase() : label}
    </label>
  )
}
