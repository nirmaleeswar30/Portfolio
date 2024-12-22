import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export const fetchGitHubStats = async (username) => {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      axios.get(`${GITHUB_API_URL}/users/${username}`),
      axios.get(`${GITHUB_API_URL}/users/${username}/repos`)
    ]);

    const totalStars = reposResponse.data.reduce(
      (acc, repo) => acc + repo.stargazers_count,
      0
    );

    const totalForks = reposResponse.data.reduce(
      (acc, repo) => acc + repo.forks_count,
      0
    );

    return {
      stars: totalStars,
      forks: totalForks,
      name: userResponse.data.name || username
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return {
      stars: 0,
      forks: 0,
      name: username
    };
  }
};