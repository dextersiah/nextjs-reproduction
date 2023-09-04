"use client";

import { useRouter } from "next/navigation";

const LoginBody = () => {

    const router = useRouter()

    const onLogin = async () => {
        const loginApi = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
        });

        const res = await loginApi.json();

        if(res.success) {
            router.push('/profile')
        }

    }

    return ( 
        <main>
            <button onClick={onLogin}>
                Login Here
            </button>
        </main>
    );
}
 
export default LoginBody;