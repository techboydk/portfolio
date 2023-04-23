import React from 'react'
import './resume.scss'
import SectionHeading from '../../SectionHeading/SectionHeading'
import Timeline from '../../Timeline/Timeline'
import { ResumeData } from './ResumeData'

const Resume = () => {
    const keys = Object.keys(ResumeData);
    return (
        <div className="resume-section" id='resume'>
            <SectionHeading heading="my resume" bgText="resume" />
            <div className="row">
                {
                    keys.map((key, index) => {
                        if (key === 'education') {
                            return (
                                <div className="column" key={index}>
                                    <div className="education-timeline">
                                        <div className="title"><i className="fa-solid fa-graduation-cap"></i>Educational Qualification</div>
                                        <div className="timeline-wrap">
                                            {
                                                ResumeData.education.map((item) => {
                                                    return (
                                                        <Timeline title={item.title} instituteName={item.instituteName} year={item.year} desc={item.desc} key={item.title} />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="column" key={index}>
                                    <div className="work-timeline">
                                        <div className="title"><i className="fa-solid fa-briefcase"></i>Working Experience</div>
                                        <div className="timeline-wrap">
                                            {
                                                ResumeData.work.map((item, index) => {
                                                    return (
                                                        <Timeline title={item.title} instituteName={item.instituteName} year={item.year} desc={item.desc} key={index} />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

            </div>
        </div>
    )
}

export default Resume
