import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ label, size, allCaps, colorText, backgroundColor, }: import("../../components").LabelProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        size: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secundary: Story;
export declare const Tertiary: Story;
export declare const Basic: Story;
export declare const AllCaps: Story;
export declare const FontColor: Story;
