import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-200 font-body ">
      <div className="flex flex-col h-screen">
        <div className="sticky top-0">
          <Navbar />
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
}
