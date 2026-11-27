import LoginForm from "@/components/authentication/client/login/LoginForm";
import RedirectIfAuthenticated from "@/components/authentication/client/RedirectIfAuthenticated";

export default function LoginPage() {
  return (
    <RedirectIfAuthenticated>
      <LoginForm />
    </RedirectIfAuthenticated>
  );
}
