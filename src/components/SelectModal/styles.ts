import * as Select from '@radix-ui/react-select'
import { styled } from '../../styles'

export const Content = styled(Select.Content, {
  display: 'flex',
  alignItems: 'center',
  marginTop: '1.75rem',
  backgroundColor: '$light-green',
  textAlign: 'center',
  borderRadius: 6,
  padding: '0.25rem',
})

export const Viewport = styled(Select.Viewport, {})

export const Option = styled(Select.Item, {
  padding: '0 0.25rem',
  cursor: 'pointer',
  fontSize: '$small',
  outline: 0,
  color: '$white',

  '&:hover': {
    color: '$border-gray',
  },

  '& + &': {
    borderTop: '1px solid $light-black',
  },
})
