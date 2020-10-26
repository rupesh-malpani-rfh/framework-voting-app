import React from "react"

const FrameworkDetails = ({ framework, onVoteClick }) => {
    const { id, imageUrl, name, votes, description, logoColor } = framework
    return (
        <div className="item my-2">
            <div className="image">
                <img className="ui medium circular image" src={imageUrl} alt={name} />
            </div>
            <div className="content">
                <h2>{name}</h2>
                <div className="meta">
                    <h4>{description}</h4>
                </div>
                <div className="extra">
                    <h4><strong>Votes Count: {votes}</strong></h4>
                    <span
                        style={{ cursor: 'pointer', color: logoColor }}
                        onClick={() => onVoteClick(id)}
                    >
                        <i class="fas fa-vote-yea fa-3x"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default FrameworkDetails;
