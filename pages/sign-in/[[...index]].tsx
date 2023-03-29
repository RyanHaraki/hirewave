import { SignIn } from "@clerk/clerk-react";

// Render the sign in component in your
// custom sign in page.
function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="sign-up"
        redirectUrl="/dashboard"
      />
    </div>
  );
}

export default SignInPage;
