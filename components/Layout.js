import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-uniswap-bg font-body">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
