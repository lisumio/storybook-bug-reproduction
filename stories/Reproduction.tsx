import React from "react";

interface FirstProps {
  correct: boolean;
}

const First = (props: FirstProps): JSX.Element => <hr />;

First.displayName = "First";

interface SecondProps {
  incorrect: boolean;
}

export const Second = (props: SecondProps) => <hr />;

export default First;
