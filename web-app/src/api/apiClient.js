const baseUrl = process.env.REACT_APP_GATEWAY_URL;

const get = async (urlFragment) => {
    let fetchResult = await fetch(`${baseUrl}/${urlFragment}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        }
    });
    return await fetchResult.json();
}

const post = async (urlFragment, bodyContents) => {
    let fetchResult = await fetch(`${baseUrl}/${urlFragment}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(bodyContents),
    });
    return await fetchResult.json();
}

module.exports = {
    get,
    post
}
