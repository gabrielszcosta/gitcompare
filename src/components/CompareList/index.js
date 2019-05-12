import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>
        <ul>
          <li>
            <div>
              <i className="fa fa-star" />
            </div>
            {repository.stargazers_count} <small>stars</small>
          </li>
          <li>
            <div>
              <i className="fa fa-code-fork" />
            </div>
            {repository.forks_count} <small>forks</small>
          </li>
          <li>
            <div>
              <i className="fa fa-info-circle" />
            </div>
            {repository.open_issues_count} <small>issues</small>
          </li>
          <li>
            <div>
              <i className="fa fa-clock-o" />
            </div>
            {repository.lastCommit} <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
};

export default CompareList;
