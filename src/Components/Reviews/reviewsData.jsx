import * as kr from "../../data"

export const fb = kr.fb;
export const ig = kr.ig;
export const yt = kr.yt;
export const tw = kr.tw;

export const reviewsList = [
    {
        name: "John Doe",
        handle: "FACEbook",
        image: "https://cdn.drawception.com/drawings/691215/4mnjrBALsQ.png",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quia mollitia eum nemo quo quae unde quas",
        link: "#",
    }, {
        name: "Jane Doe",
        handle: "instagram",
        image: "https://preview.redd.it/best-boy-and-best-girl-of-season-7-my-pfp-says-it-v0-6x9yfkhtlswa1.jpg?width=640&crop=smart&auto=webp&s=14c2b3e0dcb3a36e9744a8a14793ff0a9294eacf",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quia mollitia eum nemo quo quae unde quas",
        link: "#",
    },
];

export const getSocialLink = ( handle ) => {
    switch ( handle.toLocaleLowerCase().trim() ) {
        case 'facebook':
            return fb;
        case 'instagram':
            return ig;
        case 'youtube':
            return yt;
        case 'twitter':
            return tw;
        default:
            return '#';
    }
};