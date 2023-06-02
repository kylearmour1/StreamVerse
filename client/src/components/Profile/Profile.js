import React from "react";
import "./Profile.css";

// TODO: Confirm data for video submission
// TODO: Ensure YT API info is passed in where needed
// TODO: Destructure the user data from props

function Profile(props) {
  // // We need to destructure the user data from props
  const { loggedInUser } = props;
  // let name = props.name;
  // let username = props.username;
  // let photo = props.photo;
  // let submittedVideos = props.submittedVideos;
  // let friends = props.friends;
  // let notifications = props.notifications;
  console.log(loggedInUser);

  return (
    //     <div className="profile-page">
    //       <header className="profile-header">
    //         <img src={photo} alt="Profile" className="profile-photo" />
    //         <h1>{name}</h1>
    //         <h2>@{username}</h2>
    //       </header>

    // {/* // this section on video submissions assumes terms about the model  -- may need to be edited   */}
    //       <section className="videos">
    //         <h3>Submitted Videos</h3>
    //         {submittedVideos.map(video => (
    //           <div key={video.id}>
    //             <video src={video.url} controls />
    //             <p>{video.title}</p>
    //           </div>
    //         ))}
    //       </section>

    //       <section className="friends">
    //         <h3>Friends</h3>
    //         {friends.map(friend => (
    //           <div key={friend.id} className="friend-item">
    //             <img src={friend.photo} alt={friend.name} />
    //             <p>{friend.name}</p>
    //           </div>
    //         ))}
    //       </section>

    //       <section className="notifications">
    //         <h3>Notifications</h3>
    //         {notifications.map(notification => (
    //           <div key={notification.id} className="notification-item">
    //             <p>{notification.message}</p>
    //           </div>
    //         ))}
    //       </section>
    //     </div>
    <div>profile</div>
  );
}

export default Profile;
