import React from 'react';
import TimelineEntry from './timeline-entry';

export default (props) => {
    return (
        <div id="experience" className="background-alt">
            <h2 className="heading">Online Learning</h2>
            <div id="experience-timeline">
                <TimelineEntry platform="udemy" />
                <TimelineEntry platform="mitx" />
                <TimelineEntry platform="stackskills" />
            </div>
        </div>
    );
}