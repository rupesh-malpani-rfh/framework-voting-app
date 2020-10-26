import reactLogo from './images/react.png'
import angularLogo from './images/angular.png'
import vueLogo from './images/vue.png'
import nodeLogo from './images/node.png'
import emberLogo from './images/ember.png'

const FrameworkData = [
    {
        id: 1,
        name: "React JS",
        votes: 10,
        // imageUrl: 'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png',
        imageUrl: reactLogo,
        description: "UI Framework",
        logoColor: '#61DBFB'
    },
    {
        id: 2,
        name: "Angular JS",
        votes: 18,
        imageUrl: angularLogo,
        description: "UI Framework",
        logoColor: '#dd1b16'
    },
    {
        id: 3,
        name: "Vue JS",
        votes: 12,
        imageUrl: vueLogo,
        description: "UI Framework",
        logoColor: '#34495E'
    },
    {
        id: 4,
        name: "Node JS",
        votes: 15,
        imageUrl: nodeLogo,
        description: "Server Side Framework",
        logoColor: '#68A063'
    },
    {
        id: 5,
        name: "Ember JS",
        votes: 10,
        imageUrl: emberLogo,
        description: "Server Side Framework",
        logoColor: '#E04E39'
    }
];

export default FrameworkData;