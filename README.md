# local-viking-checkins-wp-plugin

### To Run Locally
Clone this repo
```bash
$ git clone https://github.com/famcodings/local-viking-checkins-wp-plugin.git
$ cd local-viking-checkins-wp-plugin
```
### Inject your API Keys
Replace `<API-KEY>` with the Google MAP API key in `public/index.html` in the following script tag
```html
  <script
    src="https://maps.googleapis.com/maps/api/js?key=<API-KEY>&callback=initMap"
    defer
  ></script>
```
Replace the value for `GOOGLE_MAP_API_KEY` constant in `src/index.js` to have the actual Google MAP API key.
```javascript
const GOOGLE_MAP_API_KEY = "<API-KEY>";
```

Run these commands
```bash
$ npm i
$ npm run dev 
```
And finally to start dev server, run this command in a seperate terminal
```
$ npm run serve
```
