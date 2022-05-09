import React from 'react';
import createTheme from '@mui/material/styles/createTheme';
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Lita from '../assets/imgs/Lita.png'
import LitaSVG from '../assets/imgs/background-comic-effect.svg'

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function ToggleColorMode(props) {
    // Color Mode (light/dark)
    const [mode, setMode] = React.useState('light');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    )
    let litaTheme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'light'
                        ? {
                            // palette values for light mode
                            primary: {
                                main: '#5D10B5',
                            },
                            secondary: {
                                main: '#28BDD4',
                            },
                            background: {
                                default: '#ffeda1',
                                paper: '#5D10B5',
                            },
                            error: {
                                main: '#f44336',
                            },
                            action: {
                                active: '#001E3C',
                            },
                            text: {
                                primary: 'rgba(255,255,255,0.87)',
                                secondary: 'rgba(255,255,255,0.54)',
                                disabled: 'rgba(255,255,255,0.38)',
                                hint: 'rgba(255,255,255,0.38)',
                            },
                        }
                        : {
                            // palette values for dark mode
                            primary: {
                                main: '#06080c',
                            },
                            secondary: {
                                main: '#28BDD4',
                            },
                            background: {
                                default: '#06080c',
                                paper: '#3a3a3a',
                            },
                            error: {
                                main: '#f44336',
                            },
                            action: {
                                active: '#001E3C',
                            },
                            text: {
                                primary: 'rgba(255,255,255,0.87)',
                                secondary: 'rgba(255,255,255,0.54)',
                                disabled: 'rgba(255,255,255,0.38)',
                                hint: 'rgba(255,255,255,0.38)',
                            },
                        }),
                },
                typography: {
                    allVariants: {
                        fontFamily: [
                            '"JetBrains Mono"', '"Segoe UI"', '"Faster One"', 'Roboto', 'Oxygen',
                            'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"',
                            'sans-serif'
                        ].join(","),
                    },
                    h2: {
                        fontFamily: 'Faster One',
                        color: '#fff',
                        textShadow: '8px 4px 0px #28BDD4',
                        textAlign: 'center'
                    },
                },
                components: {
                    MuiPaper: {
                        variants: [
                            {
                                props: { variant: 'borderBlackElevatedPaper' },
                                style: {
                                    border: '4px solid',
                                    borderColor: 'black',
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                    borderRadius: '20px',
                                },
                            },
                            {
                                props: { variant: 'imgListPaper' },
                                style: {
                                    padding: '5px',
                                    width: '8rem',
                                    height: '8rem',
                                    background: 'white',
                                    borderRadius: '10px',
                                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
                                },
                            },
                        ]
                    },
                    MuiListItem: {
                        variants: [
                            {
                                props: { variant: 'listItemLitaSearch' },
                                style: {
                                    color: '#222222',
                                    background: '#EDEBF0',
                                    borderBottom: '2px solid #BDA33E',
                                    '&:hover': {
                                        color: 'white',
                                    },
                                    '& > img': { flexShrink: 0 },
                                }
                            }
                        ]
                    },
                    MuiOutlinedInput: {
                        styleOverrides: {
                            notchedOutline: {
                                border: 'none'
                            }
                        }
                    },
                    MuiAutocomplete: {
                        styleOverrides: {
                            root: {
                                '.MuiAutocomplete-clearIndicator, .MuiAutocomplete-popupIndicator': {
                                    color: 'white'
                                },
                            },
                            listbox: {
                                background: '#28BDD4',
                                color: 'white',
                            },
                            loading: {
                                background: '#EDEBF0',
                                color: 'black'
                            }
                        },
                    },
                    MuiDivider: {
                        variants: [
                            {
                                props: { variant: 'litaDivider' },
                                style: {
                                    borderColor: '#BDA33E'
                                }
                            }
                        ]
                    },
                }
            }),
        [mode],
    );

    litaTheme = responsiveFontSizes(litaTheme);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={litaTheme}>
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export { ColorModeContext };
