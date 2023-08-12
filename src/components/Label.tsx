// import { LabelProps } from '../interfaces/label'
import './label.css'

type LabelSize = 'normal' | 'h1' | 'h2';

export interface LabelProps {
    /**
    * this the principal Label
    */
    label: string;
    /**
     *this the size of Label
     */
    size: LabelSize;
}

export const Label = ({
  label = 'no label',
  size = 'normal',
}: LabelProps) => {
  return (
    <label className={`${size}`}>
      {label}
    </label>
  )
}
