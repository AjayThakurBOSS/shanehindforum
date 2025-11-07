import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SitemapPage from './pages/SitemapPage'
import NeoDemocracyPage from './pages/NeoDemocracyPage'
import EventsPage from './pages/EventsPage'
import JoinPage from './pages/JoinPage'
import DonationPage from './pages/DonationPage'
import ShaneSandesh from './pages/ShaneSandesh'
import EventDetailsPage from './pages/EventDetailsPage'
import EventRegistrationPage from './pages/EventRegistrationPage'
import ContactUsPage from './pages/ContactUsPage';
import AboutPage from './pages/aboutForum/AboutPage';
import DrAwdheshSingh from './pages/leadership/DrAwdheshSingh';
import DrMangalSingh from './pages/leadership/DrMangalSingh';
import DrShailendraSingh from './pages/leadership/DrShailendraSingh';
import ISICH from './pages/leadership/ISICH';
import FutureOfCountry from './pages/misc/FutureOfCountry';
import EraOfDivideAndRule from './pages/misc/EraOfDivideAndRule';
import EndOfDevideAndRule from './pages/misc/EndOfDevideAndRule';
import PhilosophyPage from './pages/aboutForum/PhilosophyPage';
import PhilosophyPageHindi from './pages/aboutForum/PhilosophyPageHindi';
import Constitution from './pages/aboutForum/Constitution';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about-shf' element= {<AboutPage/>} />
          <Route path='/neo-democracy' element={<NeoDemocracyPage/>} />
          <Route path='/upcoming-events' element={<EventsPage/>} />
          <Route path='/join-shf' element={<JoinPage/>} />
          <Route path='/donate' element={<DonationPage/>} />
          <Route path='/shane-sandesh' element={<ShaneSandesh/>} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path='/event/eventName' element={<EventDetailsPage/>} />
          <Route path= '/event/new-event' element={<EventRegistrationPage/>} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/dr-awadhesh-kumar-singh" element={<DrAwdheshSingh />} />
          <Route path="/dr-mangal-singh" element={<DrMangalSingh />} />
          <Route path="/dr-shailendra-kumar-singh" element={<DrShailendraSingh />} />
          <Route path="/isich-spiritual-source-of-shf" element={<ISICH />} />
          <Route path='/future-country' element={<FutureOfCountry/>}/>
          <Route path='/era-divide-rule' element={<EraOfDivideAndRule/>}/>
          <Route path='/end-divide-rule' element={<EndOfDevideAndRule/>} />
          <Route path='/our-philosophy' element={<PhilosophyPage/>} />
          <Route path='/our-philosophy-hindi' element={<PhilosophyPageHindi/>} />
          <Route path='/our-constitution-hindi' element={<Constitution/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App  