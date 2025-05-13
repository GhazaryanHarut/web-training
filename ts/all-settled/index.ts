const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const promises = [
    delay(50).then(() => 42),
    delay(75).then(() => { throw 'nope'; })
];

function getResult(promises: Promise<any>[]): Promise<{ status: string, value?: any, reason?: any }[]> {
    return Promise.allSettled(promises).then(results => 
        results.map(result => 
            result.status === 'fulfilled' 
                ? { status: result.status, value: result.value } 
                : { status: result.status, reason: result.reason }
        )
    );
}
getResult(promises).then(results => {
    console.log(results);
});
