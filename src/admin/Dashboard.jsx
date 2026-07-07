import { useEffect, useState } from "react";



function Dashboard() {

  const [clicks, setClicks] = useState(0);



  useEffect(() => {

    const storedClicks = localStorage.getItem("clicks") || 0;

    setClicks(Number(storedClicks));

  }, []);



  const earnings = clicks * 5; // fake earning logic



  return (

    <div className="dashboard">



      <h1>📊 GiftGenie AI Dashboard</h1>



      <div className="stats">



        <div className="card">

          <h2>🖱️ Product Clicks</h2>

          <p>{clicks}</p>

        </div>



        <div className="card">

          <h2>💰 Estimated Earnings</h2>

          <p>₹{earnings}</p>

        </div>



        <div className="card">

          <h2>🛒 Orders</h2>

          <p>{Math.floor(clicks / 2)}</p>

        </div>



      </div>



    </div>

  );

}



export default Dashboard;