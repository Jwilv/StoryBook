import './label.css';
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
export declare const Label: ({ label, size, allCaps, colorText, backgroundColor, }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export {};
