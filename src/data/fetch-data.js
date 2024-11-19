let cache = new Map();

export function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url) {
  return await fetch(url)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
}
