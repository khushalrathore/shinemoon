export const videoLibraryList = [
    {
        video: "https://www.youtube.com/watch?v=UCAcL9FM9s4",
    }, {
        video: "https://www.youtube.com/watch?v=tl5kdIyqGc0",
    },
];

export const colors = [
    //-------------------- v1
    { light: `rgb(106, 160, 26)`, dark: `rgb(0, 60, 0)` },
    { light: `rgb(255, 87, 34)`, dark: `rgb(139, 0, 0)` },
    { light: `rgb(33, 150, 243)`, dark: `rgb(0, 0, 139)` },
    { light: `rgb(255, 193, 7)`, dark: `rgb(139, 69, 19)` },
    { light: `rgb(156, 39, 176)`, dark: `rgb(75, 0, 130)` },
    { light: `rgb(0, 188, 212)`, dark: `rgb(0, 100, 100)` },
    { light: `rgb(76, 175, 80)`, dark: `rgb(34, 139, 34)` },
    { light: `rgb(255, 235, 59)`, dark: `rgb(128, 128, 0)` },
    { light: `rgb(233, 30, 99)`, dark: `rgb(139, 0, 139)` },
    { light: `rgb(121, 85, 72)`, dark: `rgb(80, 50, 30)` },
];

export const randomPair = colors[ Math.floor( Math.random() * colors.length ) ];

export function getRandomColorPair () {
    const randomIndex = Math.floor( Math.random() * colors.length );
    return colors[ randomIndex ];
};

export const colorPair = getRandomColorPair();

export function formatViewCount ( views ) {
    if ( views >= 1_000_000_000 ) {
        return ( views / 1_000_000_000 ).toFixed( 1 ) + 'B';
    } else if ( views >= 1_000_000 ) {
        return ( views / 1_000_000 ).toFixed( 1 ) + 'M';
    } else if ( views >= 1_000 ) {
        return ( views / 1_000 ).toFixed( 0 ) + 'K';
    } else {
        return views.toString();
    }
};