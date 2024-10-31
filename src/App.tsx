import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

function App() {
  return (
    <div className="flex flex-col gap-10 min-h-screen ">
      <Header />

      <div className="flex-auto overflow-x-hidden">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
