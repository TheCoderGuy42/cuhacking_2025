function RedeemPage() {
  const giftCards = [
    {
      src: "/assets/amazon.jpg",
      alt: "Amazon Gift Card",
      value: "3000",
    },
    {
      src: "/assets/starbucks.jpg",
      alt: "Starbucks Gift Card",
      value: "5000",
    },
    {
      src: "/assets/visa.jpeg",
      alt: "Visa Gift Card",
      value: "10000",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Redeem Your Rewards</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {giftCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg"
          >
            <img
              src={card.src}
              alt={card.alt}
              className="w-64 h-auto rounded-lg"
            />
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">
              {card.value} REDEEM
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RedeemPage;
