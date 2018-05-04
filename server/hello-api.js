const helloApi = function (req, res){
    const data = {
        foo: 1,
        bar: 2
    };
    res.json(data);
};

module.exports = helloApi;