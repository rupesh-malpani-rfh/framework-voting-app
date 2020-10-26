import React, { useState, useEffect } from "react"
import frameworkData from "./FrameworkData"
import FrameworkDetails from "./FrameworkDetails"

const FrameworkList = () => {
    const [frameworks, setFrameworks] = useState([])

    useEffect(() => {
        setFrameworks(frameworkData)
    }, [])

    // Vote handler
    const onVoteClick = (frameworkId) => {
        const voteFramework = frameworks.map((framework) => {
            if (frameworkId === framework.id) {
                // returning the javascript object(framework) with updated votes property

                // return Object.assign({}, framework, {
                //     votes: framework.votes + 1
                // })
                return {
                    id: framework.id,
                    name: framework.name,
                    votes: framework.votes + 1,
                    imageUrl: framework.imageUrl,
                    description: framework.description
                }
            } else {
                return framework
            }
        })
        setFrameworks(voteFramework)
    }

    // Sort framework based on votes
    const sortFramework = frameworks.sort((a, b) => {
        return b.votes - a.votes
    })

    return (
        <div>
            <h1>Framework List</h1>
            <div className="ui items">
                {sortFramework.map(framework => (
                    <FrameworkDetails
                        key={framework.id}
                        framework={framework}
                        onVoteClick={onVoteClick}
                    />
                ))}
            </div>

        </div>
    );
}

export default FrameworkList;

// import React from "react"
// import frameworkDetails from "../data/FrameworkDetails"

// class FrameworkList extends React.Component {

//     state = {
//         frameworks: []
//     }


//     componentDidMount() {
//         this.setState({
//             frameworks: frameworkDetails
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Framework List</h1>
//                 {this.state.frameworks.map(framework => {
//                     return <h5 key={framework.id}>{framework.name}</h5>
//                 })}
//             </div>
//         )
//     }
// }

// export default FrameworkList;