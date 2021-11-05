# Skilvul Web Developer Assessment

This project was made as part of Skilvul's web developer assessment test. This project uses React.js for the front-end as well as NodeJS for the backend. The root project directory of this repository hosts the back-end, while the front-end is located in the `/client` directory.

Additionally, I used TailwindCSS to help with styling on the front-end, while the back-end uses Express to run the server and Concurrently to run both the front-end and back-end in a single command.

The back-end is only used to get user's Access Token securely as the Client Secret will not be exposed to the front-end. Please note that the `.env` file is not omitted from this repository due to simplicity for the recruiter's side of things, but I am aware that it has to be removed from the repo in a real project.

## Starting the project

To run the project in development mode, you need to first install the dependencies on both the `root` project directory as well as the `/client` directory.

### `npm install`

After that, go to the root project directory and run:

### `npm run dev`

The backend will be available at [http://localhost:4500](http://localhost:4500) while the front end will be live at [http://localhost:3000](http://localhost:3000)
