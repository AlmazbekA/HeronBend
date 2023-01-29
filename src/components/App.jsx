import React, { useState } from 'react';
import Chat from "./Chat";
import CreateArea from "./CreateArea";
import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";
import News from "./News";
import Contact from "./Contact";
import Info from "./Info";
import Commitee from "./Commitee";
import Login from "./User";
import Dashboard from './Dashboard';
// import ProtectedRoute from "./ProtectedRoute";
// import { AuthProvider } from "./AuthContext"
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./UserAuthContext";
import ProtectedRoute from "./ProtectedRoute";




// import PrivateRoute from './privateRoute';



// import { auth } from './firebase';




function App() {

  const [chat, setChat] = useState([]);

  function addChat(newChat) {
    setChat(prevChat => {
      return [...prevChat, newChat];
    });
  }

  function deleteChat(id) {
    setChat(prevChat => {
      return prevChat.filter((chatItem, index) => {
        return index !== id;
      });
    });
  }
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Header /> <Hero /> <Main /> <Footer />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/announcements",
  //     element: (
  //       <>
  //         <Header /> <Album /> <Footer />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/calender",
  //     element: (
  //       <>
  //         <Header /> <Calander /> <Footer />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/neighbors",
  //     element: (
  //       <>
  //         <Header /> <Neighbors /> <Footer />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/chat",
  //     element: (
  //       <>
  //         <Header />
  //         <CreateArea onAdd={addChat} />
  //         {Chat.map((chatItem, index) => {
  //           return (
  //             <Chat
  //               key={index}
  //               id={index}
  //               title={chatItem.title}
  //               content={chatItem.content}
  //               onDelete={deleteChat}
  //             />
  //           );
  //         })}
  //       <Footer />
  //       </>
  //     ),
  //   },
  // ]);  
  // const [user, setUser] = useState(null)
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(userAuth => {
  //     const user = {
  //       uid: userAuth?.uid,
  //       email: userAuth?.email
  //     }
  //     if (userAuth) {
  //       console.log(userAuth)
  //       setUser(user)
  //     } else {
  //       setUser(null)
  //     }
  //   })
  //   return unsubscribe
  // }, [])
  return (
  //   <React.StrictMode>
  //     <RouterProvider router={createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Header /> <Hero /> <Main /> <Footer />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/announcements",
  //     element: (
  //       <>
  //         <Header /> <Album /> <Footer />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/calender",
  //     element: (
  //       <>
  //         <Header /> <Calander /> <Footer />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/neighbors",
  //     element: (
  //       <>
  //         <Header /> <Neighbors /> <Footer />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/chat",
  //     element: (
  //       <>
  //         <Header />
  //         <CreateArea onAdd={addChat} />
  //         {chat.map((chatItem, index) => {
  //           return (
  //             <Chat
  //               key={index}
  //               id={index}
  //               title={chatItem.title}
  //               content={chatItem.content}
  //               onDelete={deleteChat}
  //             />
  //           );
  //         })}
  //       <Footer />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/commitee",
  //     element: (
  //       <>
  //         <Header /> <Commitee /> <Footer />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/resource",
  //     element: (
  //       <>
  //         <Header /> <Resources /> <Footer />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/login",
  //     element: (
  //       <Login />
  //     ),
  //   },
  //   {
  //     path: "/dashboard",
  //     element: (
  //       <Dashboard />
  //     ),
  //   },
  // ])
  // } />
    // <AuthProvider>
    <UserAuthContextProvider>
      <Routes>
          <Route exact path="/" element={[<><Header /><Hero /><Main /><Footer /></>]} />
          <Route exact path="/announcements" element={<><Header /><News /><Footer /></>} />
          <Route exact path="/Contact" element={<><Header /><Contact /><Footer /></>} />
          <Route exact path="/Info" element={[<><Header /><Info /><Footer /></>]} />
          <Route exact path="/chat" element={
                    <>
                    <Header />
                    <CreateArea onAdd={addChat} />
                    {chat.map((chatItem, index) => {
                      return (
                        <Chat
                          key={index}
                          id={index}
                          title={chatItem.title}
                          content={chatItem.content}
                          onDelete={deleteChat}
                        />
                      );
                    })}
                  <Footer />
                  </>
          } />
          <Route exact path="/commitee" element={<><Header /> <Commitee /> <Footer /></>} />
          <Route exact path="/dashboard" element={<><ProtectedRoute><Dashboard /></ProtectedRoute></>} />
          <Route exact path="/login" element={<><Login /></>} />
      </Routes>
    </UserAuthContextProvider>

    
  );
}

export default App;
