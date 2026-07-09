import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CaseStudy from "@/pages/CaseStudy";
import SmartMurojaahCaseStudy from "@/pages/SmartMurojaahCaseStudy";
import DipayCaseStudy from "@/pages/DipayCaseStudy";
import EcommerceCheckoutCaseStudy from "@/pages/EcommerceCheckoutCaseStudy";
import SaasAnalyticsCaseStudy from "@/pages/SaasAnalyticsCaseStudy";
import SurplusMerchantMapCaseStudy from "@/pages/SurplusMerchantMapCaseStudy";
import SurplusEcofriendlyCaseStudy from "@/pages/SurplusEcofriendlyCaseStudy";
import BlogPost from "@/pages/BlogPost";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "";
  }, [location]);
  return null;
}

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
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/case-study/smart-murojaah" component={SmartMurojaahCaseStudy} />
        <Route path="/case-study/dipay-settlement" component={DipayCaseStudy} />
        <Route path="/case-study/ecommerce-checkout" component={EcommerceCheckoutCaseStudy} />
        <Route path="/case-study/saas-analytics-dashboard" component={SaasAnalyticsCaseStudy} />
        <Route path="/case-study/surplus-merchant-map" component={SurplusMerchantMapCaseStudy} />
        <Route path="/case-study/surplus-ecofriendly-cashback" component={SurplusEcofriendlyCaseStudy} />
        <Route path="/case-study/:slug" component={CaseStudy} />
        <Route component={NotFound} />
      </Switch>
    </>
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
