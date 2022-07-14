class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    searchImage() {
        const keyword = this.queryStr.keyword ? {
            imgName: {
                $regex: this.query.keyword,
                $options: "i"
            }
        } : {}

        this.query = this.query.find({...keyword});
        return this;
    }

    pagination(perPageItem) {
        let page = Number(this.queryStr.page) || 1;
        let skipPage = perPageItem*(page-1);
        this.query = this.query.limit(perPageItem).skip(skipPage);
        return this;
    }
};

module.exports = ApiFeatures;