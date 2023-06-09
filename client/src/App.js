import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import client from "./apolloClient";
// import axios from "axios";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
// import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import EditProfile from "./components/EditProfile/EditProfile";
import Profile from "./components/Profile/Profile";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Footer from "./components/Footer/Footer";
// import Comments from "./components/Comments/Comments";
import SignUp from "./components/Signup/Signup"
import "@fortawesome/fontawesome-free/css/all.min.css";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


// function HomePage(props) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const handleChanges = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Is this working?:", searchQuery);
//     setSearchQuery("");
//   };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const apiKey = process.env.YOUTUBE_API_KEY;
  //       // const apiKey = 'AIzaSyAHY8qXcMRgItfxDE2scj38-2Pq3_avWm4';
  //       console.log(apiKey);
  //       const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${apiKey}`;

  //       const response = await axios.get(apiUrl, {
  //         params: {
  //           key: apiKey,
  //         },
  //       });

  //       const data = response.data;
  //       console.log(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [searchQuery]);


//   return (
//     <React.Fragment>
//       <Sidebar />
//       <Header
//         searchQuery={searchQuery}
//         handleChanges={handleChanges}
//         handleSubmit={handleSubmit}
//       />
//       <Home {...props} />
//       <Footer />
//     </React.Fragment>
//   );
// }

// function VideoListPage(props) {
//   return (
//     <React.Fragment>
//       <Sidebar />
//       <Header />
//       <VideoList {...props} />
//       <Footer />
//     </React.Fragment>
//   );
// }

// function VideoPlayerPage(props) {
//   return (
//     <React.Fragment>
//       <Sidebar />
//       <Header />
//       {/* <Comments /> */}
//       <VideoPlayer {...props} />
//       <Footer />
//     </React.Fragment>
//   );
// }


// function EditProfilePage(props) {
//   return (
//     <React.Fragment>
//       <Sidebar />
//       <Header />
//       <EditProfile {...props} />
//       <Footer />
//     </React.Fragment>
//   );
// }

// function ProfilePage(props) {
//   return (
//     <React.Fragment>
//       <Sidebar />
//       <Header />
//       <Profile {...props} />
//       <Footer />
//     </React.Fragment>
//   );
// }

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/home" component={<Home />} />
          <Route path="/videolist" component={<VideoList />} />
          <Route path="/videoplayer" component={<VideoPlayer />} />
          <Route path="/editprofile" component={<EditProfile />} />
          <Route path="/profile" component={<Profile />} />
          <Route exact path="/login" component={<Login />} />
          <Route path="/signup" component={<SignUp />} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
