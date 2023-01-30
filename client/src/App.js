import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import CseDs from "scenes/cse_ds";
import It from "scenes/it";
import Cse from "scenes/cse";
import Aiml from "scenes/aiml";
import Iot from "scenes/iot";
import Mech from "scenes/mech";
import Civil from "scenes/civil";
// import Products from "scenes/products";
// import Customers from "scenes/customers";
// import Transactions from "scenes/transactions";
// import Geography from "scenes/geography";
// import Overview from "scenes/overview";
// import Daily from "scenes/daily";
// import Monthly from "scenes/monthly";
// import Breakdown from "scenes/breakdown";
// import Admin from "scenes/admin";
// import Performance from "scenes/performance";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cse_ds" element={<CseDs />} />
              <Route path="/it" element={<It />} />
              <Route path="/cse" element={<Cse />} />
              <Route path="/cse_aiml" element={<Aiml />} />
              <Route path="/cse_iot" element={<Iot />} />
              <Route path="/civil" element={<Civil />} />
              <Route path="/mech" element={<Mech />} />
              {/* <Route path="/customers" element={<Customers />} /> */}
              {/* <Route path="/transactions" element={<Transactions />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/overview" element={<Overview />} /> */}
              {/* <Route path="/daily" element={<Daily />} /> */}
              {/* <Route path="/monthly" element={<Monthly />} /> */}
              {/* <Route path="/breakdown" element={<Breakdown />} /> */}
              {/* <Route path="/admin" element={<Admin />} /> */}
              {/* <Route path="/performance" element={<Performance />} /> */}
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;