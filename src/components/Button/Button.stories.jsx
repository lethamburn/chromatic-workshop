import Button from "./Button";

export default {
  title: "components/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

export const Tertiary = Template.bind({});

Secondary.args = {
  type: "secondary",
};

Tertiary.args = {
  type: "tertiary",
};
