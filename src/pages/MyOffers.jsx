import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import OfferCard from "../components/Cards/OfferCard";
import offerService from "../services/offer.service.js";

function MyOffers() {
  const { user } = useContext(AuthContext);
  const [allOffers, setAllOffers] = useState([]);

  // Render all the offers of this post
  useEffect(() => {
    offerService
      .getAllOffers(user)
      .then((response) => setAllOffers(response.data))
      .catch((error) => console.log(error));
  }, [user]);

  // An offer could be proposed upon a post
  // Keep the fakeOffers array as default value for the demo purpose
  const fakeOffers = [
    {
      _id: "imamafakeofferid",
      post: "iamafakepostid",
      sellerMessage:
        "Hello, I live in Paris 12, I am available to accompany you to see a doctor on Nov-20",
      price: 20,
      proposedBy: "iamafakeuserid",
      isConfirmed: false,
    },
    {
      _id: "imamafakeofferid2",
      post: "iamafakepostid2",
      sellerMessage:
        "Hello, I live in Vincennes, I can accompany you to the prefecture on Jan-15",
      price: 25,
      proposedBy: "iamafakeuserid2",
      isConfirmed: false,
    },
    {
      _id: "imamafakeofferid3",
      post: "iamafakepostid2",
      sellerMessage:
        "Hello, I live in Arcueil, I can help you to apply CPF in 94",
      price: 15,
      proposedBy: "iamafakeuserid3",
      isConfirmed: false,
    },
  ];

  return (
    <div>
      <h1 className="mt-4">My Offers</h1>
      <div className="container">
        <div className="row mt-4">
          {allOffers.length === 0
            ? fakeOffers.map((offer) => (
                <OfferCard key={offer._id} offer={offer} />
              ))
            : allOffers.map(
                (offer) =>
                  offer.isAccepted === false && (
                    <OfferCard
                      key={offer._id}
                      offer={offer}
                      allOffers={allOffers}
                      setAllOffers={setAllOffers}
                    />
                  )
              )}
        </div>
      </div>
    </div>
  );
}

export default MyOffers;
