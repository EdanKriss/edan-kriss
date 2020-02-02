const result = [
    {
        projectLink: "http://poly-dash.herokuapp.com",
        projectImg: "projects/appLogo.png",
        projectName: "Demo Dashboard",
        projectInfo: `After a few years developing in the healthcare and billing spheres, it became apparent that most engagements require a browser-based dashboard for visualizing data and performing business functions.`
            + `\n\nDashboards generally share a similar set of components, composed according to the underlying business logic.`
            + `\n\nThis demo dashboard serves as a representation of components I have ready to package into a front end dashboard (or any other use case).`
    },
    {
        projectLink: "http://fattys-list.herokuapp.com",
        projectImg: "projects/tent.png",
        projectName: "Fatty's List",
        projectInfo: `This node/express webapp, developed on 'Bash on Ubuntu on Windows' and deployed to Heroku, has one noble goal; to compile a curated list of user-submitted campsites so that the internet 
            can comment on them. NPM has solid libraries like Mongoose for interacting with my cloud hosted 
            mongo database, easing the fleshing out of models, associations, and routes. Users can CRUD only their own Campgrounds and Comments. Using ES6 syntax on the backend has proven more pleasant than painful. 
            <br><br>
            Features: RESTful routing, google maps API leveraged with node-geocode, simple user authentication using passport.`
    },{
        projectLink: "https://react-five-day-forecast.herokuapp.com",
        projectImg: "projects/react.png",
        projectName: "React 5 Day Forecast",
        projectInfo: `ReactJS, my new favorite front-end library!  The advantages of selectively re-rendering only those 
            components that have updated are obvious for large sets of dynamic components, and the components you write 
            are largely reusable because of the opinionated logic.
            <br><br>
            This app renders spark-line charts populated with data from a weather forecast. 
            Axios is used to make an async http request (as a promise) to the OpenWeatherMap API. The redux-promise middleware 
            is used to replace these promises with their resolved value before the action is reduced to redux-state. 
            Which then triggers the magically elegant React re-rendering!`
    },{
        projectLink: "http://nodejs-io-chat.herokuapp.com",
        projectImg: "projects/speech-bubbles.jpg",
        projectName: "Real time socket chat",
        projectInfo: `Recognizing the need to be able to add real-time functionality to any given app,
        I decided to look into WebSockets. Finding an objective comparison of the different 
        technologies and their tradeoffs is difficult, and these considerations vary depending on 
        app scope: a highly available worldwide network requires a different architecture than 
        an inward facing single server app.
        <br><br>
        This app uses socket.io, which falls back to Flash Sockets when WebSockets arent available, 
        and then falls back to polling if flash isnt installed. It explores the different broadcast methods 
        the library has available for selectively emitting events.`
    },{
        projectLink: "http://fatty-crafts.herokuapp.com",
        projectImg: "projects/panther_paw.png",
        projectName: "Fatty-Crafts!",
        projectInfo: `In Texas, homecomeing is a fervent tradition, so I decided to leverage Ruby on Rails
        to rapidly construct an ecommerce site based on the custom. I developed
        on an Ubuntu virtual machine, with the open-source Spree Commerce as a starting point. I now have 
        a working app, from custom admin dashboard (which was used to populate the data, no hard-coded seed) to checkout. Still need to continue past checkout 
        to payment gateway.`
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