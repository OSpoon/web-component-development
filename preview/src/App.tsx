import './App.css'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { Dashboard } from '@/components/shared/dashboard'

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Dashboard></Dashboard>
      </ThemeProvider>
    </>
  )
}

export default App
