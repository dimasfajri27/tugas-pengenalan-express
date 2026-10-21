let dataOrang = [
    {id : 1, name: "john", umur : 30, pekerjaan : "Penulis", JenisKelamin : "L"},
    {id : 4, name: "Banzema", umur : 34, pekerjaan : "Pemain Bola", JenisKelamin : "L"},
    {id : 5, name: "Sarah", umur : 27, pekerjaan : "Model", JenisKelamin : "P"},
    {id : 9, name: "Shohei Ohtani", umur : 28, pekerjaan : "Pemain Baseball", JenisKelamin : "L"},
    {id : 11,name: "Maria Sharapova", umur : 35, pekerjaan : "Petenis", JenisKelamin : "P"}
];

exports.getDataorang = (req, res) => { // membuat logic ngambil data orang
    const umur = parseInt(req.query.umur); // membuat si umur di masukan ke dalam url dengan menjadi string
    const gender = (req.query.gender); // membuat si gender di masukan ke dalam url juga dan menjadi string
    const orang = dataOrang.find(d => d.umur === umur && d.JenisKelamin === gender); 

    res.json(orang);
};