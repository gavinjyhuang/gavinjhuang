import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Projects = () => (
  <Main title="Projects" description="Learn about Gavin Huang's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      <div>
        This page is still under construction. Please check back later!
      </div>
    </article>
  </Main>
);

export default Projects;
