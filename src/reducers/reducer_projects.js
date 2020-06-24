const result = [
    {
        projectLink: "https://poly-dash.herokuapp.com",
        projectImg: "projects/appLogo.png",
        projectName: "Demo Dashboard",
        projectInfo: `Almost every software application shares a need for some form of "dashboard".`
            + `\n\nA "dashboard" is just a user interface that organizes and presents information and allows the user to perform actions with said information.`
            + `\n\nIt is critical for any project to be able to quickly develop any public facing pages that allow a user to change their settings, and internal application dashboards for performing administrative tasks.`
    },
    {
        projectLink: "tiny-recipes",
        projectImg: "projects/tiny-recipes/flutter_icon.png",
        projectName: "Tiny Recipes",
        projectInfo: `I always wanted to make a mobile app for fun, but never really had the time to invest.`
            + `\n\nWhen Google started hyping its new cross-platform mobile development framwork, Flutter, I was skeptical but intrigued, so naturally I made a recipe app because that would allow me to play with the device's hardware (camera and network request to save the photos to the cloud)`
            + `\n\nI was very favorably impressed with Flutter, and managed to quickly produce a full stack, cross-platform (iOS and Android) app that has identical user experience and builds from a single codebase. Google delivered on its promises!`
    },
    
    {
        projectLink: "https://tank-creep.herokuapp.com",
        projectImg: "projects/tank-victory.png",
        projectName: "Tank Creep (old)",
        projectInfo: `This fun little browser game was made very early on in my programming journey!`
            + `\n\nAfter some colaboration on the platform SoloLearn, I managed to produce this simple real-time tank battle game.`
            + `\n\nThis browser game works on both mobile touchscreens and pc monitors with the mouse. Simply launch the game, and start dragging your tanks on to the battlefield as quickly as possible. They will then pilot themselves, and stop to destroy any tanks in their path.`
            + `\n\nFirst team to make it to the other side wins!`
    },
    {
        projectLink: "https://fattys-list.herokuapp.com",
        projectImg: "projects/tent.png",
        projectName: "Fatty's List (old)",
        projectInfo: `This node/express webapp, developed on 'Bash on Ubuntu on Windows' and deployed to Heroku, has one noble goal;`
            +`\nTo compile a list of user-submitted campsites, so that the internet can comment on them. NPM has solid libraries like Mongoose for interacting with my cloud hosted mongo database. Users can only Create, Read, Update, Delete their own Campgrounds and Comments.`
            +`\n\nFeatures: RESTful routing, google maps API leveraged with node-geocode, simple user authentication using passport.`
    },{
        projectLink: "https://react-five-day-forecast.herokuapp.com",
        projectImg: "projects/react.png",
        projectName: "React 5 Day Forecast (old)",
        projectInfo: `ReactJS, my new favorite front-end library!  The performance advantages of selectively re-rendering only those components that have updated are obvious, and the components you write are largely reusable because of the opinionated model.`
            +`\n\nThis app renders spark-line charts populated with data from a weather forecast. Axios is used to make an async http request to the OpenWeatherMap API. The redux-promise middleware is used to replace these promises with their resolved value before saving to state, which then triggers the elegant React re-rendering!`
    },{
        projectLink: "http://nodejs-io-chat.herokuapp.com",
        projectImg: "projects/speech-bubbles.jpg",
        projectName: "Real time socket chat (old)",
        projectInfo: `Recognizing the need to be able to add real-time functionality to any given app, I decided to look into WebSockets. Finding an objective comparison of the different technologies and their tradeoffs is difficult, and these considerations vary depending on app scope: a highly available worldwide network requires a different architecture than an inward facing single server app.`
        +`\n\nThis app uses socket.io, which falls back to Flash Sockets when WebSockets arent available, and then falls back to polling if flash isnt installed. It explores the different broadcast methods the library has available for selectively emitting events.`
    },{
        projectLink: "http://fatty-crafts.herokuapp.com",
        projectImg: "projects/panther_paw.png",
        projectName: "Fatty-Crafts! (old)",
        projectInfo: `In Texas, homecomeing is a fervent tradition, so I decided to leverage Ruby on Rails to rapidly construct an ecommerce site based on the custom. I developed on an Ubuntu virtual machine, with the open-source Spree Commerce as a starting point.`
        +`I now have a working app, from custom admin dashboard (which was used to populate the data, no hard-coded seed) to checkout. I still need to continue past checkout to payment gateway.`
    }
];
result.forEach((value) => {
    // if projectImg is remote, then simply leave it and dont do anything
    if (!value.projectImg.startsWith("http")) {
        // if projectImg is not remote, then we are serving locally and must require/import file
        value.projectImg = require(process.env.IMG_PATH.replace(/\/?$/, '/') + value.projectImg);
    }
});
export default function() {
    return result;
}