import ScrollToTop from './components/ScrollToTop'
import Provider from './context/Provider'
import AppRoutes from './routes'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;

    a{
      text-decoration: none;
    }
  }
`


function App() {


  return (
    <Provider>
      <GlobalStyle />
      <AppRoutes />
      <ScrollToTop />
    </Provider>

  )
}

export default App