import { cookies } from 'next/headers';
import LoginBody from "./components/LoginBody";
import { redirect } from 'next/navigation';

const LoginPage = () => {

    const cookieStore = cookies();

    const accessToken = cookieStore.get('access-token')

    console.log('accessToken');
    console.log(accessToken);
    
    


    if(accessToken?.value) {
        redirect('/profile')
    }


    return ( 
        <main>
            <h1>This is login page</h1>
            <LoginBody/>
        </main>
    );
}
 
export default LoginPage;