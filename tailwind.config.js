import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Comfortaa', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'black': '#0B132B',
                'dark-blue': '#1c2541',
                'light-blue': '#3A506B',
                'blue': "#3E7A94",
                'teal': '#72dbbc',
                'green': '#5BC0B3',
                'white': '#FFFFFF',
                'dark-black': '#222222',
                'red': '#ee4266',
                'light-red': "#fa6987",
                'yellow': '#ffff82',
                'pink': '#d1b1c8',
                'gray': '#FAFAFA',
                'spotify-green': '#1DB954',
            }
        },
    },

    plugins: [forms],
};
