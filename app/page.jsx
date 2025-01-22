// "use client";

// import React, { useEffect, useState } from "react";
import AboutPage from "./about/page";
// import Button from "@/components/button";

export default function Home() {

  // const [message, setMessage] = useState('initial');

  console.log("HomePage");

/*   useEffect(() => {
    setMessage("useEffect manipulation is successful");
    console.log("useEffect");
  }, []) */

  return (
    <div>
      {/* HomePage: */}
      {/* <Button /> */}
      {/* {message} */}
      <AboutPage />
    </div>
  );
}
