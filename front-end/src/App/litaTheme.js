import React from 'react';
import createTheme from '@mui/material/styles/createTheme';
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function ThemePaletteComponentsToggle(props) {
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
    let litaThemePalette = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'light'
                        ? {
                            // palette values for light mode
                            common: {
                                black: '#000',
                                white: '#fff',
                            },
                            primary: {
                                main: '#5D10B5',
                                light: '#EDEBF0',
                                dark: '#1565c0',
                                contrastText: 'black',
                            },
                            secondary: {
                                main: '#28BDD4',
                                light: '#ba68c8',
                                dark: '#7b1fa2',
                                contrastText: '#fff',
                            },
                            border: {
                                main: '#000'
                            },
                            error: {
                                main: '#d32f2f',
                                light: '#ef5350',
                                dark: '#c62828',
                                contrastText: '#fff',
                            },
                            warning: {
                                main: '#ed6c02',
                                light: '#ff9800',
                                dark: '#e65100',
                                contrastText: '#fff',
                            },
                            info: {
                                main: '#0288d1',
                                light: '#03a9f4',
                                dark: '#01579b',
                                contrastText: '#fff',
                            },
                            success: {
                                main: '#2e7d32',
                                light: '#4caf50',
                                dark: '#1b5e20',
                                contrastText: '#fff',
                            },
                            grey: {
                                50: '#fafafa',
                                100: '#f5f5f5',
                                200: '#eeeeee',
                                300: '#e0e0e0',
                                400: '#bdbdbd',
                                500: '#9e9e9e',
                                600: '#757575',
                                700: '#616161',
                                800: '#424242',
                                900: '#212121',
                                A100: '#f5f5f5',
                                A200: '#eeeeee',
                                A400: '#bdbdbd',
                                A700: '#616161',
                            },
                            text: {
                                primary: '#fff',
                                secondary: 'rgba(255, 255, 255, 0.7)',
                                disabled: 'rgba(255, 255, 255, 0.5)',
                                icon: 'rgba(255, 255, 255, 0.5)',
                            },
                            divider: '#BDA33E',
                            background: {
                                paper: '#5D10B5', // violeta Lita
                                default: '#ffeda1',
                            },
                            action: {
                                active: 'rgba(0, 0, 0, 0.54)',
                                hover: 'rgba(0, 0, 0, 0.04)',
                                hoverOpacity: 0.04,
                                selected: 'rgba(0, 0, 0, 0.08)',
                                selectedOpacity: 0.08,
                                disabled: 'rgba(0, 0, 0, 0.26)',
                                disabledBackground: 'rgba(0, 0, 0, 0.12)',
                                disabledOpacity: 0.38,
                                focus: 'rgba(0, 0, 0, 0.12)',
                                focusOpacity: 0.12,
                                activatedOpacity: 0.12,
                            },
                        }
                        : {
                            // palette values for dark mode
                            common: {
                                black: '#000',
                                white: '#fff',
                            },
                            primary: {
                                main: '#28BDD4',
                                light: '#4a494d',
                                dark: '#42a5f5',
                                contrastText: 'rgba(255, 255, 255, 0.87)',
                            },
                            secondary: {
                                main: '#5D10B5',
                                light: '#f3e5f5',
                                dark: '#ab47bc',
                                contrastText: 'rgba(255, 255, 255, 0.87)',
                            },
                            border: {
                                main: '#fff'
                            },
                            error: {
                                main: '#f44336',
                                light: '#e57373',
                                dark: '#d32f2f',
                                contrastText: '#fff',
                            },
                            warning: {
                                main: '#ffa726',
                                light: '#ffb74d',
                                dark: '#f57c00',
                                contrastText: 'rgba(0, 0, 0, 0.87)',
                            },
                            info: {
                                main: '#29b6f6',
                                light: '#4fc3f7',
                                dark: '#0288d1',
                                contrastText: 'rgba(0, 0, 0, 0.87)',
                            },
                            success: {
                                main: '#66bb6a',
                                light: '#81c784',
                                dark: '#388e3c',
                                contrastText: 'rgba(0, 0, 0, 0.87)',
                            },
                            grey: {
                                50: '#fafafa',
                                100: '#f5f5f5',
                                200: '#eeeeee',
                                300: '#e0e0e0',
                                400: '#bdbdbd',
                                500: '#9e9e9e',
                                600: '#757575',
                                700: '#616161',
                                800: '#424242',
                                900: '#212121',
                                A100: '#f5f5f5',
                                A200: '#eeeeee',
                                A400: '#bdbdbd',
                                A700: '#616161',
                            },
                            text: {
                                primary: '#fff',
                                secondary: 'rgba(255, 255, 255, 0.7)',
                                disabled: 'rgba(255, 255, 255, 0.5)',
                                icon: 'rgba(255, 255, 255, 0.5)',
                            },
                            divider: '#ffe687',
                            background: {
                                paper: '#282828',
                                default: '#121212',
                            },
                            action: {
                                active: '#fff',
                                hover: 'rgba(255, 255, 255, 0.08)',
                                hoverOpacity: 0.08,
                                selected: 'rgba(255, 255, 255, 0.16)',
                                selectedOpacity: 0.16,
                                disabled: 'rgba(255, 255, 255, 0.3)',
                                disabledBackground: 'rgba(255, 255, 255, 0.12)',
                                disabledOpacity: 0.38,
                                focus: 'rgba(255, 255, 255, 0.12)',
                                focusOpacity: 0.12,
                                activatedOpacity: 0.24,
                            },
                        }),
                },
            }),
        [mode],
    );

    let litaThemeComponents = createTheme(litaThemePalette,
        {
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
                    textShadow: `8px 4px 0px ${litaThemePalette.palette.secondary.main}`,
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
                                borderColor: litaThemePalette.palette.border.main,
                                boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
                                borderRadius: '20px',
                            },
                        },
                        {
                            props: { variant: 'imgListPaper' },
                            style: {
                                padding: '.4rem',
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
                                color: litaThemePalette.palette.primary.contrastText,
                                background: litaThemePalette.palette.primary.light,
                                '&:hover': {
                                    color: litaThemePalette.palette.secondary.contrastText,
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
                            background: litaThemePalette.palette.secondary.main,
                        },
                    },
                },
            }
        }
    )

    litaThemeComponents = responsiveFontSizes(litaThemeComponents);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={litaThemeComponents}>
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export { ColorModeContext };

// palette values for light mode
// common: {
//     black: '#000',
//     white: '#fff',
// },
// primary: {
//     main: '#5D10B5',
//     light: '#42a5f5',
//     dark: '#1565c0',
//     contrastText: '#fff',
// },
// secondary: {
//     main: '#28BDD4',
//     light: '#ba68c8',
//     dark: '#7b1fa2',
//     contrastText: '#fff',
// },
// error: {
//     main: '#d32f2f',
//     light: '#ef5350',
//     dark: '#c62828',
//     contrastText: '#fff',
// },
// warning: {
//     main: '#ed6c02',
//     light: '#ff9800',
//     dark: '#e65100',
//     contrastText: '#fff',
// },
// info: {
//     main: '#0288d1',
//     light: '#03a9f4',
//     dark: '#01579b',
//     contrastText: '#fff',
// },
// success: {
//     main: '#2e7d32',
//     light: '#4caf50',
//     dark: '#1b5e20',
//     contrastText: '#fff',
// },
// grey: {
//     50: '#fafafa',
//     100: '#f5f5f5',
//     200: '#eeeeee',
//     300: '#e0e0e0',
//     400: '#bdbdbd',
//     500: '#9e9e9e',
//     600: '#757575',
//     700: '#616161',
//     800: '#424242',
//     900: '#212121',
//     A100: '#f5f5f5',
//     A200: '#eeeeee',
//     A400: '#bdbdbd',
//     A700: '#616161',
// },
// text: {
//     primary: '#fff',
//     secondary: 'rgba(255, 255, 255, 0.7)',
//     disabled: 'rgba(255, 255, 255, 0.5)',
//     icon: 'rgba(255, 255, 255, 0.5)',
// },
// divider: 'rgba(0, 0, 0, 0.12)',
// background: {
//     paper: '#5D10B5',
//     default: '#ffeda1',
// },
// action: {
//     active: 'rgba(0, 0, 0, 0.54)',
//     hover: 'rgba(0, 0, 0, 0.04)',
//     hoverOpacity: 0.04,
//     selected: 'rgba(0, 0, 0, 0.08)',
//     selectedOpacity: 0.08,
//     disabled: 'rgba(0, 0, 0, 0.26)',
//     disabledBackground: 'rgba(0, 0, 0, 0.12)',
//     disabledOpacity: 0.38,
//     focus: 'rgba(0, 0, 0, 0.12)',
//     focusOpacity: 0.12,
//     activatedOpacity: 0.12,
// },
// }
// : {
// // palette values for dark mode
// common: {
//     black: '#000',
//     white: '#fff',
// },
// primary: {
//     main: '#90caf9',
//     light: '#e3f2fd',
//     dark: '#42a5f5',
//     contrastText: 'rgba(0, 0, 0, 0.87)',
// },
// secondary: {
//     main: '#ce93d8',
//     light: '#f3e5f5',
//     dark: '#ab47bc',
//     contrastText: 'rgba(0, 0, 0, 0.87)',
// },
// error: {
//     main: '#f44336',
//     light: '#e57373',
//     dark: '#d32f2f',
//     contrastText: '#fff',
// },
// warning: {
//     main: '#ffa726',
//     light: '#ffb74d',
//     dark: '#f57c00',
//     contrastText: 'rgba(0, 0, 0, 0.87)',
// },
// info: {
//     main: '#29b6f6',
//     light: '#4fc3f7',
//     dark: '#0288d1',
//     contrastText: 'rgba(0, 0, 0, 0.87)',
// },
// success: {
//     main: '#66bb6a',
//     light: '#81c784',
//     dark: '#388e3c',
//     contrastText: 'rgba(0, 0, 0, 0.87)',
// },
// grey: {
//     50: '#fafafa',
//     100: '#f5f5f5',
//     200: '#eeeeee',
//     300: '#e0e0e0',
//     400: '#bdbdbd',
//     500: '#9e9e9e',
//     600: '#757575',
//     700: '#616161',
//     800: '#424242',
//     900: '#212121',
//     A100: '#f5f5f5',
//     A200: '#eeeeee',
//     A400: '#bdbdbd',
//     A700: '#616161',
// },
// text: {
//     primary: '#fff',
//     secondary: 'rgba(255, 255, 255, 0.7)',
//     disabled: 'rgba(255, 255, 255, 0.5)',
//     icon: 'rgba(255, 255, 255, 0.5)',
// },
// divider: 'rgba(255, 255, 255, 0.12)',
// background: {
//     paper: '#121212',
//     default: '#121212',

// },
// action: {
//     active: '#fff',
//     hover: 'rgba(255, 255, 255, 0.08)',
//     hoverOpacity: 0.08,
//     selected: 'rgba(255, 255, 255, 0.16)',
//     selectedOpacity: 0.16,
//     disabled: 'rgba(255, 255, 255, 0.3)',
//     disabledBackground: 'rgba(255, 255, 255, 0.12)',
//     disabledOpacity: 0.38,
//     focus: 'rgba(255, 255, 255, 0.12)',
//     focusOpacity: 0.12,
//     activatedOpacity: 0.24,
// },