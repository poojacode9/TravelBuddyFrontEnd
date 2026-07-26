import { Link } from "react-router-dom";
import {
  FaUsers,
  FaBoxOpen,
  FaClipboardList,
  FaMoneyBillWave
} from "react-icons/fa";

import "./AdminDashboard.css";


function AdminDashboard() {

  return (

    <div className="admin-dashboard">


      <div className="admin-header">

        <h1>Admin Dashboard</h1>
        <p>Manage users, tour packages, bookings and payments.</p>

      </div>



      <div className="admin-cards">


        <Link to="/admin/packages" className="admin-card">

          <FaBoxOpen className="admin-icon"/>

          <h3>Manage Packages</h3>

          <p>
            Approve or reject guide tour packages.
          </p>

        </Link>



        <Link to="/admin/users" className="admin-card">

          <FaUsers className="admin-icon"/>

          <h3>Manage Users</h3>

          <p>
            View customers and guides.
          </p>

        </Link>




        <Link to="/admin/bookings" className="admin-card">

          <FaClipboardList className="admin-icon"/>

          <h3>Manage Bookings</h3>

          <p>
            View all tour bookings.
          </p>

        </Link>




        <Link to="/admin/payments" className="admin-card">

          <FaMoneyBillWave className="admin-icon"/>

          <h3>Payments</h3>

          <p>
            Check payment transactions.
          </p>

        </Link>



      </div>


    </div>

  );

}


export default AdminDashboard;