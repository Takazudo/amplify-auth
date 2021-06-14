import * as React from "react";
import Amplify from 'aws-amplify';
import { default as awsconfig } from '../aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

// Amplifyの設定を行う
Amplify.configure(awsconfig);

// SingUp時に、メールアドレスとパスワードを要求する
const signUpConfig = {
  header: "Sign Up",
  hideAllDefaults: true,
  defaultCountyCode: "1",
  signUpFields: [
    {
      label: "User Name",
      key: "username",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 3,
      type: "password",
    },
  ],
};

//// SingOut
//function signOut() {
//  Auth.signOut().then().catch();
//}

const IndexPage = () => {
  return (
    <div>
      Boom!
      <AmplifySignOut />
    </div>
  );
};

export default withAuthenticator(IndexPage);
