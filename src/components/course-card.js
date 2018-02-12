import React from 'react';

export default (props) => {
    return (
        <a href={props.courseLink}>
            <div className="course col-md-4 col-xs-6">
                <div className="panel panel-info">
                    <img className="course-image" src={props.courseImg} alt="" />
                    <div className="panel-body">{props.courseName}</div>
                    <div className="panel-footer">
                        <div className="media">
                            <div className="media-left">
                                <img className="course-author-logo" src={props.courseAuthorImg} />
                            </div>
                            <div className="media-body">
                                <span>{"by "+props.courseAuthor}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}