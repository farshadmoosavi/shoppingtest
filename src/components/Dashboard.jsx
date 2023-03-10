import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import Order from "./Order";

const getPreviousOrders = (orders) => {
  return orders.filter((ord) => ord.isPaymentCompleted === true); //filter returns an array
};

const getCard = (orders) => {
  return orders.filter((ord) => ord.isPaymentCompleted === false); //filter returns an array
};

const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  const userContext = useContext(UserContext);

  useEffect(() => {
    document.title = "Dashboard";

    //load data from database
    // (async () => {})(); anonymous function
    (async () => {
      let ordersResponse = await fetch(
        `http://localhost:8000/orders?userid=${userContext.user.currentUserId}`,
        {
          method: "GET",
        }
      );
      if (ordersResponse.ok) {
        let ordersResponseBody = await ordersResponse.json();
        // get all data from products
        let productsResponse = await fetch("http://localhost:8000/products", {
          method: "GET",
        });
        if (productsResponse.ok) {
          let productsResponseBody = await productsResponse.json();
          ordersResponseBody.forEach((order) => {
            // adding new property (product) to the orders objects
            order.product = productsResponseBody.find((prod) => {
              return prod.id === order.productId;
            });
          });
        }
        setOrders(ordersResponseBody);
      }
    })(); //anonymous function
  }, [userContext.user.currentUserId]);

  return (
    <div className="row">
      <div className="col-12 py-3 header">
        <i className="fa fa-dashboard"></i> Dashboard
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="py-2 my-2 text-info border-bottom border-info">
              <i className="fa fa-history"></i> Previous Orders{"   "}
              <span className="badge bg-info">
                {getPreviousOrders(orders).length}
              </span>
            </h4>

            {getPreviousOrders(orders).length === 0 ? (
              <div className="text-danger">no orders</div>
            ) : (
              ""
            )}
            {getPreviousOrders(orders).map((ord) => {
              return (
                <Order
                  key={ord.id}
                  productId={ord.productId}
                  userId={ord.userId}
                  isPaymentCompleted={ord.isPaymentCompleted}
                  quantity={ord.quantity}
                  orderId={ord.id}
                  product={ord.product}
                />
              ); // this is an Order component ===> Order.jsx
            })}
          </div>
          <div className="col-lg-6">
            <h4 className="py-2 my-2 text-primary border-bottom border-primary">
              <i className="fa fa-shopping-cart"></i> Orders In Progress{"   "}
              <span className="badge bg-primary">{getCard(orders).length}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
