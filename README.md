# Particeep React Test

A mini react application that allows you to list a list of movies with some interactions

## Features

- List the movies in cards with: the title in bold, the category and a Youtube type gauge indicating the likes/dislikes ratio. The cards must be side by side and responsive. I.e. when the window is reduced, the cards jump to the next line.

- Add a button in the cards allowing to delete it

- Add a toggle like/dislike button

- Add a filter by category (like multiselect) assuming we don't know them in advance (so we have to get them dynamically from the movies). If all the movies in a category are deleted, the category should not appear anymore.

- Add a pagination system with the following features:

  - Previous/Next buttons
  - Choice of the number of items displayed per page (4, 8 or 12).

Take initiative, there are bonus points if

    - It is pretty
    - You use REDUX correctly
    - There is an attention to details

/!\ Deleting the asynchronous behavior in movies.js will cause the test to be cancelled.

## Run Locally

Clone [react parcel boilerplate](https://github.com/MaxHiit/parcel-frontend-boilerplate)

```bash
git clone [react-parcel-boilerplate-url] my-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Authors

- [Particeep](https://github.com/Particeep/react-interview#react-interview)
