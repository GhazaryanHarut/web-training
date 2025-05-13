async function fetchWithRetry(url: string, options: number): Promise<Response> {
    let count = 0;
    async function tryFetch() {
        if (count >= options) {
            return Promise.reject(new Error('too many tries'));
        }
        return fetch(url).then(response => {
            return response;
        }).catch(_ => {
            count++;
            return tryFetch();
        });
    }
    return tryFetch();
}


fetchWithRetry('https://sapleapis.com/futurama/api/characters', 4)
    .then(console.log)
    .catch(console.log)