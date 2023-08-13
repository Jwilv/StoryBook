import { Meta, StoryObj } from "@storybook/react";
import { Label } from "../../components";


const meta  = {
    title:"UI/Label",
    component : Label,
    tags: ['autodocs'],
    argTypes: {
        size: { control : 'select' },
    }
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

// const Template: StoryObj< typeof Label> = (args) => <Label {...args} /> 

export const Primary : Story = {
    args: {
        label: 'Primary',
        size: 'h1',
        colorText: 'primary'
    }
}

export const Secundary : Story = {
    args: {
        label: 'Secundary',
        size: 'h2',
        colorText: 'secondary',
    }
}

export const Tertiary : Story = {
    args: {
        label: 'Basic',
        size: 'normal',
        colorText: 'tertiary',
    }
}

export const Basic : Story = {
    args: {
        label: 'Basic',
        size: 'normal',
        colorText: 'primary',
    }
}

export const AllCaps : Story = {
    args: {
        label: 'Basic',
        size: 'normal',
        allCaps: true,
        colorText: 'primary',
    }
}

export const FontColor : Story = {
    args: {
        label: 'Custom Font Color',
        size: 'h1',
        allCaps: true,
        colorText: 'primary',
        backgroundColor: '#93bfb6'
    }
}

