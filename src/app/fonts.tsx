import {
    IBM_Plex_Mono,
    Montserrat
} from 'next/font/google';

export const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    style: 'normal',
    weight: '400',
    display: 'swap'
});

export const montserrat = Montserrat({
    subsets: ['latin'],
    style: 'normal',
    display: 'swap'
});