import React from "react";
import { withAuthenticator } from "aws-amplify-react";

export const Test = () => {
  return (
    <div>
      {withAuthenticator(() => (
        <div></div>
      ))}
    </div>
  );
};
