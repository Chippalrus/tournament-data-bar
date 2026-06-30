# Tournament Data Bar
This is specifically built for Starcraft: Broodwar, but project can be adapted for other uses. It runs on Astro to pull data from google sheets to display data for OBS browser source overlay. This is a tool for casters to easily display match data and easily edit them via Google Sheets without fiddling too much with OBS.

# Google Sheet setup
This specific build/deployment requires Google Sheets to have these specific headers. (Not in any order)
```
Bracket, Match, Map, A, A_Score, B, B_Score, A_Race, B_Race
```

# URL Parameters
By default 'sheetid' is pointed to an empty google Sheet and 'sheetname' points to "Sheet3."
You have to input your own Google Sheet ID and Sheet Name in order for this to function or display anything.
```
https://chippalrus.dev/tournament-data-bar?sheetid={Google Sheet ID}&?sheetname={Google Sheet Name}
```

# Operation
In order to udpate the data on the page, simply click on the bar itself.
To do this in the OBS Browser Source, you can use browser 'Interact' to click objects in the page
1. Select the browser source
2. Right click scene or the browser source 
3. Select 'Interact'

This will pull up a window to allow you to interact with the source.

# Adaptation 
If you want to use this for other games or other uses, clone this project and host it.

# The Maybe Updates/Ideas
>> Auto polling (Polls for updates automatically)
>> CSS gradient bar (Current background is done via image)