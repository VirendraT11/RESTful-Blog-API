const paginate = (array, page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedItems = array.slice(startIndex, endIndex);
    const totalPages = Math.ceil(array.length / limit);

    return {
        data : paginatedItems,
        currentPage: parseInt(page),
        totalPages,
    };
};

module.exports = paginate;