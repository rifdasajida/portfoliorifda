import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CaseStudy from "@/pages/CaseStudy";
import SmartMurojaahCaseStudy from "@/pages/SmartMurojaahCaseStudy";
import EcommerceCheckoutCaseStudy from "@/pages/EcommerceCheckoutCaseStudy";
import SaasAnalyticsCaseStudy from "@/pages/SaasAnalyticsCaseStudy";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-study/smart-murojaah" component={SmartMurojaahCaseStudy} />
      <Route path="/case-study/ecommerce-checkout" component={EcommerceCheckoutCaseStudy} />
      <Route path="/case-study/saas-analytics-dashboard" component={SaasAnalyticsCaseStudy} />
      <Route path="/case-study/:slug" component={CaseStudy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
