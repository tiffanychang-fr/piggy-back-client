import OfferCard from "./OfferCard";

function MyOffers() {
  // An offer could be proposed upon a post
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
      <h1>My Offers</h1>
      <div className="container">
        <div className="row mt-4">
          {fakeOffers.map((offer) => (
            <OfferCard key={offer._id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyOffers;
