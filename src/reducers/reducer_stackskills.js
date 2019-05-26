const result = [
    {
        courseLink: "https://stackskills.com/p/projects-in-javascript-jquery",
        courseImg: "learning/LearnProjectsInJavaScriptAndJQuery.png",
        courseName: "Projects in Javascript and JQuery",
        courseAuthorImg: "learning/eduonix.jpg",
        courseAuthor: "Eduonix"
    },{
        courseLink: "https://stackskills.com/p/learn-nodejs-by-building-10-projects",
        courseImg: "learning/Learn-Nodejs-by-building-12-projects.jpg",
        courseName: "Learn Nodejs by Building 12 Projects",
        courseAuthorImg: "learning/eduonix.jpg",
        courseAuthor: "Eduonix"
    },{
        courseLink: "https://stackskills.com/p/projects-in-reactjs-the-complete-react-learning-course",
        courseImg: "learning/Projects-In-ReactJS.jpg",
        courseName: "Projects in ReactJS - The Complete React Learning Course",
        courseAuthorImg: "learning/eduonix.jpg",
        courseAuthor: "Eduonix"
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
