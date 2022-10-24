import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import stripeService from "../../services/stripe.service.js";

function StripeCallback() {
  const { user, setUser, storeToken, getToken } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const accountStatus = async () => {
      try {
        const response = await stripeService.getAccountStatus(user, getToken());
        // console.log("USER ACCOUNT STATUS ON STRIPE CALLBACK", response);
        // update user in context and navigate to seller dashboard
        setUser(response.data);
        navigate("/seller");
      } catch (err) {
        console.log(err);
      }
    };

    user && storeToken && accountStatus();
  }, [user, setUser, storeToken, getToken, navigate]);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default StripeCallback;
