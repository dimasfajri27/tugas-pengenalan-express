let dataOrang = [
    {id : 1, name: "john", umur : 30, pekerjaan : "Penulis", JenisKelamin : "L"},
    {id : 4, name: "Banzema", umur : 34, pekerjaan : "Pemain Bola", JenisKelamin : "L"},
    {id : 5, name: "Sarah", umur : 27, pekerjaan : "Model", JenisKelamin : "P"},
    {id : 9, name: "Shohei Ohtani", umur : 28, pekerjaan : "Pemain Baseball", JenisKelamin : "L"},
    {id : 11,name: "Maria Sharapova", umur : 35, pekerjaan : "Petenis", JenisKelamin : "P"}
];

// membuat function untuk mengambil data array object yang di variabel dataOrang
function cariOrang(data, umur , gender){ // masukan parameternya yang ingin kita cari berdasarkan apa, di sini  saya berdasarkan umur dan gender
return data.filter(orang =>
    orang.umur >= umur && orang.JenisKelamin === gender
)

};

exports.getDataorang = (req, res) => { // membuat logic ngambil data orang
    const umur = parseInt(req.query.umur); // membuat si umur di masukan ke dalam url dengan menjadi string
    const gender = (req.query.gender); // membuat si gender di masukan ke dalam url juga dan menjadi string
    
    const hasil = cariOrang(dataOrang, umur ,gender);

    const output = hasil.map((orang,index) => 
        index + 1 + orang.name + 
    "- Pekerjaan :" + orang.pekerjaan +
    "- umur :"+ orang.umur + "Tahun");

    res.send(output.join("<br>"));
};
