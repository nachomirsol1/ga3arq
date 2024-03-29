import React from "react";
/** Styles */
import "./styles/about.scss";
/** Hooks */
import {useTranslations} from "../../context/languageProvider";
/** Components */
import {AboutCard} from './components/card'
import {DepartmentCard} from "./components/departmentCard";

export const About = () => {
    const {
        translate: {about: {title, descriptions, team, collaborators}},
    } = useTranslations();

    return (
        <div className="about">
            <div className="about__title">{title}</div>
            <div className="about__section">
                <div className="about__section-img">
                    <img
                        src={"https://res.cloudinary.com/nachal/image/upload/v1639809565/Oficinas_GrupoA3Arquitectos/IMG_9952_E_b3shnt.jpg"}
                        alt={title}/>
                </div>
                <div className="about__section-info">
                    {descriptions.map((text, index) => {
                        return <p dangerouslySetInnerHTML={{__html: text}} key={index}/>;
                    })}
                </div>
            </div>
            <div className="about__sectionTeam">
                <h3 className="about__sectionTeam-title">{team.title}</h3>
                <div className="about__sectionTeam-team">
                    {team.persons.map(AboutCard)}
                </div>
            </div>
            <div className="about__sectionCollaborators">
                <h3 className="about__sectionCollaborators-title">{collaborators.title}</h3>
                <div className="about__sectionCollaborators-departments">
                    {collaborators.departments.map(DepartmentCard)}
                </div>
            </div>
        </div>
    )
        ;
};
