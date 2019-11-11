import React, { Component } from 'react'
import HTML from '../devicons-master/PNG/html5.png'
import CSS from '../devicons-master/PNG/css3.png'
import JS from '../devicons-master/PNG/javascript_1.png'
import REACT from '../devicons-master/PNG/react.png'
import ANGULAR from '../devicons-master/PNG/angular_simple.png'
import NODE from '../devicons-master/PNG/nodejs.png'
import GIT from '../devicons-master/PNG/git.png'
import GITHUB from '../devicons-master/PNG/github_badge.png'
import BOOTSTRAP from '../devicons-master/PNG/bootstrap.png'
import HEROKU from '../devicons-master/PNG/heroku.png'
import MONGO from '../devicons-master/PNG/mongodb.png'
import AI from '../devicons-master/PNG/illustrator.png'
import PS from '../devicons-master/PNG/photoshop.png'
import VS from '../devicons-master/PNG/visualstudio.png'
import PAINT from '../abstract_paint.jpg'
import CODE from '../code.jpg'

let skills = [
    {
        name: 'HTML5',
        icon: HTML
    },
    {
        name: 'CSS3',
        icon: CSS
    },
    {
        name: 'JAVASCRIPT',
        icon: JS
    },
    {
        name: 'REACT.JS',
        icon: REACT
    },
    {
        name: 'ANGULAR',
        icon: ANGULAR
    },
    {
        name: 'GIT',
        icon: GIT
    },
    {
        name: 'GITHUB',
        icon: GITHUB
    },
    {
        name: 'BOOTSTRAP',
        icon: BOOTSTRAP
    },
    {
        name: 'HEROKU',
        icon: HEROKU
    },
    {
        name: 'NODE.JS',
        icon: NODE
    },
    {
        name: 'MONGODB',
        icon: MONGO
    },
    {
        name: 'VISUAL STUDIO CODE',
        icon: VS
    },
    {
        name: 'ADOBE ILLUSTRATOR',
        icon: AI
    },
    {
        name: 'ADOBE PHOTOSHOP',
        icon: PS
    },
    // {
    //     name: 'SKETCH APP',
    //     icon: SKETCH
    // },

]

export default class AboutMe extends Component {
    render() {
        let skillsList = skills.map((skill) => {
            return(
            <div className='skill-couple'>
                <li><img src={skill.icon}/><br/>{skill.name}</li>
                </div>)
        })
        return (
            <div>
                <a name='about'></a>
                <h2>About</h2>
                <div className='about-section'>
                <img src={PAINT} className='about-image'/>
                <p className='about-p'>
                    My professional and educational journey has provided training 
                    and experience as an inventive and dynamic problem solver and avid learner. 
                    The evolution of who I am as a software engineer began with my role as a creative and UX designer.
                    My artistic side loved using visual communication to create strong visual presence, 
                    but my analytical side wondered what went on behind the scenes. I made a decision to 
                    learn full-stack development so that I could be prepared to make full-bodied, impactful work.
                    I have since pivoted to the world of software engineering and have learned the tools and 
                    skills to build full-stack applications. My goal is to make peoples' 
                    lives better through development and a positive user experience.
                </p>
                <img src={CODE} className='about-image'/>
                </div>
                <div className='skills'>
                <h3 className='skills-title'>Skills</h3>
                <ul>
                {skillsList}
                </ul>
                </div>
            </div>
        )
    }
}
