$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/mentors.jpg',
            link: 'false',
            title: 'College Bro',
            demo: 'false',
            technologies: ['Python', 'LLama', 'Chatbot'],
            description: "Initiated and currently leading the development of a dynamic, AI-driven website for college students, emphasizing a user-centric approach.",
            categories: ['featured', 'project','diy']
        },
        {
            image: 'assets/images/mobile-landscape.jpg',
            link: 'https://www.icaeb.org/venue.html',
            title: 'Event-Driven Strategy and the Market Response to North Koreas Armed Provocation: A Time Series Data Analysis of South Korean Defense Stocks',
            demo: 'https://www.icaeb.org/venue.html',
            technologies: ['Python', 'Time Series Analysis'],
            description: "Time Series Data Analysis of South Korean Defense Stocks accepted for publication in the International Conference on Applied Economics and Business, Munich, Germany, 2024.",
            categories: ['featured', 'diy', 'data science', 'research', 'project']
        },
        {
            image: 'assets/images/collage.jpg',
            link: 'https://github.com/abhn/Marvel',
            title: 'Hate Symbol Detection',
            demo: false,
            technologies: ['Python', 'Computer Vision', 'Yolov5'],
            description: "Developed a machine learning model to identify and flag hate symbols embedded in-game environments, aiming to enhance workplace integrity and inclusivity.",
            categories: ['featured','diy', 'data science','research']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://github.com/BrownDSI/crypto-prediction',
            title: 'Cryptocurrency Prediction',
            demo: 'https://github.com/BrownDSI/crypto-prediction',
            technologies: ['Python', 'R', 'Machine Learning','Deep Learning'],
            description: "Building a cryptocurrency financial model by combining extensive data sets on cryptocurrency prices obtained via Coinbase and Binance API.",
            categories: ['featured', 'data science','research','project']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'https://github.com/jinnoh47/AmbienceNet',
            title: 'AmbianceNet',
            demo: 'https://devpost.com/software/ambiancenet?ref_content=my-projects-tab&ref_feature=my_projects',
            technologies: ['Python','Deep Learning'],
            description: "Created an artificial intelligence prototype system which matches text with emotionally resonant music",
            categories: ['data science','project']
        },
        {
            image: 'assets/images/data-destroyer.png',
            link: 'https://github.com/jinnoh47/data1030-project',
            title: 'Water Potability',
            demo: false,
            technologies: ['Python','Machine Learning'],
            description: "Implemented predictive models such as Logistic regression, XGBoost, Random Forest, and Support Vector Classifier algorithms to identify the potability of water samples",
            categories: ['data science','project']
        },
        {
            image: 'assets/images/raspberry-pi-monitor.png',
            link: 'https://github.com/jinnoh47/Estimation-of-Weekly-Greenhouse-Gas-Emissions',
            title: 'Greenhouse Gas Emissions',
            demo: false,
            technologies: ['Python', 'Gitpod','Heroku'],
            description: "Made analytics tools website to estimate weekly greenhouse gas emissions. ",
            categories: ['data science','project']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}