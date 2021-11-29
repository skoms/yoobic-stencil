# Yoobic Grid - Stencil Component App

## Description

This is a Stencil.js app, though the only important part is the <yoobic-grid> component found within the app. The surrounding app is just made to showcase the component through some data injections buttons.

## Getting Started

To start the project, clone this repo to a new directory:

```bash
git clone https://github.com/skoms/yoobic-stencil.git
```

and run:

```bash
npm start
```

## Features

- Flexible grid component that can take any array of data and display it
- Can display top level nested objects within the data objects themselves ( Only first nested layer )
- Sorting feature where you can sort by any of the columns by clicking its header, and clicking it again to flip the sorting order( default: Ascending ). Columns with Objects sort by its first key-value pair.
