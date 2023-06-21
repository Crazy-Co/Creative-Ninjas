import React from 'react'

const SkillCard = ({percent, skill, color}) => {
    return (
        <div className="card" style={{ '--clr': color, '--num': percent }}>
            <div className="percent">
                <div className="dot"></div>
                <svg>
                    <circle cx={70} cy={70} r={70}></circle>
                    <circle cx={70} cy={70} r={70}></circle>
                </svg>
                <div className="number">
                    <h2>{percent}<span>%</span></h2>
                    <p>{skill}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillCard;