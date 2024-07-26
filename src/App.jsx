import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(""); 
  const [Sales, setSales] = useState("");
  const [beneficiary, setBeneficiary] = useState("");

  const RecieptData = [
    { id: 1, field: "Item", value: item },
    { id: 2, field: "Original Price", value: price },
    { id: 3, field: "Quantity", value: quantity },
    { id: 4, field: "Payment Method", value: paymentMethod }, 
    { id: 5, field: "Sales Rep", value: Sales },
    { id: 6, field: "Beneficiary", value: beneficiary }, 
  ];

  const subTotal = price * quantity;
  const taxFee = Math.ceil(2 / 100 * subTotal);

  return (
    <div className="w-full h-screen p-4">
      <div className="w-full h-full space-y-3 flex flex-col items-center md:flex-row md:space-x-6 md:space-y-0">
        <form className="w-full md:w-1/3 border p-6 rounded">
          <h3 className="mb-4 text-center font-semibold text-xl font-mono text-orange-500">
            Sales Form
          </h3>

          <input
            className="w-full mb-2 p-2 border rounded"
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Item"
          />
          <input
            className="w-full mb-2 p-2 border rounded"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Original Price"
          />
          <input
            className="w-full mb-2 p-2 border rounded"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
          />
          <select 
            className="w-full mb-2 p-2 border rounded"
            value={paymentMethod} 
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">--- select payment method ---</option>
            <option value="card">Card</option>
            <option value="transfer">Transfer</option>
            <option value="cash">Cash</option>
          </select>
          <input
            className="w-full mb-2 p-2 border rounded"
            type="text"
            value={Sales}
            onChange={(e) => setSales(e.target.value)}
            placeholder="Sales Rep"
          />
          <input
            className="w-full mb-2 p-2 border rounded"
            type="text"
            value={beneficiary}
            onChange={(e) => setBeneficiary(e.target.value)}
            placeholder="Beneficiary" 
          />
          <button className="bg-orange-500 w-full py-3 text-xl font-mono text-white hover:text-gray-600 rounded-md">
            Proceed
          </button>
        </form>

        <div className="w-full md:w-1/3 border p-4 bg-orange-300 space-y-2">
          <div className="w-full border p-4 space-y-2">
            <h2 className="text-xl font-mono text-orange-500 font-semibold">Receipt</h2>
            <hr className="my-4" />

            <div className="my-4">
              {RecieptData.map((singleData) => (
                <div className="flex justify-between my-2" key={singleData.id}>
                  <p>{singleData.field}</p>
                  <p>{singleData.value}</p>
                </div>
              ))}

              <hr className="my-4" />

              <div className="flex justify-between font-semibold">
                <p>Subtotal</p>
                <p>NGN {subTotal}</p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>Tax</p>
                <p>NGN {taxFee}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-lg">
                <p>Total</p>
                <p>NGN {subTotal + taxFee}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
