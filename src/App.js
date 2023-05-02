import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Profile';
import Register from './Register';
import VerifyEmail from './VerifyEmail';
import Login from './Login';
import { useEffect } from 'react';
import { AuthProvider } from './AuthContext';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import PrivateRoute from './PrivateRoute';
import Hunt from './Hunt';
import Hall from './Hall';
import Library from './Library';
import CR from './Computer'
import DE from './Dead-end2';
import Exit from './Exit.js'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <Router>
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Routes>
          <Route
            exact
            path="/"
            element={<PrivateRoute><Dashboard/></PrivateRoute>}
          />
          <Route
            path="/hunt"
            element={<PrivateRoute><Hunt /></PrivateRoute>}
          />
          <Route
            path="/hall"
            element={<PrivateRoute><Hall /></PrivateRoute>}
          />
          <Route
            path="/library"
            element={<PrivateRoute><Library /></PrivateRoute>}
          />
          <Route
            path="/computerroom"
            element={<PrivateRoute><CR /></PrivateRoute>}
          />
           <Route
            path="/dead-end2"
            element={<PrivateRoute><DE /></PrivateRoute>}
          />
          <Route
            path="/exit"
            element={<PrivateRoute><Exit /></PrivateRoute>}
          />
          <Route
            path="/login"
            element={!currentUser?.emailVerified ? <Login /> : <Navigate to="/" replace />}
          />
          <Route
            path="/register"
            element={!currentUser?.emailVerified ? <Register /> : <Navigate to="/" replace />}
          />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
