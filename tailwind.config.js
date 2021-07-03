module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {

        fontSize: {
            'h1': '36px',
            'h2': '26px',
            'p': '18px',
            'pd': '20px',
            'h3':'22px'
        },

        extend: {
            colors: {
                button: {
                    red: '#F22539',
                    redDark: '#C00E20',
                    gray: '#BFBFBF'
                },
                background: {
                    lightgray: '#E5E5E5',
                    white: '#FFFFFF',
                    gray:'#F5F5F5'
                },
                fontColor: {
                    gray: '#5E5E5E',
                    darkgray: '#353535',
                    ligthgray: '#BFBFBF'
                }

            }
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
}