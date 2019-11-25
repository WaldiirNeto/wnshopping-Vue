// validators.js
export function isEmpty(value) {
    if (value === "") return true;
}


export function isUserAvailable(value) {
    if (value === "") return true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value.length > 10);
        }, 500);
    });
}