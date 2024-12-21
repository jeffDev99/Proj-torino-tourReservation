"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
export default function TanstackQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient} >
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
