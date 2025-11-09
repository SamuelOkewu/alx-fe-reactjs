import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import UserProfile from './components/UserProfile.jsx'
import UserContext from './components/UserContext.jsx'


function App() {
  const [ProfilePage] = useState(userData)

    return 
    <div className="App">
      <UserContext.Provider value={userData}>
    <UserInfo userData={userData} />;
    </UserContext.Provider>
    </div>
  }

  
      

export default App
