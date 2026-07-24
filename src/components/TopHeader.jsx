import "./TopHeader.css";
import { Link } from "react-router-dom";

function TopHeader() {

return (

<header className="top-header">

<div className="website-name">
<h2>Travel Buddy</h2>
</div>


<nav className="user-menu">



<Link to="/changepassword">
Change Password
</Link>


<Link to="/tourhistory">
My Tour History
</Link>


<Link to="/ticket">
Issued Ticket
</Link>


</nav>


<div className="logo">

<img
src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
alt="Travel Buddy Logo"
/>

</div>


</header>

);

}

export default TopHeader;