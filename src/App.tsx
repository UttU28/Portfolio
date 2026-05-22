import { Switch, Route } from "wouter";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <SmoothScrollProvider>
      <TooltipProvider delayDuration={150}>
        <Router />
        <Toaster />
      </TooltipProvider>
    </SmoothScrollProvider>
  );
}

export default App;
