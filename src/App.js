import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./Order";
import Orders from "./Orders";
// import PrivateRoute from "./PrivateRoute";

const promise = loadStripe(
  "pk_test_51MMctIAeS1JlnFZmFce2bW1YjBvj2AsfLkzkmqkyi4LwCViVsz7gJcxspl0195evNyfLS9CdIVdyjWGpueLNB2Sq00oDypyPR9"
);
//
function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />{" "}
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

//sk_test_51MMctIAeS1JlnFZmHCHpIsTwWl3xuZTWOtFTvpAWlP9qU127pNFliOs7dBUjndHxFFI8xaroHyYCm5prphZACVIb00qzgGpZJx
//npm install -g firebase-tools