(function () {
  const url = new URL(window.location.href);
  const query = url.searchParams.get("q");

  if (!query) return;

  const hasBeenToggled = sessionStorage.getItem("ai_toggled") === query;
  if (hasBeenToggled) return;

  const trimmed = query.trim();
  let newQuery = "";

  if (trimmed.endsWith("-ai")) {
    newQuery = trimmed.slice(0, -3).trim();
  } else {
    newQuery = `${trimmed} -ai`;
  }

  if (newQuery !== trimmed) {
    sessionStorage.setItem("ai_toggled", newQuery);
    
    url.searchParams.set("q", newQuery);
    window.location.replace(url.toString());
  }
})();