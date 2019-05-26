const result = [
    {
        courseLink: "https://www.udemy.com/certificate/UC-ZLT42WLQ/",
        courseImg: "learning/jsUnderstandingTheWeirdParts.jpg",
        courseName: "Javascript: Understanding the Weird Parts",
        courseAuthorImg: "learning/anthony-alicea.jpg",
        courseAuthor: "Anthony Alicea"
    },{
        courseLink: "https://www.udemy.com/certificate/UC-IPW70NPV/",
        courseImg: "learning/theWebDevBootcamp.jpg",
        courseName: "The Web Developer Bootcamp",
        courseAuthorImg: "learning/colt-steele.jpg",
        courseAuthor: "Colt Steele"
    },{
        courseLink: "https://www.udemy.com/react-redux/learn/v4/overview",
        courseImg: "learning/modern-react-redux.jpg",
        courseName: "Modern React and Redux",
        courseAuthorImg: "learning/stephan-grider.jpg",
        courseAuthor: "Stephen Grider"
    },{
        courseLink: "https://www.udemy.com/understand-nodejs/learn/v4/overview",
        courseImg: "learning/learnUnderstandNode.jpg",
        courseName: "Learn and Understand NodeJS",
        courseAuthorImg: "learning/anthony-alicea.jpg",
        courseAuthor: "Anthony Alicea"
    },{
        courseLink: "https://www.udemy.com/learn-angularjs/learn/v4/overview",
        courseImg: "learning/learnUnderstandAngular.jpg",
        courseName: "Learn and Understand AngularJS",
        courseAuthorImg: "learning/anthony-alicea.jpg",
        courseAuthor: "Anthony Alicea"
    },{
        courseLink: "https://www.udemy.com/certificate/UC-B6RL0FR1/",
        courseImg: "learning/completeNodeDevCourse.jpg",
        courseName: "Complete Node.js Developer Course (2nd Ed)",
        courseAuthorImg: "learning/andrew-mead.jpg",
        courseAuthor: "Andrew Mead"
    }
];
result.forEach((value) => {
    // if courseImg is remote, then simply leave it and dont do anything
    if (!value.courseImg.startsWith("http")) {
        // if courseImg is not remote, then we are serving locally and must require/import file
        value.courseImg = require(process.env.IMG_PATH.replace(/\/?$/, '/') + value.courseImg);
    }
    if (!value.courseAuthorImg.startsWith("http")) {
        // if courseAuthorImg is not remote, then we are serving locally and must require/import file
        value.courseAuthorImg = require(process.env.IMG_PATH.replace(/\/?$/, '/') + value.courseAuthorImg);
    }
});
export default function() {
    return result;
}
