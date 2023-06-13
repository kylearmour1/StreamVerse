import React, { useEffect } from 'react';
import AuthService from '../../utils/auth';


const EditProfile = () => {
  useEffect(() => {
    // Check if the user is authenticated
    if (!AuthService.loggedIn()) {
      // If not authenticated, redirect to the login page
      window.location.assign('/');
    }
  }, []);
  return (
    

      <div>
        {/* Your Profile specific JSX code */}
      </div>

  );

};

export default EditProfile;
