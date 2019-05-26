const result = [
    {
        courseLink: "https://www.edx.org/course/software-construction-java-mitx-6-005-1x",
        courseImg: "learning/java.jpg",
        courseName: "Software Construction in Java",
        courseAuthorImg: "learning/small-edx.png",
        courseAuthor: "MITx"
    },{
        courseLink: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/",
        courseImg: "learning/comp_math.jpg",
        courseName: "Mathematics for Computer Science",
        courseAuthorImg: "learning/small-edx.png",
        courseAuthor: "MITx"
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
