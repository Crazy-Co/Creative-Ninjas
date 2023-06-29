import React from 'react'

const ProjectCard = ({img, title, content, link}) => {
  return (
    <div className="card">
            <div className="lines"></div>
            <div className="imgBox">
              <img src={img} alt="img" />
            </div>
            <div className="content">
              <div className="details">
                <h2>{title}</h2>
                <p>{content}</p>
                <a href={link}>Read more</a>
              </div>
            </div>
          </div>
  )
}

export default ProjectCard;