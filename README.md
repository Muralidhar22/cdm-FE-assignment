<div align="center">
	<h2 align="center">Codedamn user profile</h2>
	<h5 align="center">
		 A Coding profile page for a user to showcase their project, skills, certificates.
	</h5>
</div>
 
## Salient Features

- Profile page displays user information
- Edit page collects user information
- Visibility settings
- Portfolio and Resume section
- Choose projects, playgrounds and certificates to display
- Add new projects, playgrounds and certificates
- Stats under portfolio can be changes according to user specific
- Edit profile information such as name, profile picture etc.
- Add and remove skills shown under resume

## Tech Stack:

- NextJs, ReactJs, TailwindCSS
- State Management: `[useContext](https://beta.reactjs.org/reference/react/useContext) and [useState](https://beta.reactjs.org/reference/react/useState) hooks`

### Formatting and Linting tools:

- [Eslint](https://eslint.org/) , [Prettier](https://prettier.io/)

## File structure overview

```bash
├── public
│   └── assets
├── src
│   ├── components
│   ├── constants
│   ├── contexts
│   ├── layouts
│   ├── pages
│   ├── styles
│   ├── types
│   └── utils
├── .eslintrc.json
├── .prettierignore
├── .prettierrc.json
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```

## Getting Started

#### Clone the repository

```bash
git clone https://github.com/Muralidhar22/cdm-FE-assignment.git
```

## Usage

#### Run in production mode

```bash
yarn start
```

> Make sure to install dependencies with `yarn` command before deploy.

#### Run in development mode

```bash
yarn dev
```

> Make sure to install dependencies with `yarn` command before development.\

#### Browse the app

- **Frontend - [http://localhost:3000](http://localhost:3000)**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
