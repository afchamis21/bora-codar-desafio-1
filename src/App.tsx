import { useState } from 'react'
import { Container, SmallerCardsContainer } from './AppStyles'
import { MusicCard } from './components/MusicCard'
import { ThemeSwitch } from './components/ThemeSwitch'
import { lightTheme } from './styles'
import { globalStyles } from './styles/global'

globalStyles()

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  function toggleTheme() {
    setIsDarkTheme((state) => !state)
  }
  return (
    <Container className={isDarkTheme ? '' : lightTheme}>
      <ThemeSwitch toggleFunction={toggleTheme} />
      <MusicCard size="lg" />
      <SmallerCardsContainer>
        <MusicCard size="md" />
        <MusicCard size="sm" />
      </SmallerCardsContainer>
    </Container>
  )
}
