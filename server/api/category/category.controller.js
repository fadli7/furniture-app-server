var categoryList = [
    { cat_id: "1", cat_name: "ArmChair" },
    { cat_id: "2", cat_name: "Sofa" },
    { cat_id: "3", cat_name: "Side Table" },
    { cat_id: "4", cat_name: "Cofee Table" }
];

exports.list = function (req, res) {
    res.status(200);
    res.type("application/json");
    res.json(categoryList);
}