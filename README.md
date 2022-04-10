# Scores App


## Local deployment

1. Clone repo: ` git clone https://github.com/Aleksandrawoslx/scores-app.git`
2. `npm install`
2. ` npm start`
3. go to: `http://localhost:3000`

### Data sources

This implementation was made using open (unpaid) endpoints.

Events: 
` "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4328&s=2021-2022"`

`Id=4328`, gives us England Premier League 

Images:
` "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League"`


### Search implementation

Search is using fuzzy search - [fuse.js](https://fusejs.io/)

Search fields: home team, away team, venue. Search fields can be customized in fuzzy search options i.e. `keys: ["strHomeTeam", "strAwayTeam", "strVenue"]`

Search is case insensitive by dafault. You can add case sensitivity by adding: `isCaseSensitive: true` to config object.

Fuzieness threshold is strict `0.0` for exact search, you can have fun with changing it in fuse options: `threshold: 0.0`. Don't go above 0.6, it does not make any sense.

Search works on `keyup`. Empty search field defaults to all events state.

### Styling

Components and styling come from [grommet.io](http://grommet.io).

### Have fun


