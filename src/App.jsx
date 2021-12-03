import CssBaseline from '@material-ui/core/CssBaseline';
import './styles/global.jsx'
import RepositoryList from './components/RepositoryList'

export default function App() {

  return (
    <>
      <CssBaseline />

      <RepositoryList/>
    </>
  )
}