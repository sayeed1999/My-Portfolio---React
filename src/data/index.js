const SKILLS = [
    {
        src: 'images/skills/html5.png',
        id: 'HTML 5',
    },
    {
        src: "images/skills/css3.png",
        id: "CSS 3",
    },
    {
        src: "images/skills/bootstrap.png",
        id: 'Bootstrap 4'
    },
    {
        src: "images/skills/js.png",
        id: 'Javascript',
    },
    {
        src: "images/skills/react.png",
        id: 'React'
    },
    {
        src: "images/skills/c++.png",
        id: 'C++',
    }
]

const CERTIFICATES = [
    "images/certificates/11.png",
    "images/certificates/10.png",
    "images/certificates/9.png",
    "images/certificates/8.png",
    "images/certificates/7.jpg",
    "images/certificates/6.png",
    "images/certificates/5.jpg",
]

const WORKS = [
    {
        image: "images/works/samsung-store.png",
        title: "SAMSUNG STORE",
        span: "This is an e-commerce frontend project with React, CSS flexbox, and Reactstrap.",
        description: "On this project, I targeted samsung for the UI. And here is it! You can view products and product details, add products to cart, but the checkout paying system incomplete. :(",
        link: 'https://samsung-store.netlify.app/',
    },
    {
        image: "images/works/ruet-result.png",
        title: "RUET's Online Result System",
        span: "This is a Reactjs project!",
        description: "I made this app showing online result publishing system of universities where teachers upload result and students will get their individual's record by logging in, and that will be private. This app is connected to google firebase for backend.",
        link: 'https://online-result-publishing-system-for-universities.netlify.app/',
    },
]

const ABOUT = [
    "I am a current student of Rajshahi University of Engineering and Technology. I am a good problem solver. My max. rating in codeforces is 1505, in leetcode is 1578, in codechef is 1648 in one year of competitive programming. Then I have started learning web development this  January 2021 and now I am thinking of grasping ReactJs nicely! This portfolio website you are watching now is also one of my fine tuned React app!! 😊",
    "I am someone who is curious about new technologies.. And I am loyal to my work.",
]

const NAVBAR = [
    {
        route: '#header',
        id: 'Home',
    },
    {
        route: '#skills',
        id: 'Skills',
    },
    {
        route: '#works',
        id: "My Works",
    },
    {
        route: '#certificates',
        id: 'Certificates',
    },
    {
        route: '#about',
        id: 'About',
    },
    {
        route: '#contact',
        id: 'Contact',
    },
]

const SIDEBAR = [
    {
        link: "https://www.facebook.com/mdsayeed.rahman",
        classNames: "fab fa-facebook icon facebook",
    },
    {
        link: "https://www.linkedin.com/in/mdsayeedrahman1999/",
        classNames: "fab fa-linkedin icon linkedin",
    },{
        link: "mailto:mdsayeedrahman1999@gmail.com",
        classNames: "fas fa-envelope icon gmail",
    },{
        link: "https://www.youtube.com/channel/UCSoCDvd1qAnVL82sFlas00g",
        classNames: "fab fa-youtube icon youtube",
    },
]

const CODINGPROFILES = [
    {
        link: "https://codeforces.com/profile/sayeed_1999",
        image: "images/coding-profiles/codeforces.png",
    },
    {
        link: "https://www.codechef.com/users/sayeed_1999",
        image: "images/coding-profiles/codechef.png",
    },
    {
        link: "https://leetcode.com/sayeed_1999/",
        image: "images/coding-profiles/leetcode.jpeg",
    },
    {
        link: "https://atcoder.jp/users/sayeed_1999",
        image: "images/coding-profiles/atcoder.png",
    },
    {
        link: "https://www.hackerrank.com/mdsayeedrahman11",
        image: "images/coding-profiles/hackerrank.png",
    },

]

export { SKILLS , CERTIFICATES, WORKS, ABOUT, NAVBAR, SIDEBAR, CODINGPROFILES }