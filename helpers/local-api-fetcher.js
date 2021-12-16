export default async function(path) {
    const url = process.env.NEXTAUTH_URL;
    const urlToFetch = url + path;
    const response = await fetch(urlToFetch);
    const data = await response.json();

    return data;
}