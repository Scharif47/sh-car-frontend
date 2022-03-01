import Header from "./Header";
import Footer from "./Footer";
import React, {useRef} from "react";

function Layout({ children }) {
  const myRef = useRef()

  const clickHandler = () => {
    myRef.current
  }

  console.log(myRef)
  
  return (
    <div>
      <Header nav="navbar" />
      <div ref={myRef} onClick={() => clickHandler}>
      {children}
      </div>
      

      <Footer />
    </div>
  );
}

export default Layout;
