//clerk sign-in page
import { SignIn } from "@clerk/remix";
 
export default function SignInPage() {
  return (
    <div>
      <h1>Sign In route</h1>
      <SignIn />
    </div>
  );
}