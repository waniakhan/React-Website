import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [notificationSent, setNotificationSent] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get('http://localhost:5800/api/all-orders')
      .then((response) => {
        console.log(response.data);
        setOrders(response.data.orders);
      })
      .catch((error) => console.log(error));
  };

  const sendDeliveryNotification = async (orderId, customerEmail) => {
    try {
      await axios.post('http://localhost:5800/api/sendDeliveryNotification', {
        orderId,
        customerEmail,
      });
      console.log('Delivery notification sent');
      setNotificationSent(true); // Update the state to indicate success
      
      // Hide the success message after 3 seconds
      setTimeout(() => {
        setNotificationSent(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending delivery notification', error);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center bg-primary my-2 p-2">
        <span className="fs-4 fw-bold text-white">Orders</span>
      </div>
      <div className="container">
        {notificationSent && (
          <Alert variant="success" onClose={() => setNotificationSent(false)} dismissible>
            Delivery notification sent successfully!
          </Alert>
        )}
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th scope="row">{index + 1}</th>
                <td>
                  {order.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="d-flex align-items-center">
                      <img
                        src={item.thumbnail}
                        className="img-fluid rounded-circle"
                        style={{ height: '7vh', objectFit: 'contain' }}
                        alt=""
                      />
                    </div>
                  ))}
                </td>
                <td>
                  {order.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <p>{item.title}</p>
                    </div>
                  ))}
                </td>
                <td>
                  {order.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.price} €
                    </div>
                  ))}
                </td>
                <td>
                  <button   className='btn btn-light my-1 '  style={{ width: '60px', textAlign: 'center' }}
                    onClick={() =>
                      sendDeliveryNotification(order._id, order.customerEmail)
                    }
                  >
                    Send
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
