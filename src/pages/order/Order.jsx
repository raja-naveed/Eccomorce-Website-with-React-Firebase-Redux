import React, { useContext } from 'react'
import Loader from '../../components/loader/Loader'
import myContext from '../../context/myContext'
import Layout from '../../components/layout/Layout'


function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
  const context = useContext(myContext)
  const { mode, loading, order } = context
  console.log("order", order)
  
  const limitText = (text, limit) => {
    const words = text.split(' ');
    if (words.length <= limit) {
      return text;
    } else {
      const truncatedText = words.slice(0, limit).join(' ');
      return `${truncatedText}...`;
    }
  };

  return (
    <Layout>
  {loading && <Loader />}
  {order.length > 0 ? (
    <>
      <div className="h-full pt-10">
        {order
          .filter((obj) => obj.userid === userid)
          .map((order) => {
            return (
              <div
                key={order.id} // Make sure each order has a unique key
                className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
              >
                {order.cartItems.map((item) => {
                  return (
                    <div key={item.id} className="rounded-lg md:w-2/3">
                      <div
                        className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                        style={{
                          backgroundColor: mode === "dark" ? "#282c34" : "",
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        <img
                          src={item.imageUrl}
                          alt="product-image"
                          className="w-32 h-32 rounded-lg sm:w-40 object-cover"
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2
                              className="text-lg font-bold text-gray-900"
                              style={{
                                color: mode === "dark" ? "white" : "",
                              }}
                            >
                              {item.title}
                            </h2>
                            <p
                              className="mt-1 text-xs text-gray-700"
                              style={{
                                color: mode === "dark" ? "white" : "",
                              }}
                            >
                              {limitText(item.description, 10)}
                            </p>
                            <p
                              className="mt-1 text-xs text-gray-700"
                              style={{
                                color: mode === "dark" ? "white" : "",
                              }}
                            >
                              ₹{item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </>
  ) : (
    <h2 className="text-center text-2xl text-white">No Orders</h2>
  )}
</Layout>

  )
}

export default Order