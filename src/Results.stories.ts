import { Meta, Story, StoryObj} from "@storybook/react";
import { Results } from "./Results";

const meta = {
    component: Results,
} satisfies Meta<typeof Results>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {}