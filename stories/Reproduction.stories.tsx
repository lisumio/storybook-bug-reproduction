import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Reproduction from "./Reproduction";

export default {
  title: "Reproduction",
  component: Reproduction,
} as ComponentMeta<typeof Reproduction>;

export const Basic: ComponentStory<typeof Reproduction> = (props) => {
  return <Reproduction {...props} />;
};
