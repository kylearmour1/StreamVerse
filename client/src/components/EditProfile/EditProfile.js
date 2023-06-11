import React, { useState, useEffect } from 'react';
import AuthService from '../../utils/auth';

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(true); // initialize loading state

  useEffect(() => {
    if (!AuthService.loggedIn()) {
      // If not authenticated, redirect to the login page
      window.location.assign('/');
    } else {
      setIsLoading(false); // set loading to false once auth check has completed
    }
  }, []);

  // If still loading, return a loading state
  if (isLoading) {
    return <div>Loading...</div>;  // return early with loading spinner if still loading
  }

  // If not loading, render the EditProfile component as normal

  // Your component logic here

  return (
    // JSX code for the EditProfile component
    <div>
      {/* Your component UI elements */}
    </div>
  );
};

export default EditProfile;
