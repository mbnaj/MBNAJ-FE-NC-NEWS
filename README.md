# FE NC News - React

FE NC News is a social news aggregation, web content rating, and discussion website.
It has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article.

This project buil in React and used APIs from MBNAJ-BE-NC-News project in nodejs. 

This project uses [Backend News API](https://mbnaj-articles.herokuapp.com/api) under the hood. and you can find it from here: [Click to see the API repo](https://github.com/mbnaj/MBNAJ-BE-NC-News/)

Demo: [Click to see DEMO](https://mbnaj-articles.netlify.app/)



## Getting Started

This project created for a Meetup talk about Server Side Rendering with React.


### Installing

First clone project and install dependencies

```sh
$ mkdir react-news && cd react-news
$ git clone https://github.com/mbnaj/MBNAJ-FE-NC-NEWS.git
$ cd MBNAJ-FE-NC-NEWS
$ npm install
```


Navigate to [News API](https://github.com/mbnaj/MBNAJ-BE-NC-News/) if you need to understand how it works.


## Development and Build Process


| Command | Description |
| ------- | ----------- |
| `npm start` | Starts development server with hot reloading. |
| `npm run build` | Runs development build. Outputs files to `/build`. |
| `npm run dist` | Runs production build. Outputs files to `/dist`. |


Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

Deployment build

```sh
$ npm run build:prod
```

You can deploy this project to:

- [Heroku](https://www.heroku.com/)
OR
- [netlify](https://www.netlify.app/)

## Built With

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
