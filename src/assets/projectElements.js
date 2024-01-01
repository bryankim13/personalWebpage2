const projectElements = [
    {
        id: 0,
        title: 'Logic Solver',
        description: 'AI that uses Forward Chaining to learn new rules based off given assertions. Also uses a backtracking algorithm to prove any statement given predefined rules.',
        tech: ['Java', 'AI'],
        github: 'https://github.com/bryankim13/logicProver',
        youtube: 'none',
    },
    {
        id: 1,
        title: 'A-Star Algorithm Bot',
        description: 'Bot uses the A-Star algorithm to find the most optimal path to its destination.',
        tech: ['Java', 'AI'],
        github: 'https://github.com/bryankim13/A-Implementation',
        youtube: 'none',
    },
    {
        id: 2,
        title: 'Personal Webpage V1',
        description: 'My first personal webpage made from scratch',
        tech: ['HTML', 'Javascript', 'CSS'],
        github: 'https://github.com/bryankim13/PersonalWebpage',
        youtube: 'none',
    },
    {
        id: 3,
        title: 'Ticket To Ride AI Bot',
        description: 'Developed an AI bot for the Ticket to Ride board game using Markov Chain as a base for the brain',
        tech: ['Java', 'AI'],
        github: 'https://github.com/bryankim13/BotAI',
        youtube: 'none',
    },
    {
        id: 4,
        title: 'What\'s The Move?',
        description: 'Web application developed to provide date suggestions to users in the Charllotesville area. Advanced SQL such as Stored Procedures and Triggers were used for compiling user data. Prevention of SQL Injections and Password Hashing were implemented as well.',
        tech: ['SQL', 'PHP', 'AJAX', 'Javascript'],
        github: 'https://github.com/bryankim13/What-s-The-Move',
        youtube: 'https://www.youtube.com/watch?v=Im0ISn0g2Gk',
    },
    {
        id: 5,
        title: 'Civic Connect',
        description: 'Civic Connect is a Web app that provides citizens a platform to directly connect with their Constituents. Worked with 3 team-members in an Agile environment, carrying out tasks in weekly sprints remotely due to Covid utilizing the Django Framework and implementing the Google Login API',
        tech: ['Python', 'Django Framework', 'Jenkins'],
        github: 'https://github.com/bryankim13/CivicConnect',
        youtube: 'none',
    },
    {
        id: 6,
        title: 'KaClik!',
        description: 'Web app that allows users to share photoshoot locations and photos taken from those spots. Users login and can like other user\'s content',
        tech: ['PHP', 'SQL', 'Angular', 'Javascript'],
        github: 'https://github.com/bryankim13/WebPLProject',
        youtube: 'none',
    },
    {
        id: 7,
        title: 'Personal Webpage V2',
        description: 'Take two of making my own portfolio from scratch. I used this project to dive into the React framework',
        tech: ['Javascript', 'React'],
        github: 'https://github.com/bryankim13/personalWebpage2',
        youtube: 'none',
    }
]

export default projectElements.reverse()