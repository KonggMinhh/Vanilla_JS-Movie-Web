"use strict";
const api_key = "231273cfc301d08023d40de07de5b5db";
const imageBaseURL = "https://image.tmdb.org/t/p/";

/**
 * Fetch data from a server using the 'url' and passes
 * the result in JSON data to a 'callback' function,
 * along with an optional parameter if has 'optionalParas'
 */
const fetchData = function (url, callback, optionalParam) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
