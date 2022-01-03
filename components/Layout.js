import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-uniswap-bg font-body">
      <div className="sticky top-0 left-0 right-0">
        <Navbar />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
