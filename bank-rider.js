const widgetContainer = document.createElement("div");
widgetContainer.innerHTML = `
<div class="tradingview-widget-container">
  <div id="tradingview_ce506"></div>
  <div class="tradingview-widget-copyright">
    <a href="https://www.tradingview.com/symbols/NYSE-CS/" rel="noopener" target="_blank">
      <span class="blue-text">CS chart</span>
    </a> by TradingView
  </div>
</div>
`;
document.body.appendChild(widgetContainer);

const style = document.createElement("style");
style.innerHTML = `
  .highlighted {
    background-color: #00cc99 !important;
    color: #000000 !important;
  }
`;
document.head.appendChild(style);

const tradingViewScript = document.createElement("script");
tradingViewScript.src = "https://s3.tradingview.com/tv.js";
widgetContainer.appendChild(tradingViewScript);

const tradingViewWidgetScript = document.createElement("script");
tradingViewWidgetScript.innerHTML = `
setTimeout(function() {

  new TradingView.widget(
    {
      "width": "100%",
      "height": "100%",
    "symbol": "NYSE:CS",
    "timezone": "Etc/UTC",
    "theme": "light",
    "style": "2",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "withdateranges": true,
    "range": "5D",
    "allow_symbol_change": true,
    "watchlist": [
      "NYSE:SI",
      "NASDAQ:SIVB",
      "NASDAQ:SBNY",
      "NYSE:FRC",
      "NYSE:CS"
    ],
    "container_id": "tradingview_ce506"
  }
    );

     


}, 1000);
`;

widgetContainer.appendChild(tradingViewWidgetScript);

widgetContainer.style.position = "fixed";
widgetContainer.style.top = "50%";
widgetContainer.style.left = "50%";
widgetContainer.style.width = "90%";
// widgetContainer.style.width = '90vw'

widgetContainer.style.height = "90%";
widgetContainer.style.height = "90vh";
widgetContainer.style.minHeight = "400px";

widgetContainer.style.opacity = "0.3";
widgetContainer.style.transform = "translate(-50%, -50%)";
widgetContainer.style.zIndex = "999999";

widgetContainer.style.pointerEvents = "none";

widgetContainer.addEventListener("keydown", function (event) {
  event.stopPropagation();
});

function toggleVisibility() {
  if (widgetContainer.style.visibility === "hidden") {
    widgetContainer.style.visibility = "visible";
  } else {
    widgetContainer.style.visibility = "hidden";
  }
}

function toggleIntactivity() {
  if (widgetContainer.style.pointerEvents === "none") {
    console.log("setting to auto");
    widgetContainer.style.pointerEvents = "auto";
  } else {
    console.log("setting to none");
    widgetContainer.style.pointerEvents = "none";
  }
}

document.addEventListener("dblclick", function (event) {
  toggleIntactivity();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    toggleIntactivity();
  }

  if (event.key === "q") {
    console.log("toggle visibility");
    toggleVisibility();
  }
});

// Create the buttons
const visibilityButton = document.createElement("button");
visibilityButton.textContent = "👀";
visibilityButton.style.position = "fixed";
visibilityButton.style.top = "10px";
visibilityButton.style.right = "10px";
visibilityButton.style.zIndex = "1000000";
visibilityButton.style.fontFamily = "Arial, sans-serif";
visibilityButton.style.fontSize = "16px";
visibilityButton.style.fontWeight = "bold";
visibilityButton.style.color = "#ffffff";
visibilityButton.style.backgroundColor = "#ff33cc";
visibilityButton.style.border = "2px solid #ffffff";
visibilityButton.style.borderRadius = "5px";
visibilityButton.style.cursor = "pointer";
visibilityButton.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
document.body.appendChild(visibilityButton);

const interactivityButton = document.createElement("button");
interactivityButton.textContent = "📈";
interactivityButton.style.position = "fixed";
interactivityButton.style.top = "10px";
interactivityButton.style.right = "50px";
interactivityButton.style.zIndex = "1000000";
interactivityButton.style.fontFamily = "Arial, sans-serif";
interactivityButton.style.fontSize = "16px";
interactivityButton.style.fontWeight = "bold";
interactivityButton.style.color = "#ffffff";
interactivityButton.style.backgroundColor = "#3399ff";
interactivityButton.style.border = "2px solid #ffffff";
interactivityButton.style.borderRadius = "5px";
interactivityButton.style.cursor = "pointer";
interactivityButton.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
document.body.appendChild(interactivityButton);

function toggleHighlight(button) {
  button.classList.toggle("highlighted");
}
// Add event listeners to the buttons
visibilityButton.addEventListener("click", function () {
  toggleVisibility();
  toggleHighlight(visibilityButton);
});

interactivityButton.addEventListener("click", function () {
  toggleIntactivity();
  toggleHighlight(interactivityButton);
});

// Create a tweet container and add the embedded tweet
const tweetContainer = document.createElement("div");
tweetContainer.innerHTML = `
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">5 Bank Failures in roughly a week:“There’s clearly a larger phenomenon going on here.” -<a href="https://twitter.com/DavidSacks?ref_src=twsrc%5Etfw">@DavidSacks</a> <a href="https://t.co/fT5gzbEUlY">pic.twitter.com/fT5gzbEUlY</a></p>&mdash; ALL-IN TOK (@all_in_tok) <a href="https://twitter.com/all_in_tok/status/1636761791576285191?ref_src=twsrc%5Etfw">March 17, 2023</a>
    </blockquote>
  `;
document.body.appendChild(tweetContainer);

// Load the Twitter script
const twitterScript = document.createElement("script");
twitterScript.async = true;
twitterScript.src = "https://platform.twitter.com/widgets.js";
twitterScript.charset = "utf-8";
document.head.appendChild(twitterScript);

// Add the necessary CSS styles
const tweetStyle = document.createElement("style");
tweetStyle.innerHTML = `
#tweet-container {
  position: fixed;
  bottom: 10px;
  right: 10px;
  transform: scale(0.5);
  z-index: 1000001;
  width: 30%;
  transform-origin: bottom right;

}
  `;
document.head.appendChild(tweetStyle);

// Assign the ID to the tweet container
tweetContainer.id = "tweet-container";

const tweetVisibilityButton = document.createElement("button");
tweetVisibilityButton.textContent = "🐦";
tweetVisibilityButton.style.position = "fixed";
tweetVisibilityButton.style.top = "10px";
tweetVisibilityButton.style.right = "90px";
tweetVisibilityButton.style.zIndex = "1000000";
tweetVisibilityButton.style.fontFamily = "Arial, sans-serif";
tweetVisibilityButton.style.fontSize = "16px";
tweetVisibilityButton.style.fontWeight = "bold";
tweetVisibilityButton.style.color = "#ffffff";
tweetVisibilityButton.style.backgroundColor = "#00cc99";
tweetVisibilityButton.style.border = "2px solid #ffffff";
tweetVisibilityButton.style.borderRadius = "5px";
tweetVisibilityButton.style.cursor = "pointer";
tweetVisibilityButton.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
document.body.appendChild(tweetVisibilityButton);

// 2. Add event listener to the new button for toggling tweet visibility
tweetVisibilityButton.addEventListener("click", function () {
  toggleTweetVisibility();
  toggleHighlight(tweetVisibilityButton);
});

// 3. Create a new function to handle the tweet visibility toggling
function toggleTweetVisibility() {
  if (tweetContainer.style.display === "none") {
    tweetContainer.style.display = "block";
  } else {
    tweetContainer.style.display = "none";
  }
}