
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import DetailedCFP from "@/components/DetailedCFP";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  const baseFromVite = import.meta.env.BASE_URL ?? "/";
  const basename = baseFromVite === "/" ? undefined : baseFromVite;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter basename={basename}>
          <ScrollToTop />

          <Routes>
            {/* Homepage */}
            <Route path="/" element={<Index />} />

            {/* Dedicated Detailed CFP page */}
            <Route path="/detailed-cfp" element={<DetailedCFP />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
