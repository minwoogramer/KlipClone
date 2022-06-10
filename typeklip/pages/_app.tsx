
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import{ QueryClient, QueryClientProvider} from"react-query"
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient();
  return<>
 
  <Layout>
  <QueryClientProvider client={queryClient}>
   <Component {...pageProps} />
   </QueryClientProvider>
   </Layout>

   </>
}

export default MyApp
