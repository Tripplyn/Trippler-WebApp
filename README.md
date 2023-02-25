<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://website.com">
    <img src="https://i.imgur.com/0P06Io8.png" alt="Logo" width="128" height="128">
  </a>

  <h3 align="center">Tripplyn</h3>

  <p align="center">
    An awesome open-source project to save and share your travel memories!
    <br />
    <a href="https://trippler.vercel.app"><strong>Visit the website »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Tripplyn">GitHub</a>
    ·
    <a href="https://www.notion.so/travel-app-proj/invite/5a17a810dfa2cf0a961cbf8fce49c1a940026e3f">Notion</a>
    ·
    <a href="https://www.figma.com/team_invite/redeem/no0ibz5plNl0KBjH888dHO">Figma</a>
    ·
    <a href="https://discord.gg/NVGgxNUY">Discord</a>
    ·
    <a href="https://github.com/Tripplyn/WebApp/issues">Request Feature</a>
    ·
    <a href="https://github.com/Tripplyn/WebApp/issues">Report Bug</a>
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
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Lorem ipsum [GIF]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![Typescript][Typescript]][Typescript-url]
* [![Node.js][Node.js]][Node-url]
* [![React.js][React.js]][React-url]
* [![Next.js][Next.js]][Next-url]
* [![Prisma][Prisma]][Prisma-url]
* [![tRPC][tRPC]][tRPC-url]
* [![Axios][Axios]][Axios-url]
* [![Tailwind][Tailwind]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run Tripplyn.

* Node.js (Version: >=15.x <17)
  ```sh
  winget install OpenJS.NodeJS
  ```
* npm
  ```sh
  npm install npm@latest -g
  ```

> If you want to enable any of the available integrations, you may want to obtain additional credentials for each one. More details on this can be found below under the [integrations section](#integrations).

## Development

### Setup

1. Clone the repo into a public GitHub repository (or fork https://github.com/Tripplyn/Trippler-WebApp/fork). If you plan to distribute the code, keep the source code public to comply with [AGPLv3](https://github.com/Trippler-Travel-App/Trippler-WebApp/blob/main/LICENSE). To clone in a private repository, [acquire a commercial license](https://trippler.com/sales))
   ```sh
   git clone https://github.com/Tripplyn/Trippler-WebApp.git
   ```
1. Move to the project directory
   ```console
   cd Trippler-WebApp
   ```
1. Install *npm* packages
   ```console
   npm install
   ```
1. Set up your .env file
   - Duplicate `.env.example` to `.env`
     ```sh
     copy .env.example .env
     ```
   - Use *openssl* to generate a key and add it under `NEXTAUTH_SECRET` in the .env file.
      ```sh
       openssl rand -base64 32
     ```
   - Reach out to us for the `DATABASE_URL` and add it to the .env file.

#### Quick start with `npm run dev` and access [https://localhost:3000](https://localhost:3000)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Yuri Winche Achermann - [@YuriAchermann](https://twitter.com/YuriAchermann) - yuri.achermann@gmail.com


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.png
[Typescript]: https://img.shields.io/badge/Typescript-000000?style=for-the-badge&logo=typescript
[Typescript-url]: https://www.typescriptlang.org/
[Node.js]: https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=nodedotjs
[Node-url]: https://nodejs.org/en/
[React.js]: https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react
[React-url]: https://reactjs.org/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs
[Next-url]: https://nextjs.org/
[Prisma]: https://img.shields.io/badge/Prisma-000000?style=for-the-badge&logo=prisma
[Prisma-url]: https://www.prisma.io/
[tRPC]: https://img.shields.io/badge/tRPC-000000?style=for-the-badge&logo=trpc
[tRPC-url]: https://trpc.io/
[Axios]: https://img.shields.io/badge/Axios-000000?style=for-the-badge&logo=axios
[Axios-url]: https://trpc.io/
[Tailwind]: https://img.shields.io/badge/Tailwind-000000?style=for-the-badge&logo=tailwindcss
[Tailwind-url]: https://tailwindcss.com/
