// import Navbar from "./navbar";
// import Footer from "./footer";

import Master from "./master";

export default function AuthLayout({ children }) {
  return (
    <>
      <Master>
        <div className="d-flex main-container">
          <>{children}</>
        </div>
      </Master>

      {/* <Navbar /> */}
      {/* <Footer /> */}
    </>
  );
}
