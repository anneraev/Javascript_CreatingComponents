//class of article tag that content will be written to.
const article = document.querySelector(".container");
console.log(article);

//array of student objects
const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]


//builds HTML using the strings passed by the createStudentComponent function.
// const element = (tag, content, classTag) =>  {
//     return `
//     <${tag} class="${classTag}">${content}</${tag}>
//     `
// }

// function that builds the student component for each student, passing the arguments along to another function that builds the HTML elements.
// const createStudentComponent = (name, subject, info, className) => {

//     return `
//         <div class="student ${className}">
//         ${element("h1", name, "xx-large")}
//         ${element("section", subject, "bordered dashed section--padded")}
//         ${element("aside", info, "pushRight")}
//         </div>
//     `
// }


//The same as above, except uses createElement() and appendChild() to accomplish creating DOM elements and populating them with content.
const createStudentComponent = (name, subject, info, finalGrade) => {
    let studentDiv = document.createElement("div");
    studentDiv.classList.add(finalGrade)
    let studentH1 = document.createElement("h1");
    studentH1.textContent = name;
    let studentSection = document.createElement('section');
    studentSection.textContent = subject;
    let studentAside = document.createElement('aside');
    studentAside.textContent = info;
    console.log("div", studentDiv);
    console.log("H1", studentH1);
    console.log("section", studentSection);
    console.log("aside", studentAside);
    studentDiv.appendChild(studentH1);
    studentDiv.appendChild(studentSection);
    studentDiv.appendChild(studentAside);
    console.log(studentDiv);
    return studentDiv
}

//loops through students array, sorting them between passing and failing,
//adding a class name for CSS styling and passing the values of the objects
//as arguments to the createStudentComponent function, then appending that as a child Element of the article element.
//let studentComponent = '' //Defunct
for (const student of students) {
    if (student.score >= 70) {
        //former method used with previous innerHTML method. Same args.
        //studentComponent += createStudentComponent(args)
        article.appendChild(createStudentComponent(
            name = student.name,
            subject = student.subject,
            info = student.info,
            className = 'passing'
        ))
    } else {
        //former method used with previous innerHTML method. Same args.
        //studentComponent += createStudentComponent(args)
        article.appendChild(createStudentComponent(
            name = student.name,
            subject = student.subject,
            info = student.info,
            className = 'failing'
        ))

    }
};

//write the studentComponent string to the selected DOM element\
// article.innerHTML = studentComponent;

