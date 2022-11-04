/**
 * Saves text input for search in state
 * @param {str} e
 */
function handleTextChange(e) {
  const title = e.target.value;
  const result = title.length ? filterShows(title, allShows) : allShows;

  setSearchTitle(title);
  setShows(result);
}

export { handleTextChange };
