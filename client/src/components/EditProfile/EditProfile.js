import React, { useEffect } from 'react';
import AuthService from '../../utils/auth';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const EditProfile = () => {
  useEffect(() => {
 
    if (!AuthService.loggedIn()) {

      window.location.assign('/');
    }
  }, []);

  return (
    <>
      <Sidebar />
      <Header />
      <div>
  
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
