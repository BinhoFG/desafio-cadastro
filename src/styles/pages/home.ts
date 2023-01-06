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
    backgroundColor: '#1AA59E',
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

export const SearchActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: 720,
  marginTop: '1rem',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    padding: '0.5rem',
    borderRadius: 6,
    backgroundColor: '$white',
    border: '1px solid $border-gray',
    fontSize: '0.875rem',

    '.options': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',

      button: {
        border: 0,
        backgroundColor: '$light-green',
        color: '$white',
        padding: '0.25rem',
        borderRadius: 4,
        fontSize: '0.7rem',
        fontWeight: 'bold',
        cursor: 'pointer',

        '&:hover': {
          backgroundColor: '$dark-green',
        },
      },
    },
  },
})

export const CustomerTable = styled('table', {
  width: 1000,
  display: 'flex',
  flexDirection: 'column',

  borderTop: '2px solid $dark-green',
  marginTop: '1rem',

  'thead tr': {
    marginTop: '1rem',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottom: '1px solid $border-gray',
  },

  tbody: {
    height: 320,
    overflowY: 'scroll',
    overflowX: 'hidden',

    '&::-webkit-scrollbar': {
      width: 10,
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: '$border-gray',
    },

    '&::-webkit-scrollbar-thumb': {
      boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    },
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
})

export const Pagination = styled('footer', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  backgroundColor: '$bg-beige',
  width: '100%',
  padding: '1.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',

  span: {
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '$dark-green',
    color: '$white',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$light-green',
    },
  },
})
