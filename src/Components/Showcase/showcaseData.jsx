export function shuffleArray ( array ) {
    let shuffledArray = array.slice();
    for ( let i = shuffledArray.length - 1; i > 0; i-- ) {
        const j = Math.floor( Math.random() * ( i + 1 ) );
        [ shuffledArray[ i ], shuffledArray[ j ] ] = [ shuffledArray[ j ], shuffledArray[ i ] ];
    }
    return shuffledArray;
};

export const shinemoon_stats = [
    {
        type: "views",
        num: "12k",
    },
    {
        type: "clients",
        num: "800",
    },
    {
        type: "editing hours",
        num: "40k",
    },
];

export const showcase_sideBar = [
    {
        image: "https://assets.teenvogue.com/photos/56f5a184060ad49149eed5a8/16:9/w_1280,c_limit/LegoSocial.png",
        name: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, voluptas!",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, voluptas!",
        link: "#"
    },
    {
        image: "https://64.media.tumblr.com/b14d8416150197afcba442006cc59556/1b482afb05ef6dd7-0b/s1280x1920/537b719f9a325bd6ad1ee68cffee10497eef5e59.jpg",
        name: "orem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, voluptas!",
        info: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, voluptas!",
        link: "#"

    },
    {
        image: "https://avatarfiles.alphacoders.com/302/302484.jpeg",
        name: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, voluptas!",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, voluptas!",
        link: "#"

    }
];



