import { useContext } from 'react';
import UserInfo from './components/UserInfo';

function ProfilePage({ useContext }) {
  return <UserInfo userData={userContext} />;
}

export default ProfilePage;