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

# Yoobic Grid - Component Details

## Features

- Flexible grid component that can take any array of data and display it
- Can display top level nested objects within the data objects themselves ( Only first nested layer )
- Sorting feature where you can sort by any of the columns by clicking its header, and clicking it again to flip the sorting order( default: Ascending ). Columns with Objects sort by its first key-value pair.

## Component Options:

### CSS Color Variables (Filled with defaults here)

```
/* CSS Variables (Showing Default Values) */
:root {
  /* Container */
  --grid-container-background-color: #fff;
  --grid-container-border: rgba(0, 0, 0, 0.3) 2px solid;
  --grid-container-box-shadow: rgba(0, 0, 0, 0.3) -2px -2px 4px;

  /* Container */
  --grid-header-color: #fff;
  --grid-header-background-color: rgba(0, 0, 0, 0.8);

  /* Even Row Colors */
  --grid-even-row-background-color: rgba(0, 255, 85, 0.4);
  --grid-even-row-color: #000;

  /* Odd Row Colors */
  --grid-odd-row-background-color: rgba(0, 90, 5, 0.7);
  --grid-odd-row-color: #fff;
}
```

To use CSS Variables you can simply add the CSS Variables in your global styles, or leave it to get default values shown above.

!!NB!! : Coloring of the sorting icon is done by providing a (6)-hex value to the property: Like so: `sort-icon-hex-color="FFFFFF"` (not case sensitive) | Default: 'FFFFFF'

### Component Props

```
<yoobic-grid sort-icon-hex-color="FFFFFF" data={this.data}></yoobic-grid>
```

Data ( Optional | Default: [ ] ):

- pass in an array of data(objects) to display in the grid:
  **_`data={this.data}`_**

Sort Icon Hex Color ( Optional | Default: 'FFFFFF' ):

- pass in a (6)-hex value to represent the color of the headers sort icon:
  **_`sort-icon-hex-color="FFFFFF"`_**
