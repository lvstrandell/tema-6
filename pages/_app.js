import GlobalStyle from '../components/GlobalStyle';
import NavBar from '../components/NavBar';
import { AuthProvider } from '../config/auth';
import { Cart } from '../config/shoppingcart';


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <NavBar />
      <Cart>
        <Component {...pageProps} />
      </Cart>
    </AuthProvider>
  )
}

export default MyApp
