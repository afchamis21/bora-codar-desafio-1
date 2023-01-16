import { styled } from './styles'

export const Container = styled('div', {
  display: 'flex',
  background: '$background-color',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  gap: '2rem',
})

export const SmallerCardsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})
