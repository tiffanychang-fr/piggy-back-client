import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MyPosts from "./pages/MyPosts";
import MyOffers from "./pages/MyOffers";
import MyOrders from "./pages/MyOrders";
import DashboardSeller from "./pages/DashboardSeller";
import EditProfile from "./pages/EditProfile";
import StripeCallback from "./pages/Stripe/StripeCallback";
import StripeSuccess from "./pages/Stripe/StripeSuccess";
import StripeCancel from "./pages/Stripe/StripeCancel";

import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import PostDetail from "./pages/PostDetail";
import AllPosts from "./pages/AllPosts";
import CreateOffer from "./pages/CreateOffer";

function App() {
  return (
    <div className="App">
      <h1>#Titos!</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-posts" element={<AllPosts />} />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <Signup />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <Login />
            </IsAnon>
          }
        />

        <Route
          path="/dashboard"
          element={
            <IsPrivate>
              <Dashboard />
            </IsPrivate>
          }
        />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <UserProfile />
            </IsPrivate>
          }
        />

        <Route
          path="/my-posts"
          element={
            <IsPrivate>
              <MyPosts />
            </IsPrivate>
          }
        />

        <Route
          path="/my-offers"
          element={
            <IsPrivate>
              <MyOffers />
            </IsPrivate>
          }
        />

        <Route
          path="/my-orders"
          element={
            <IsPrivate>
              <MyOrders />
            </IsPrivate>
          }
        />

        <Route
          path="/seller"
          element={
            <IsPrivate>
              <DashboardSeller />
            </IsPrivate>
          }
        />

        <Route
          path="/profile/edit"
          element={
            <IsPrivate>
              <EditProfile />
            </IsPrivate>
          }
        />

        <Route
          path="/my-posts/create"
          element={
            <IsPrivate>
              <CreatePost />
            </IsPrivate>
          }
        />
        <Route
          path="/my-posts/edit/:postId"
          element={
            <IsPrivate>
              <EditPost />
            </IsPrivate>
          }
        />
        <Route
          path="/my-posts/details/:postId"
          element={
            <IsPrivate>
              <PostDetail />
            </IsPrivate>
          }
        />
        <Route
          path="/create-offer/:postId"
          element={
            <IsPrivate>
              <CreateOffer />
            </IsPrivate>
          }
        />

        <Route
          path="/stripe/callback"
          element={
            <IsPrivate>
              <StripeCallback />
            </IsPrivate>
          }
        />

        <Route
          path="/stripe/success/:offerId"
          element={
            <IsPrivate>
              <StripeSuccess />
            </IsPrivate>
          }
        />

        <Route
          path="/stripe/cancel"
          element={
            <IsPrivate>
              <StripeCancel />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
