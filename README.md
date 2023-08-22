<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/a-bianchi/bolsiyo-challenge-api">
    <img src="images/logo.webp" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Challenge</h3>

  <p align="center">
    REST API for inventory management by Administrator users, as part of a technical challenge for Bolsiyo.
    <br />
    <a href="https://github.com/a-bianchi/bolsiyo-challenge-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/a-bianchi/bolsiyo-challenge-api">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Nest.js](https://docs.nestjs.com/)
* [Typescript](https://www.typescriptlang.org/)
* [MySql](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [Docker](https://www.docker.com/)
* [Swagger](https://swagger.io/)
* [Jest](https://jestjs.io/)
* [JWT](https://jwt.io/)
* [Husky](https://www.npmjs.com/package/husky)
* [Github Actions](https://github.com/features/actions)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

The environment necessary to run the service locally is detailed below.

### Prerequisites

- Npm (>=9.0.0)
- Yarn (>=1.22.0)
- Node (>=18.0.0)
- Docker (>=4.21.1)
  
To run mysql database and service in the same container use the following command.
* bash
  ```sh
  make start
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/a-bianchi/bolsiyo-challenge-api/
   ```
2. To run mysql database and service in the same container use the following command
   ```sh
   make start
   ```
3. Wait a few seconds for the containers to run and the migrations to be executed
   1. If the "api-pocket" container fails, you can test it from vscode with the following command
      ```sh
      yarn start:dev
      ```
5. Import the <a href="https://github.com/a-bianchi/bolsiyo-challenge-api/blob/develop/apiDcoumentation/Challegen%20Bolsiyo.postman_collection.json">postman collection</a> to be able to test (apiDocumentation folder)
6. In the browser go to http://localhost:3000/documentation, to see the documentation
7. You can test if the service is running
   ```sh
   curl -X 'GET' \
   'http://localhost:3000/ping' \
   -H 'accept: */*'
   ```
  
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

```bash
# development
$ yarn start:dev

# production mode
$ yarn start:prod
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- TEST EXAMPLES -->
## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Alejo Bianchi - alejobianchi@gmail.com

Project Link: [https://github.com/a-bianchi/bolsiyo-challenge-api](https://github.com/a-bianchi/bolsiyo-challenge-api)

<p align="right">(<a href="#top">back to top</a>)</p>


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/a-bianchi/bolsiyo-challenge-api/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alejobianchi
[product-screenshot]: images/screenshot.png
