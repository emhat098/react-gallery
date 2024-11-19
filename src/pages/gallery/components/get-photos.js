const getPhotos = async () => {
  const res = await fetch('https://picsum.photos/v2/list?page=1&limit=100');
  if (!res.ok) throw new Error('Failed to fetch photos');
  return res.json();
};

export default getPhotos;
