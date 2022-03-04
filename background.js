const urls = [
	"https://place_all_your_url_here.com",
]

function createScript(bearer) {
	return `
		const auth = '${bearer}';
		const button = document.createElement('button');
		button.innerHTML = "Copy Auth";
		button.onclick = () => navigator.clipboard.writeText(auth);
		document.body.prepend(button);
	`
}

function printAuth(detail) {
	for (var header of detail.requestHeaders) {
		if (header.name == "Authorization") {
			browser.tabs.executeScript({
				code: createScript(header.value), 
			});
		}
	}
}

browser.webRequest.onBeforeSendHeaders.addListener(
  printAuth,
  { urls },
  ["requestHeaders"]
);
