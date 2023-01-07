import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const Header = styled('header', {
  height: 70,
  padding: '0.5rem',
  paddingLeft: '4rem',
  backgroundColor: '$light-green',
  display: 'flex',
  alignItems: 'center',
})
