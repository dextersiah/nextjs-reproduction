"use client";

import { useRouter } from "next/navigation";

const ProfileBody = () => {
    const router = useRouter()

    const onLogout = async () => {
        const loginApi = await fetch('http://localhost:3000/api/logout', {
            method: 'POST',
        });

        const res = await loginApi.json();

        if(res.success) {
            router.push('/login')
        }

    }

    return ( 
        <div>
            <hr />
            <button onClick={onLogout}>Logout here</button>
        </div>
    );
}
 
export default ProfileBody;