import { Label } from "../../components";
const meta = {
    title: "UI/Label",
    component: Label,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select' },
    }
};
export default meta;
// const Template: StoryObj< typeof Label> = (args) => <Label {...args} /> 
export const Primary = {
    args: {
        label: 'Primary',
        size: 'h1',
        colorText: 'primary'
    }
};
export const Secundary = {
    args: {
        label: 'Secundary',
        size: 'h2',
        colorText: 'secondary',
    }
};
export const Tertiary = {
    args: {
        label: 'Basic',
        size: 'normal',
        colorText: 'tertiary',
    }
};
export const Basic = {
    args: {
        label: 'Basic',
        size: 'normal',
        colorText: 'primary',
    }
};
export const AllCaps = {
    args: {
        label: 'Basic',
        size: 'normal',
        allCaps: true,
        colorText: 'primary',
    }
};
export const FontColor = {
    args: {
        label: 'Custom Font Color',
        size: 'h1',
        allCaps: true,
        colorText: 'primary',
        backgroundColor: '#93bfb6'
    }
};
