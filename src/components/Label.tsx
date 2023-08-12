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
}

export const Label = ({
  label = 'no label',
  size = 'normal',
  allCaps = false,
  colorText = 'primary',
}: LabelProps) => {
  return (
    <label className={`${size} text-${colorText}`}>
      {allCaps ? label.toUpperCase() : label}
    </label>
  )
}
