export async function getAllEmployeer(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            });
    });
}

export function getEmployee(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            });
    });
}
