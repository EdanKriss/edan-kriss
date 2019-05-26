import React from 'react';

import TimelineEntry from './timeline-entry';
import udemyLogo from '../../public/images/learning/udemy-logo.png';
import mitxLogo from '../../public/images/learning/mitx-logo.png';
import stackskillsLogo from '../../public/images/learning/stackskills-logo.png';

export default (props) => {
    return (
        <div id="experience" className="background-alt">
            <h2 className="heading">Online Learning</h2>
            <div id="experience-timeline">
                <TimelineEntry platform="udemy" logo={udemyLogo} />
                <TimelineEntry platform="mitx" logo={mitxLogo} />
                <TimelineEntry platform="stackskills" logo={stackskillsLogo} />
            </div>
        </div>
    );
}