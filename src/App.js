import React from 'react';
import HomePage from "./components/Pages/HomePage"
import ContactPage from './components/Pages/ContactUsPage';
import ServicesPage from "./components/Pages/ServicesPage";
import AboutUsPage from './components/Pages/AboutUsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shopping from './components/Pages/Shopping';
import BookingPage from './components/Pages/BookingPage';
import BackandNeckMassage from './components/ServicesPages/BackandNeckMassage';
import BodyHydration from './components/ServicesPages/BodyHydration';
import CellRegeneration from './components/ServicesPages/CellRegeneration';
import FaceLaser from './components/ServicesPages/FaceLaser';
import FullBody from './components/ServicesPages/FullBody';
import HandsLaser from './components/ServicesPages/HandsLaser';
import LegsLaser from './components/ServicesPages/LegsLaser';
import Makeup from './components/ServicesPages/Makeup';
import Mesotherapy from './components/ServicesPages/Mesotherapy';
import MoroccanBath from './components/ServicesPages/MoroccanBath';
import PeelingSkin from './components/ServicesPages/PeelingSkin';
import Sauna from './components/ServicesPages/Sauna';
import TherapeuticMassage from './components/ServicesPages/TherapeuticMassage';
import TurkishBath from './components/ServicesPages/TurkishBath';
import HairColor from './components/ServicesPages/HairColor';
import FootMassage from './components/ServicesPages/FootMassage';
import BodyMassage from './components/ServicesPages/BodyMassage';
import HairCutAndStyle from './components/ServicesPages/HairCutAndStyle';
import Nails from './components/ServicesPages/Nails';
import SkinClean from './components/ServicesPages/SkinClean';
import ChartsPage from './components/Admin/ChartsPage';
import TablesPage from './components/Admin/TablesPage';
import Admin from './components/Admin/Admin';

export default function App() {
  return (

    <Router>
      <Routes>
        {/* <Route path="/" element={<Admin />} />  */}
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutUsPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/ServicesPage" element={<ServicesPage />} />
        <Route path="/ShoppingPage" element={<Shopping />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        {/* Services Pages */}
        <Route path="/SkinCleanPage" element={<SkinClean />} />
        <Route path="/BackandNeckMassagePage" element={<BackandNeckMassage />} />
        <Route path="/BodyHydrationPage" element={<BodyHydration />} />
        <Route path="/CellRegenerationPage" element={<CellRegeneration />} />
        <Route path="/FaceLaserPage" element={<FaceLaser />} />
        <Route path="/FullBodyPage" element={<FullBody />} />
        <Route path="/HandsLaserPage" element={<HandsLaser />} />
        <Route path="/LegsLaserPage" element={<LegsLaser />} />
        <Route path="/MakeupPage" element={<Makeup />} />
        <Route path="/MesotherapyPage" element={<Mesotherapy />} />
        <Route path="/MoroccanBathPage" element={<MoroccanBath />} />
        <Route path="/PeelingSkinPage" element={<PeelingSkin />} />
        <Route path="/SaunaPage" element={<Sauna />} />
        <Route path="/TherapeuticMassagePage" element={<TherapeuticMassage />} />
        <Route path="/TurkishBathPage" element={<TurkishBath />} />
        <Route path="/HairCutPage" element={<HairCutAndStyle />} />
        <Route path="/HairColorPage" element={<HairColor />} />
        <Route path="/NailsPage" element={<Nails />} />
        <Route path="/BodyMassagePage" element={<BodyMassage />} />
        <Route path="/FootMassagePage" element={<FootMassage />} />
        <Route path="/ChartsPage" element={<ChartsPage />} />
        <Route path="/DataBasePage" element={<TablesPage />} />
      </Routes>
    </Router>
  );
}