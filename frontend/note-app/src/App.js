import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import SignInPage from "./pages/SignInPage";
import DashboardPage from "./pages/DashboardPage";
import CreatePage from "./pages/CreatePage";
import DeletePage from "./pages/DeletePage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/delete" element={<DeletePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





























// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import SignInPage from "./pages/SignInPage";
// import DashboardPage from "./pages/dashboardPage";
// import CreatePage from "./pages/createPage";
// import DeletePage from "./pages/deletePage";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<SignInPage />} />
//           <Route path="/dashboard" element={<DashboardPage />} />
//           <Route path="/create" element={<CreatePage />} />
//           <Route path="/delete" element={<DeletePage />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
