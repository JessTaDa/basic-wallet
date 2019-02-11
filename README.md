This is a basic tutorial to build a basic wallet app using  [ethers.js](https://docs.ethers.io/ethers.js/html/) and [hyperapp](https://github.com/jorgebucaran/hyperapp). We will launch the app using [parcel](https://parceljs.org/getting_started.html) and [surge](https://surge.sh/).

## Install required packages
Create a new folder where you want your project to be. From the root folder run:
```$ npm init```
```$ npm install --save ethers```
```$ npm install --save hyperapp```
```$ npm install -g parcel``` (if you don't have it already)
```$ npm install -g surge``` (if you don't have it already)

## Creating a your basic app
1. Open up your root directory in your text editor.
2. Create a folder `src` in your root directory. We will keep all our front end related files here.
3. In the `src` folder, create the files `index.js` and ` index.html`.
4. Place the following code in your `index.html` file, as per the parcel setup instructions:
```html
<html>
<body>
  <script src="./index.js"></script>
</body>
</html>
```

5. Following the hyperapp [example](https://github.com/jorgebucaran/hyperapp), copy paste the hyperapp example code below into `index.js` to see if the page is running:
```javascript
import { h, app } from "hyperapp"

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const view = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </div>
)

app(state, actions, view, document.body)
```


Also, as per the hyperapp set up instructions, remember to create a `.babelrc` file with the following:
```.babelrc
{
  "plugins": [["@babel/plugin-transform-react-jsx", { "pragma": "h" }]]
}
```
6. In your terminal window (you should be in the `src` directory), run ```$ parcel index.html```. This sets up ```index.html``` as your entry file for parcel and starts a build for you. By default, it should start a server running on `http://localhost:1234`. Open a new tab in your browser and visit `http://localhost:1234` to see if your basic hyperapp counter example is working.

## Launching your app
Once your project is ready to be deployed, run `$ parcel build index.html`. Build files will automatically be created in a `dist` directory.

Navigate into the `src/dist` directory and run `$ surge`. This will prompt login information from surge.sh. Create a new account if you have not already done and login if you have an existing account. Once this is done, surge will provide you with the url your app has been launched on!
