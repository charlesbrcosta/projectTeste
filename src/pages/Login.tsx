import { LoginSidebar } from "../features/auth/components/LoginSidebar";
import { LoginForm } from "../features/auth/components/LoginForm";

export const Login: React.FC = () => {
    return (
        <div className='flex min-h-screen bg-gray-300'>
            <LoginSidebar/>
            <main>
                <LoginForm />
            </main>
        </div>
    );
}