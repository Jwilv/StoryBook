import { Meta, StoryObj } from "@storybook/react";
import { Label } from "../../components";


const meta  = {
    title:"UI/Label",
    component : Label,
    tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

// const Template: StoryObj< typeof Label> = (args) => <Label {...args} /> 

export const Primary : Story = {
    args: {
        label: 'Promary',
        size: 'h1'
    }
}

export const Secundary : Story = {
    args: {
        label: 'Secundary',
        size: 'h2'
    }
}

export const Basic : Story = {
    args: {
        label: 'Basic',
        size: 'normal'
    }
}

