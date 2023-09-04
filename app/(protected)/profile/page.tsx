import { cookies } from 'next/headers';
import ProfileBody from './components/ProfileBody';

const ProfilePage = () => {
    const cookieStore = cookies()

    const accessToken = cookieStore.get('access-token')    

    return (
        <div>
            <h1>This is profile page</h1>
            <h2>Access Token: {accessToken?.value}</h2>


            <ProfileBody/>
        </div>
    )
}
 
export default ProfilePage;