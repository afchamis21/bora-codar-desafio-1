import { styled } from '../../../../styles'

export const CardContainer = styled('div', {
  padding: '1.8125rem',
  background: '$card-color',
  borderRadius: '0.5625rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.75rem',
})

export const CardHeader = styled('div', {
  display: 'flex',
  gap: '2.375rem',

  img: {
    width: '5.25rem',
  },
})

export const SongInformation = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0.6rem',
  color: '$text-color',
  p: {
    opacity: 0.7,
  },
})

export const SongController = styled('div', {
  display: 'flex',
  justifyContent: 'space-evenly',

  button: {
    lineHeight: 0,
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    color: '$text-color',
  },

  '&:has(button:hover) button:not(:hover)': {
    filter: 'opacity(0.6)',
    transition: 'all 0.2s',
  },
})

export const TimeInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  'div:last-child': {
    display: 'flex',
    justifyContent: 'space-between',
    span: {
      opacity: 0.7,
      fontSize: '0.875rem',
      color: '$text-color',
    },
  },
})

export const TimeTrack = styled('div', {
  height: '6px',
  position: 'relative',

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: '0',
    width: '100%',
    height: '6px',
    opacity: 0.3,
    background: '$track-color',
    borderRadius: '999px',
  },

  '&:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: '0',
    width: '$$timeCompleted',
    height: '6px',
    opacity: 0.8,
    background: '$track-color',
    borderRadius: '999px',
  },
})
