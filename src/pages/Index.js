import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Gavin Huang's personal website. Current Senior at Duke Kunshan University, "
      + 'Software Engineering Intern at Aspida, a subsidiary of Ares Management.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Hi, I&apos;m Gavin</Link>
          </h2>
          <p>
            A current Senior at Duke Kunshan University, Software Engineering Intern
            at Aspida, a subsidiary of Ares Management.
          </p>
        </div>
      </header>
      <p>
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        Source available{' '}
        <a href="https://github.com/gavinjyhuang/gavinjhuang.com">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
