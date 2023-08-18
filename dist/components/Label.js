import { jsx as _jsx } from "react/jsx-runtime";
// import { LabelProps } from '../interfaces/label'
import './label.css';
export const Label = ({ label = 'no label', size = 'normal', allCaps = false, colorText = 'primary', backgroundColor = 'none', }) => {
    return (_jsx("label", { style: { backgroundColor }, className: `${size} text-${colorText}`, children: allCaps ? label.toUpperCase() : label }));
};
