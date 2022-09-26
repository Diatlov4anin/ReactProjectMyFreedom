import Doe from "../../images/man-1.png"
import Biru from "../../images/man-2.png"
import Sing from "../../images/man-3.png"
import FbConnect from "../../images/fb.png"
import TwitConnect from "../../images/twitter.png"
import ChatConnect from "../../images/chat.png"
import DribConnect from "../../images/dribble.png"

export const TEAM_TITLE_DATA = {
    titlePost: "Our Team Member",
    subtitlePost: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
}

export const TEAM_PERSON_DATA = [
    {
        id: 0,
        photo: <img src={Doe} alt="DoeAvatar" />,
        employee: "John Doe",
        rank: "General Manager",
        connection: [
            <img src={FbConnect} alt="FbConnect"/>,
            <img src={TwitConnect} alt="TwitConnect" />,
            <img src={ChatConnect} alt="ChatConnect" />,
            <img src={DribConnect} alt="DribConnect" />,
        ],
        mailPerson: "111@123",
        linkMail: "http://mail.ru",
        
    },
    {
        id: 2,
        photo: <img src={Biru} alt="BiruAvatar" />,
        employee: "Alexa Biru",
        rank: "Office Director",
        connection: [
            <img src={FbConnect} alt="FbConnect" />,
            <img src={TwitConnect} alt="TwitConnect" />,
            <img src={ChatConnect} alt="ChatConnect" />,
            <img src={DribConnect} alt="DribConnect" />,
        ],
        mailPerson: "111@123",
        linkMail: "http://mail.ru",
    },
    {
        id: 3,
        photo: <img src={Sing} alt="SingAvatar" />,
        employee: "Ronobir Sing",
        rank: "Admin",
        connection: [
            <img src={FbConnect} alt="FbConnect" />,
            <img src={TwitConnect} alt="TwitConnect" />,
            <img src={ChatConnect} alt="ChatConnect" />,
            <img src={DribConnect} alt="DribConnect" />,
        ],
        mailPerson: "111@123",
        linkMail: "http://mail.ru",
    }

]