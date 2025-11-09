import { useContext } from 'react';
import UserInfo from './components/UserInfo';

function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />;
}

function App() {
  const [ProfilePage, UserContext] = useState(userData)

    return 
    <div className="App">
      <UserContext.Provider value={userData}>
    <UserInfo userData={useContext} />;
    </UserContext.Provider>
    </div>
  }

export default ProfilePage;