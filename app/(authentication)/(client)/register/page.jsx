import RegisterForm from "@/components/authentication/client/register/RegisterForm";
import RedirectIfAuthenticated from "@/components/authentication/client/RedirectIfAuthenticated";

export default function RegisterPage() {
  return (
    <RedirectIfAuthenticated>
      <RegisterForm />
    </RedirectIfAuthenticated>
  );
}
