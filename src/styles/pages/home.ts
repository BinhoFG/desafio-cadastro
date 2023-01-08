import { styled } from '..'

export const HomeContainer = styled('main', {
  maxWidth: '100%',
  margin: '0 auto',
})

export const SearchSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '3rem',
})

export const SearchBar = styled('div', {
  width: 800,
  display: 'flex',
  gap: '1rem',

  form: {
    display: 'flex',
    flex: 1,
  },

  input: {
    flex: 1,
    height: 50,
    padding: '0.25rem 0',
    paddingLeft: '1rem',
    border: '1px solid gray',
    backgroundColor: '$white',
    borderRadius: 8,
    outline: 0,

    '&:focus': {
      border: '1px solid $dark-green',
    },
  },

  button: {
    height: 50,
    padding: '0 2rem',
    border: 0,
    borderRadius: 8,
    backgroundColor: '$light-green',
    color: '$white',
    cursor: 'pointer',
    fontSize: '$md',
    fontWeight: 'bold',

    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    '&:hover': {
      backgroundColor: '$dark-green',
    },
  },
})

export const CustomerTable = styled('table', {
  width: 1000,
  display: 'flex',
  flexDirection: 'column',

  marginBottom: '3rem',
  borderTop: '2px solid $dark-green',
  marginTop: '1rem',

  '.noAddress': {
    color: '$inactive',
  },

  '.inactive': {
    backgroundColor: '$light-inactive',
  },

  'thead tr': {
    marginTop: '1rem',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottom: '1px solid $border-gray',
  },

  tbody: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  tr: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: '0.5rem 1rem',
    width: 1000,
    maxHeight: 48,
    overflow: 'hidden',
    backgroundColor: '$white',
    color: '$light-black',

    '&:not(thead tr):not(.inactive):hover': {
      // cursor: 'pointer',
      backgroundColor: '$light-gray',
    },

    'td, th': {
      textAlign: 'center',
      width: 150,
      maxHeight: 38,
      overflow: 'hidden',
    },

    'td:nth-child(5), th:nth-child(5)': {
      width: 200,
    },

    'th:nth-child(7)': {
      width: 50,
    },

    'td:nth-child(7)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      cursor: 'pointer',

      svg: {
        width: 32,
        height: 32,
        padding: '0.25rem',
        color: '$dark-green',

        '&:hover': {
          color: '$light-green',
        },
      },
    },
  },

  '.noCustomers': {
    color: '$light-black',
    fontWeight: 'bold',
    fontSize: '$lg',
  },
})
