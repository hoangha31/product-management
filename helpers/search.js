module.exports = (query) => {
    let objectSearch = {
        keyword: ""
    }

    if (query.keyword) {
        objectSearch.keyword = query.keyword;

        const regex = new RegExp(objectSearch.keyword, "i") // i tuc la khong phan biet chu hoa chu thuong  
        objectSearch.regex = regex;
    }

    return objectSearch
}