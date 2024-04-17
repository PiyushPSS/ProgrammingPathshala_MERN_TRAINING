const getAllProducts = async (req, res) => {
    // await fs_promise.readFile("./data.json", "utf-8");
    // const arr = JSON.parse(data).products;
    res.json({
        status: 'success',
        results: 0,
        data: {
            products: []
        }
    })
}


module.exports = {
    getAllProducts
}