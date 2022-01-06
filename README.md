## FinTech
This repository is private, and it serve the purpose of fufilling a job assessment. Continue reading to get the brief of the tools made use of.

## Tools
1. Node v16
2. NPM v8
3. React.js Library
4. Create-react-app
5. TailwindCSS
6. React Icon
7. React Skeleton Loader
8. Apex Chart
9. PSDETCH (for inspecting the XD file)

## Setup
To start, get the copy of the repository on your machine by cloning this project, run this command
```ssh
git clone https:/https://github.com/wolvecode/fintech-react.git && cd fintech-react 
```

Then you will have to install the dependencies using NPM, simply run the following command
```ssh
npm install
```

Now, create the environment file (`.env`), and set the `API_URL` pointing to the endpoint of the compatible API, you can checkout a compatible API for this 
[project here](https://github.com/wolvecode/fintech-api). Your `.env` file will look like this
```
API_URL=https://api-url.dev/api/
```

Finally, start the app by running this command
```
npm start
```

## Build
To build to production, run `npm run build`. This will emit a production bundle into a new folder called `dist`. You can then serve content from this folder on your web-server.