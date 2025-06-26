import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Privacy from "@/pages/privacy";
import Contact from "@/pages/contact";
import Terms from "@/pages/terms";
import UserGuide from "@/pages/user-guide";
import HardwareRequirements from "@/pages/hardware-requirements";
import IntegrationHelp from "@/pages/integration-help";
import SecurityInfo from "@/pages/security-info";
import ComingSoon from "@/pages/coming-soon";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy" component={Privacy} />
     <Route path="/contact" component={Contact} />
<Route path="/terms" component={Terms} />
<Route path="/user-guide" component={UserGuide} />
<Route path="/hardware-requirements" component={HardwareRequirements} />
<Route path="/integration-help" component={IntegrationHelp} />
<Route path="/security-info" component={SecurityInfo} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;