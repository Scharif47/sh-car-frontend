import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Header nav="navbar" />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
