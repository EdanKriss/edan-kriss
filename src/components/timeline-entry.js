import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourseCard from './course-card';

class TimelineEntry extends Component {
    constructor(props) {
        super(props);
    }

    renderRow() {
        return this.props.courses.map((course) => {
            return (
                <CourseCard
                    key={course.courseName}
                    courseLink={course.courseLink} 
                    courseImg={course.courseImg} 
                    courseName={course.courseName} 
                    courseAuthorImg={course.courseAuthorImg} 
                    courseAuthor={course.courseAuthor}
                />
            );
        });
    }

    render() {
        const platform = this.props.platform;
        const logo = this.props.logo;

        if (!this.props.courses) {
            return (<h1>Loading...</h1>);
        }

        return (
            <div className="vtimeline-point">
                <div className="vtimeline-icon">
                    <i className="fa fa-map-marker"></i>
                </div>
                <div className="vtimeline-block">
                    <div className="vtimeline-content">
                        <a href={"#"+platform+"Collapse"} data-toggle="collapse">
                            <img id={platform} src={logo} />
                            <span className="glyphicon glyphicon-menu-down"></span>
                        </a>
                        <br/>
                        <div id={platform+"Collapse"} className="collapse">
                            <div className="row">
                                {this.renderRow()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state[ownProps.platform]
    };
}

export default connect(mapStateToProps)(TimelineEntry);