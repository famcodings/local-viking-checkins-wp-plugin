# local-viking-checkins-wp-plugin

### To Run Locally
Clone this repo
```bash
$ git clone https://github.com/famcodings/local-viking-checkins-wp-plugin.git
$ cd local-viking-checkins-wp-plugin
```
Replace `<API-KEY>` with the Google MAP API keys in these files `public/index.html` and `public/layout1.html` in the following script tag
```html
  <script
    src="https://maps.googleapis.com/maps/api/js?key=<API-KEY>&callback=initMap&v=weekly"
    defer
  ></script>
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
