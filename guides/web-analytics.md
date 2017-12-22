# Web analytics

We use Google Analytics on most of our sites. It's free ([within limits](https://support.google.com/analytics/answer/1070983?hl=en)), it's easy to implement and there aren't many things it can't track.

The login details for access are kept in 1Password, search for "Google Analytics".

## Implementing

We add Google Analytics via [gtag.js](https://developers.google.com/analytics/devguides/collection/gtagjs/). If you're using [whippet-theme](https://github.com/dxw/whippet-theme), the code is already included and you just have to enter the correct tracking ID.

### Event tracking

If there are specific events you want to track that Google Analytics will not track by default (e.g. clicks on links to external sites, file downloads), you will need to implement a custom event, as per [Google's instructions](https://developers.google.com/analytics/devguides/collection/gtagjs/sending-data).

It's important to note the section on [handling timeouts](https://developers.google.com/analytics/devguides/collection/gtagjs/sending-data#handle_timeouts). If you don't do that, the links you are tracking won't work if GA doesn't load (e.g. if the user has a browser extension that blocks trackers).

## Configuring

There are a few basic steps it's worth following for any site you've set up in Google Analytics:

* Set up an unfiltered view that records all traffic, including spam. You won't use this for most analysis, put it provides a control you can compare against, and a backup in case you get the filtering wrong on other views.
* Set up a "main" view that has Google's "Bot filtering" activated (found under Admin > View Settings). This should automatically remove the majority of spam traffic.
* You may also want to filter out internal traffic on the main view (e.g. from within the dxw office, or staging/localhost versions of the site). You can do this by IP and hostname.
* To avoid double-counting page views that differ only by query string, [follow Google's advice](https://support.google.com/analytics/answer/1009671?hl=en) to build a list of query parameters your site receives, then blacklist the ones you don't care about using the field in View Settings.
* Set up [Google Search Console](https://www.google.com/webmasters/tools/) (formerly Google Webmaster Tools), and give Analytics access under Acquisition > Search Console. This will allow you to see the search queries people are using that return the site in Google results.

Take some time to think about what activity on the site you might want to track. **If you do not record a user action at the time it happens, it is lost forever**, so the more you can set up in advance (e.g. goals for transactions such as newsletter sign-ups, recording of on-site search terms), the better.

## Useful resources

* [GOV.UK: Using data to improve your service](https://www.gov.uk/service-manual/measuring-success/using-data-to-improve-your-service-an-introduction)
