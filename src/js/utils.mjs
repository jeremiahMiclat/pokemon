export function renderListWithTemplate(
    templateFn,
    parentElement,
    list,
    position = "afterbegin",
    clear = true
) {
    if (clear) {
        parentElement.innerHTML = "";
    }
    const htmlString = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, htmlString.join(""));
}

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

export async function renderWithTemplate(
    templateFn,
    parentElement,
    data,
    callback,
    position = "afterbegin",
    clear = true
) {
    if (clear) {
        parentElement.innerHTML = "";
    }
    const htmlString = await templateFn(data);
    parentElement.insertAdjacentHTML(position, htmlString);
    if (callback) {
        callback(data);
    }
}

// retrieve data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function loadHeaderFooter() {
    // Load the header and footer templates in from our partials.
    const headerTemplateFn = loadTemplate("/partials/header.html");
    const footerTemplateFn = loadTemplate("/partials/footer.html");
    // Grab the header and footer elements out of the DOM
    const headerElement = document.querySelector("header.divider");
    const footerElement = document.querySelector("footer");
    headerTemplateFn().then(html => {
        // deck data
        const deckData = getLocalStorage("pokemon-deck");
        // obtained HTML content of the template
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // render the header
        const modifiedHeaderTemplate = doc.documentElement.outerHTML;
        renderWithTemplate(() => Promise.resolve(modifiedHeaderTemplate), headerElement);
    });
    // Render the header and footer (renderWithTemplate)
    // renderWithTemplate(headerTemplateFn, headerElement);
    renderWithTemplate(footerTemplateFn, footerElement);
}