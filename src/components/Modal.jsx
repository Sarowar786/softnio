const Modal = ({ cartItems, totalCartPrice, closeModal, totalQuantity }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col gap-4 bg-white rounded-[20px] p-11 w-[651px] h-[480px]  shadow-lg">
        <h2 className="text-[22px] leading-6 font-bold ">Your Cart</h2>

        <div className="flex-grow overflow-y-auto">
          <table className="w-full text-sm border-collapse mb-6">
            <thead>
              <tr className="border-b text-textColor text-sm font-normal leading-6 pt-1 pr-1 pb-2">
                <th className="py-2 text-left">Item</th>
                <th className="py-2 text-left">Color</th>
                <th className="py-2 text-left">Size</th>
                <th className="py-2 text-center">Quantity</th>
                <th className="py-2 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr
                  key={index}
                  className="text-lightBlack border-b pb-4 pr-1 h-[52px] w-[563px]"
                >
                  <td className="py-2">
                    <div className="flex gap-2 items-center">
                      <img
                        className="h-9 w-9 rounded-[3px]"
                        src={item.image}
                        alt=""
                      />
                      <span className="text-sm font-normal leading-6 text-lightBlack">
                        {item.title}
                      </span>
                    </div>
                  </td>
                  <td className="py-2">{item.color}</td>
                  <td className="py-2 font-bold">{item.size}</td>
                  <td className="py-2 text-center">{item.quantity}</td>
                  <td className="py-2 text-right">${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">Total</span>
          <div>
            <span className="font-bold text-sm mr-9 text-lightBlack">
              {totalQuantity}
            </span>
            <span className="font-bold text-lg text-lightBlack leading-8">
              ${totalCartPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 pt-[10px]">
          <div></div>
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={closeModal}
              className="px-4 py-2 border border-gray-300 h-[36px] bg-white text-black rounded text-[13px] leading-5 font-bold"
            >
              Continue Shopping
            </button>
            <button
              onClick={closeModal}
              className=" px-4 py-2 w-[94px] h-[36px] text-center bg-blue-600 text-white rounded hover:bg-blue-700 text-[13px] leading-5 font-bold"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
