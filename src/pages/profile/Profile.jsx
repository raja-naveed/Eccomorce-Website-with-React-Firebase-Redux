import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import Layout from '../../components/layout/Layout';

function Profile() {
  const context = useContext(myContext); 
  const { user } = context;
  console.log(user);

  // Check if the user has a profile image, otherwise use a dummy image
  const profileImageUrl = user.profileImageUrl || 'https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png'; // Provide the path to your dummy image

  return (
    <Layout>
    <div className="bg-white rounded-lg shadow-md p-8 mx-auto max-w-md mt-10">
      <div className="flex items-center">
        <img
          src={'https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png' }
          alt="Profile"
          className="w-20 h-20 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2> {/* Replace with user's name */}
          <p className="text-gray-600">{user.email}</p> {/* Replace with user's email */}
        </div>
      </div>
      <hr className="my-6" />
      {/* Additional user details */}
      <div className="mb-4">
        <p className="text-gray-700 font-semibold">Location:</p>
        <p className="text-gray-600">{user.location || 'Not specified'}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 font-semibold">Bio:</p>
        <p className="text-gray-600">{user.bio || 'No bio available'}</p>
      </div>
      {/* You can add more user details here */}
      <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
        Edit Profile
      </button>
    </div>
    </Layout>
  );
}

export default Profile;
