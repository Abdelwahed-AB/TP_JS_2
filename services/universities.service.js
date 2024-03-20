const axios = require("../config/axiosConfig");

let getUniversities = (req, res, next) => {
    const url = req.url;
    axios
        .get(url)
        .then((response) =>
            res.render("universities", { universities: response.data })
        )
        .catch((err) => console.error(err));
};

module.exports = getUniversities;
