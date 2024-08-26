export function shuffleArray ( array ) {
    let shuffledArray = array.slice();
    for ( let i = shuffledArray.length - 1; i > 0; i-- ) {
        const j = Math.floor( Math.random() * ( i + 1 ) );
        [ shuffledArray[ i ], shuffledArray[ j ] ] = [ shuffledArray[ j ], shuffledArray[ i ] ];
    }
    return shuffledArray;
}

export const fb = "fb.com";
export const ig = "ig.com";
export const yt = "yt.com";
export const tw = "tw.com";

export const dummyVideoData = [
    {
        title: 'Sample Video 1',
        publishedDate: '2024-01-01T00:00:00Z',
        viewCount: '1M',
        thumbnailUrl: 'https://via.placeholder.com/150'
    },
    {
        title: 'Sample Video 2',
        publishedDate: '2024-01-02T00:00:00Z',
        viewCount: '500K',
        thumbnailUrl: 'https://via.placeholder.com/150'
    },
    {
        title: 'Sample Video 3',
        publishedDate: '2024-01-03T00:00:00Z',
        viewCount: '250K',
        thumbnailUrl: 'https://via.placeholder.com/150'
    }
];

export const listItems = [
    {
        title: "Home",
        link: "/",

    }, {
        title: "Portfolio",
        link: "/",

    },
    {
        title: "Courses",
        link: "/courses",

    },
    {
        title: "Team",
        link: "/team",

    }
]
export const formTopicsList = [
    "Courses",
    "Projects",
    "Socials",
    "Get In Touch"
]
export const reviewsList = [
    {
        name: "John Doe",
        handle: "facebook",
        image: "https://cdn.drawception.com/drawings/691215/4mnjrBALsQ.png",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quia mollitia eum nemo quo quae unde quas",
        link: "yuyu",
    }, {
        name: "Jane Doe",
        handle: "instagram",
        image: "https://preview.redd.it/best-boy-and-best-girl-of-season-7-my-pfp-says-it-v0-6x9yfkhtlswa1.jpg?width=640&crop=smart&auto=webp&s=14c2b3e0dcb3a36e9744a8a14793ff0a9294eacf",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quia mollitia eum nemo quo quae unde quas",
        link: "ouou",
    },
    // Add more reviews here if needed
];
export const exploreTags = [
    {
        text: "facebook",
        link: "https://www.facebook.com/shine.moon.37625843/",
        color: "black"
    },
    {
        text: "youtube",
        link: "https://www.youtube.com/channel/UCSWjcz32WGRPjEteBcE0tvA",
        color: "black"
    },
    {
        text: "instagram",
        link: "https://www.instagram.com/ig_shinemoon/",
        color: "black"
    },
    {
        text: "twitter",
        link: "https://x.com/i/flow/login?redirect_after_login=%2Fshinemoon221%2F",
        color: "black"
    },
    {
        text: "View All",
        link: "#",
        color: "black"
    }
]
export const top_things = [
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
export const showcase_side = [
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
export const videoLibraryList = [
    {
        video: "https://www.youtube.com/watch?v=tl5kdIyqGc0",
    },
    {
        video: "https://www.youtube.com/watch?v=UCAcL9FM9s4",
        thumbnail: "https://i.ytimg.com/vi/UCAcL9FM9s4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCUOU51bEBQcgNI7Ye0sLZNS3tWsA"

    }, {
        video: "https://www.youtube.com/watch?v=tl5kdIyqGc0",
    },
    {
        video: "https://www.youtube.com/watch?v=UCAcL9FM9s4",
        thumbnail: "https://i.ytimg.com/vi/UCAcL9FM9s4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCUOU51bEBQcgNI7Ye0sLZNS3tWsA"

    }, {
        video: "https://www.youtube.com/watch?v=tl5kdIyqGc0",
    },
    {
        video: "https://www.youtube.com/watch?v=UCAcL9FM9s4",
        thumbnail: "https://i.ytimg.com/vi/UCAcL9FM9s4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCUOU51bEBQcgNI7Ye0sLZNS3tWsA"

    }, {
        video: "https://www.youtube.com/watch?v=tl5kdIyqGc0",
    },
    {
        video: "https://www.youtube.com/watch?v=UCAcL9FM9s4",
        thumbnail: "https://i.ytimg.com/vi/UCAcL9FM9s4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCUOU51bEBQcgNI7Ye0sLZNS3tWsA"

    }, {
        video: "https://www.youtube.com/watch?v=tl5kdIyqGc0",
    },
    {
        video: "https://www.youtube.com/watch?v=UCAcL9FM9s4",
        thumbnail: "https://i.ytimg.com/vi/UCAcL9FM9s4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCUOU51bEBQcgNI7Ye0sLZNS3tWsA"

    }, {
        video: "https://www.youtube.com/watch?v=tl5kdIyqGc0",
    },
    {
        video: "https://www.youtube.com/watch?v=UCAcL9FM9s4",
        thumbnail: "https://i.ytimg.com/vi/UCAcL9FM9s4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCUOU51bEBQcgNI7Ye0sLZNS3tWsA"

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
    //-------------------- v2
    { light: `rgb(120, 170, 40)`, dark: `rgb(10, 70, 10)` },
    { light: `rgb(255, 102, 50)`, dark: `rgb(150, 10, 10)` },
    { light: `rgb(50, 160, 250)`, dark: `rgb(10, 10, 150)` },
    { light: `rgb(255, 210, 20)`, dark: `rgb(150, 80, 20)` },
    { light: `rgb(170, 50, 190)`, dark: `rgb(85, 10, 140)` },
    { light: `rgb(10, 200, 220)`, dark: `rgb(10, 110, 110)` },
    { light: `rgb(90, 190, 90)`, dark: `rgb(40, 150, 40)` },
    { light: `rgb(255, 245, 70)`, dark: `rgb(140, 140, 10)` },
    { light: `rgb(245, 40, 110)`, dark: `rgb(150, 10, 150)` },
    { light: `rgb(130, 95, 80)`, dark: `rgb(90, 60, 40)` },
];
export const randomPair = colors[ Math.floor( Math.random() * colors.length ) ]

import heroImg from './assets/images/hero/hero.jpg';
import ig_promo from './assets/images/insta_promo.png';
import ig_promo2 from './assets/images/ig_promo2.png';

export const recentsData = [
    {
        background: `url(${ heroImg })`,
        description: `Lorem ipsum dolor sit amet consectetur.`,
        link: `#`,
        handle: `null`
    },
    {
        background: `url(https://i.ytimg.com/vi/Pn6KZoiUSYk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAXTDG2kXEDKxh7qHFrm6rnYUTdEQ)`,
        description: `Hostel Essentials | College shopping | ShineMoon`,
        link: `https://www.youtube.com/watch?v=Pn6KZoiUSYk`, handle: `YouTube`

    },
    {
        background: `url(${ ig_promo })`,
        description: `New Store Alert | Restate Vintage`,
        link: `https://www.instagram.com/reel/C764HeYBc4E/?utm_source=ig_web_button_share_sheet`, handle: `Instagram`

    }, {
        background: `url(${ ig_promo2 })`,
        description: `Do Not Touch The Glass`,
        link: `https://www.instagram.com/reel/C5inJnhBuAZ/?utm_source=ig_web_button_share_sheet`, handle: `Instagram`

    },


];

export const coursesInfo = [
    {
        id: 1,
        title: 'Simplest Way To Learn',
        icon: icon1,
        time: '<1hr',
        desc: `Ye course pakka se video editor bana dega jada socho mat lelo or kuch sikh lo, kuki syd ye paise vase bhi cigrattee me udaa doge isse acha kuch use lelo. Padhayi to kr li jitni krni thi apni skill pe focus kr ke aage baddo or professional ban jaooooooooo`,
        price: 199
    }
];


import lead from './assets/lead.png';
import manager from './assets/manager.png';
import editor from './assets/editor.png';
import icon1 from './assets/course1.png';
import icon2 from './assets/lead.png';
import course_1 from './assets/course1.png'
import insta_post from './assets/insta_post.png'
import insta_post2 from './assets/insta_post2.png'

export const teamInfo = [
    {
        id: '🤩',
        name: `ShineMoon`,
        role: `Himanshu Kumawat`,
        img: lead,
        link: 'https://www.instagram.com/ig_shinemoon',
        desc: `A content creator with 3 years of experience. Fast video editor, skilled in Premiere Pro & After Effects.
Using these skills, been successfully able to wrap-up editing a video of JECRC'S biggest 3 day continuous fest, which was then showcased on the 3rd day itself to the live audience. 80% of clients are satisfied and happy with the work`
    },
    {
        id: '🧑‍💼',
        name: `Vikash Takhar`,
        role: `Manager`,
        img: manager,
        desc: `A proficient social media manager and meta-ads expert, specializing in Instagram, YouTube and
Facebook. With a strategic approach and a knack for analytics, driving brand visibility and engagement,
delivering impressive results with two years of experience leveraging tried-and-tested algorithms to
optimize engagement and brand growth.`,
        link: 'https://www.instagram.com/vikashh_choudharyy',

    },
    {
        id: '🤧',
        name: `Mridul Gupta`,
        role: `Editor`,
        img: editor,
        desc: `Proficient in Adobe Premiere Pro and After Effects, using them to bring ideas to life and craft visually stunning narratives. 
      Whether it's a short film, promotional video, or social media content, approaching each project with creativity and dedication.`,
        link: 'https://www.instagram.com/itss.mridul',

    },
    {
        id: '🕷️',
        name: `Khushal Rathore`,
        role: `Designer`,
        img: `https://avatars.githubusercontent.com/u/118611135?v=4`,
        desc: `Your Friendly Neighbourhood Web Developer !!!`,
        link: 'https://www.instagram.com/khushalrathore_',
    }
];


export const heroItem = [
    {
        id: 1,
        Accent: 'steelblue',
        Title: 'Simplest Way To Learn',
        Desc: `Ye course pakka se video editor bana dega jada socho mat lelo or kuch sikh lo, kuki syd ye paise vase bhi cigrattee me udaa doge isse acha kuch use lelo.
Padhayi to kr li jitni krni thi apni skill pe focus kr ke aage baddo or professional ban jaooooooooo`,
        Img: course_1,
        Link: '/courses',
        BtnText: 'Check Now',
    }
];

export const recentItem = [
    {
        id: '1',
        stats: '12',
        title: heroItem[ 0 ].Title,
        Link: heroItem[ 0 ].Link,
        Img: heroItem[ 0 ].Img
    },
    {
        id: '2',
        stats: '1.5K',
        title: 'Hostel Essentials | College Shopping',
        Link: 'https://youtu.be/Pn6KZoiUSYk?si=O9fode4XS-YJt7O7',
        Img: 'https://i.ytimg.com/vi/Pn6KZoiUSYk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAXTDG2kXEDKxh7qHFrm6rnYUTdEQ'
    },
    {
        id: '3',
        stats: '437',
        title: 'New Store Alert | RESTATE VINTAGE',
        Link: 'https://www.instagram.com/reel/C764HeYBc4E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        Img: insta_post
    },
    {
        id: '4',
        stats: '92',
        title: 'Do Not Touch The Glass !!!',
        Link: 'https://www.instagram.com/reel/C5inJnhBuAZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        Img: insta_post2
    },
];

export const ytVideoInfo = [
    {
        id: 1,
        Stats: '23K',
        Title: 'Top 5 Universities in Jaipur',
        Link: 'https://youtu.be/iHaREXRKt9o?si=-HrpHn18YM-K2baZ',
        TrendImage: 'https://i.ytimg.com/vi/iHaREXRKt9o/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDBsrnv9XiYH8oMw1umKt_FkTYe2g'
    },
    {
        id: 2,
        Stats: '19K',
        Title: 'JECRC University Hostels',
        Link: 'https://youtu.be/tl5kdIyqGc0?si=5hiz3Bn_3DtwmIlW',
        TrendImage: 'https://i.ytimg.com/vi/tl5kdIyqGc0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDEdalLE9SNnLmvpjNPaifzb1_P4A'
    },
    {
        id: 3,
        Stats: '6.2K',
        Title: 'Hostel v/s Flats review | Hostel life at JECRC University',
        Link: 'https://youtu.be/i1B-DQFWRKU?si=rkwgz4InY1S5XuIR',
        TrendImage: 'https://i.ytimg.com/vi/i1B-DQFWRKU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAqHFqi_Qjyky1rA-JMAQEmHQNvnA'
    },
    {
        id: 4,
        Stats: '1.6K',
        Title: 'Top 10 Things to Buy Before College (Must Buy !!!)',
        Link: 'https://youtu.be/UCAcL9FM9s4?si=rX9ICvIJ01FH2t16k',
        TrendImage: 'https://i.ytimg.com/vi/UCAcL9FM9s4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCUOU51bEBQcgNI7Ye0sLZNS3tWsA'
    },

]




