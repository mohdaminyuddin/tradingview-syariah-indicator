let SYARIAH_COMPLIANCE_LIST = []

fetch('/background/stock-list.json')
  .then(i => i.json())
  .then(list => SYARIAH_COMPLIANCE_LIST = list)
  .catch(e => console.error('Something when wrong', e))

browser.tabs.onUpdated.addListener(listener)

function listener(id) {
  try {
    browser.tabs.sendMessage(id, {list: SYARIAH_COMPLIANCE_LIST})
  } catch (e) {
    console.error('Error Send message', e)
  }
}

