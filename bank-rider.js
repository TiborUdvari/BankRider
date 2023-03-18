const widgetContainer = document.createElement('div')
widgetContainer.innerHTML = `
<div class="tradingview-widget-container">
  <div id="tradingview_ee0a7"></div>
  <div class="tradingview-widget-copyright">
    <a href="https://www.tradingview.com/symbols/NYSE-CS/" rel="noopener" target="_blank">
      <span class="blue-text">CS chart</span>
    </a> by TradingView
  </div>
</div>
`
document.body.appendChild(widgetContainer)

const tradingViewScript = document.createElement('script')
tradingViewScript.src = 'https://s3.tradingview.com/tv.js'
widgetContainer.appendChild(tradingViewScript)

const tradingViewWidgetScript = document.createElement('script')
tradingViewWidgetScript.innerHTML = `
setTimeout(function() {

    const widget = new TradingView.widget({
        "width": "100%",
        "height": "100%",
        "symbol": "NYSE:CS",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "2",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_ee0a7",
        "studies": [
          ["compare", {"inputs": {"symbols": "NYSE:CS,NASDAQ:NVDA"}}]
        ]
      });

      window.widget = widget;
      console.log(widget);
     


}, 1000);
`

widgetContainer.appendChild(tradingViewWidgetScript)

widgetContainer.style.position = 'fixed'
widgetContainer.style.top = '50%'
widgetContainer.style.left = '50%'
widgetContainer.style.width = '90%'
// widgetContainer.style.width = '90vw'

widgetContainer.style.height = '90%'
widgetContainer.style.height = '90vh'
widgetContainer.style.minHeight = '400px'

widgetContainer.style.opacity = '0.3'
widgetContainer.style.transform = 'translate(-50%, -50%)'
widgetContainer.style.zIndex = '999999'

widgetContainer.style.pointerEvents = 'none'

widgetContainer.addEventListener('keydown', function (event) {
  event.stopPropagation()
})

function toggleVisibility() {
  if (widgetContainer.style.visibility === 'hidden') {
    widgetContainer.style.visibility = 'visible'
  } else {
    widgetContainer.style.visibility = 'hidden'
  }
}

function toggleIntactivity() {
  if (widgetContainer.style.pointerEvents === 'none') {
    console.log('setting to auto')
    widgetContainer.style.pointerEvents = 'auto'
  } else {
    console.log('setting to none')
    widgetContainer.style.pointerEvents = 'none'
  }
}

document.addEventListener('dblclick', function (event) {
  toggleIntactivity()
})

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    toggleIntactivity()
  }

  if (event.key === 'q') {
    console.log('toggle visibility')
    toggleVisibility()
  }
})