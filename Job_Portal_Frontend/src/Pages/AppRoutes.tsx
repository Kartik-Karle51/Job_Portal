import HomePage from '../Pages/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import FindJobs from './FindJobs'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FindTalentPage from '../Pages/FindTalentPage';
import TalentProfilePage from '../Pages/TalentProfilePage';
import PostJobPage from '../Pages/PostJobPage';
import JobDescPage from '../Pages/JobDescPage';
import ApplyJobPage from '../Pages/ApplyJobPage';
import CompanyPage from '../Pages/CompanyPage';
import PostedJobs from '../Pages/PostedJobsPage';
import JobHistoryPage from '../Pages/JobHistoryPage';
import SignUpPage from '../Pages/SignUpPage';
import ProfilePage from '../Pages/profilePage';
import { Divider } from '@mantine/core';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
    const user=useSelector((state:any)=>state.user);
  return  <BrowserRouter>
      <div className='relative'>
        <Header />
        <Divider size="xs" mx="md" />
        <Routes>
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/find-talent' element={<FindTalentPage />} />
          <Route path='/post-job' element={<PostJobPage />} />
          <Route path='/jobs' element={<JobDescPage />} />
          <Route path='/apply-jobs' element={<ApplyJobPage />} />
          <Route path='/company' element={<CompanyPage />} />
          <Route path='/posted-jobs' element={<PostedJobs />} />
          <Route path='/signup' element={user?<Navigate to="/"/>:<SignUpPage />} />
          <Route path='/login' element={user?<Navigate to="/"/>:<SignUpPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/job-history' element={<JobHistoryPage />} />
          <Route path='/talent-profile' element={<TalentProfilePage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  
};

export default AppRoutes;
