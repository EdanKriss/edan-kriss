import React from 'react';
import Pepsi from './pepsi';

const code = 'import {Edan} from "people";\n' +
'import {Learn} from "Person";\n' +
'Edan.job = "Not what he loves";\n\n' +

'while (Edan.job !== "Developer") {\n' +
    '    solidifySkills(Edan.courses, Edan.projects);\n' +
    '    Edan.pursueCareer("Developer");\n' +
'};\n\n' +

'function solidifySkills (courses, projects) {\n' +
    '    if (Edan.newIdea) {\n' +
        '        Edan.projects.push(Edan.newIdea);\n' +
        '        Edan.newIdea = null;\n' +
    '    };\n' +   
    '    Learn.onlineCourses(courses);\n' +
    '    Learn.developProjects(projects);\n' +
'};\n';

export default (props) => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <h2 className="heading">About Me</h2><br />
                    <pre id="kode"><code>{code}</code></pre>
                    <img id="edan" src="../../public/images/edan.jpg" />
                    <Pepsi />
                </div>
            </div>
        </div>
    );
}