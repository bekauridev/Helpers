/**
 
 * document.querySelectorAll
 * @param {string} selector - The CSS selector to search for elements.
 * @returns {NodeList} - A list of DOM elements that match the selector.
 */
function qsAll(selector) {
  return document.querySelectorAll(selector);
}

/**
 * document.querySelector
 * @param {string} selector - The CSS selector to search for an element.
 * @returns {HTMLElement | null} - The first DOM element that matches the selector, or null if none is found.
 */
function qs(selector) {
  return document.querySelector(selector);
}

/**
 * document.getElementById
 * @param {string} id - The ID of the DOM element to retrieve.
 * @returns {HTMLElement | null} - The DOM element with the specified ID, or null if not found.
 */
function getById(id) {
  return document.getElementById(id);
}

/**
 * Checks if a given string is valid JSON.
 * @param {string} jsonString - The string to be checked.
 * @returns {boolean} - Returns true if the string is valid JSON, otherwise false.
 */
function isValidJSON(jsonString) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * localStorage.getItem() |
 * Retrieves data from local storage for the specified collection.
 * @param {string} collection - The name of the collection in local storage.
 * @returns {any[]} - An array containing the data from the specified collection, or an empty array if the collection is empty or does not exist.
 */
function getData(collection) {
  const data = localStorage.getItem(collection);
  return data && isValidJSON(data) ? JSON.parse(data) : [];
}

/**
 * localStorage.setItem() |
 * Saves data to local storage for the specified collection.
 * @param {string} collection - The name of the collection in local storage.
 * @param {any[]} data - The data to be saved to the collection.
 */
function saveData(collection, data) {
  localStorage.setItem(collection, JSON.stringify(data));
}

/**
 * insertAdjacentHTML() |
 * Inserts HTML content into a DOM element at the specified location.
 * @param {HTMLElement | null} element - The DOM element to insert content into.
 * @param {InsertPosition} location -The position relative to the element's current content where the new HTML should be inserted.
 * Recommended values: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'.
 * @param {string} content - The HTML content to be inserted.
 */
function insertHtml(element, location, content) {
  element?.insertAdjacentHTML(location, content);
}

/**
 * innerHTML |
 * Replaces the content of a DOM element with the given HTML content.
 * @param {HTMLElement | null} element - The DOM element whose content should be replaced.
 * @param {string} content - The new HTML content for the element.
 */
function render(element, content) {
  if (element) element.innerHTML = content;
}

/**
 * Deletes the specified DOM elements from the document.
 * @param {...HTMLElement} elements - The DOM elements to be deleted.
 */
function deleteElements(...elements) {
  elements.forEach((element) => element.remove());
}
