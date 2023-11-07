import React from 'react';
import '../index.css'; // Assuming you save your CSS styles in WorkExperience.css

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'UnitedHealth Group',
      dateRange: 'June 2022 - August 2023',
      responsibilities: [
        'Developed an Incident Portal using Grafana, Prometheus and NodeJS, resulting in a 20% reduction in incident resolving time improving incident resolution efficiency.',
        'Collaborated on the creation of a UAT portal with MongoDB, NodeJS, React, enhancing client-driven story testing',
        'Designed and maintained API’s used by 20+ clients, ensuring data access and integration.',
        'Successfully migrated the CI/CD pipeline of 6 API’s from Jenkins to Github Actions, optimizing automation and deployment process',
        'Modernized logging infrastructure by configuring Splunk and Loki, resulting in significant (50%) reduction in debugging time, enhancing system monitoring and issue identification.',
      ],
    },

    {
      id: 2,
      title: 'Software Engineer Intern',
      company: 'AP Moller Maersk',
      dateRange: 'November 2021 - May 2022',
      responsibilities: [
        'Implemented 2 customer-centric widgets to gather valuable feedback and feature requests, seamlessly integrating them into the team’s backlog for future development.',
        'Managed build and release pipelines ensuring successful deployment of the project.',
        'Technologies: Java Spring Boot (Backend), Jenkins, Kubernetes, Docker.',
      ],
    },

    {
      id: 3,
      title: 'Software Engineer Intern',
      company: 'UX Army',
      dateRange: 'June 2021 - August 2021',
      responsibilities: [
        'Collaborated and launched a client-focused website enabling order placement and real time order tracking.',
        'Implemented critical functionalities, including seamless integration of STRIPE API for secure payment.',
        'Added User-friendly Login/Sign-up page, and customized dashboards for individual clients using MERN Stack.',
      ],
    },
    
  ];

  return (
    <div name="work-experience" className='work-experience'>
      <div className='work-container'>
        <div className='work-header'>
          <p className='work-title'>Work Experience</p>
        </div>
        {experiences.map((job) => (
          <div key={job.id} className='job'>
            <h3 className='job-title'>{job.title} @ {job.company}</h3>
            <p className='job-date'>{job.dateRange}</p>
            <ul className='job-responsibilities'>
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
