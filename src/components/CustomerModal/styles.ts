import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { styled } from '../../styles'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  variants: {
    type: {
      add: {
        height: 500,
      },
      edit: {
        height: 570,
      },
    },
  },

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  backgroundColor: '$bg-beige',
  width: 400,
  borderRadius: 8,
  padding: '2rem',
  paddingTop: 60,

  display: 'flex',
  flexDirection: 'column',

  span: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '$small',
    marginTop: '0.5rem',
    color: '$light-black',
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  border: 0,
  cursor: 'pointer',
  display: 'flex',
  backgroundColor: 'transparent',
  zIndex: 9,
  color: '$white',
})

export const DialogTitle = styled(Dialog.Title, {
  position: 'absolute',
  padding: '1.5rem',
  left: 0,
  top: 0,
  height: 60,
  width: '100%',
  color: '$white',
  backgroundColor: '$light-green',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,

  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

export const NewCustomerForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '1rem',
  gap: '1rem',

  input: {
    width: 300,
    height: 50,
    padding: '0.5rem 1rem',
    border: 0,
    outline: 0,
    borderRadius: 6,

    '&::placeholder': {
      fontSize: '$small',
    },
  },

  '.errorMessage': {
    position: 'absolute',
    fontSize: '$extraSmall',
    color: 'red',
  },

  '> button': {
    marginTop: '1.5rem',
    height: 50,
    padding: '0 5rem',
    border: 0,
    color: '$white',
    backgroundColor: '$light-green',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: '$md',
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: '$dark-green',
    },
  },
})

export const CustomerGenderContainer = styled(RadioGroup.Root, {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
})

export const CustomerGenderOption = styled(RadioGroup.Item, {
  width: 100,
  height: 40,
  cursor: 'pointer',
  backgroundColor: '$white',
  border: '1px solid $border-gray',
  borderRadius: 8,

  '&[data-state="unchecked"]:hover': {
    backgroundColor: '$border-gray',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$light-green',
    color: '$white',
  },
})

export const StatusSection = styled(RadioGroup.Root, {
  display: 'flex',
  gap: '0.5rem',

  '.statusRadioGroupItem': {
    height: 30,
    padding: '0 1rem',
    border: '1px solid $border-gray',
    borderRadius: 6,
    backgroundColor: '$white',
    fontWeight: 'bold',
    fontSize: '$extraSmall',
    color: 'black',
    opacity: 0.6,
    cursor: 'pointer',
  },

  '.active[data-state="checked"]': {
    backgroundColor: '$active',
    color: '$white',
    opacity: 1,
  },

  '.inactive[data-state="checked"]': {
    backgroundColor: '$inactive',
    color: '$white',
    opacity: 1,
  },
})
