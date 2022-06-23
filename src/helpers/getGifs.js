export const getGifs = async (category) => {
    const key = 'NpN6ue7t3zwh2FwQAplFWnOvaKQwVMlu';
    const limitImage = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=${limitImage}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}