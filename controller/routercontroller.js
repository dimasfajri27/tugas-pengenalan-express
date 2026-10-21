const r = 7;
const t = 10;
const angka = {r, t};

function HitungVolume(r,t){  // yang di alam kurung kurawal itu bisa dibilang property atau object
        return Math.PI * r ** 2 * t; // retrun dia mengembalikan nilai ke function
};

const volumeTabung = HitungVolume(r,t);//karena ada ini jadi si return tidak dikembalikan ke functon, dia jadinya di panggil ke variabell volumetabung

function HitungKeliling(r){
    return 2 * Math.PI * r;
};

const kelilingAlas = HitungKeliling(r);

function HitungLuas(r){
    return Math.PI * r ** 2;
}

const LuasAlas = HitungLuas(r);


// bagian handlerr
exports.getRumus = (req, res) => {
    res.status(200).json(angka);
};



exports.getHitungByNumber = (req, res) => {
const number = parseInt(req.params.angka);
res.send(
    "JariJari:" +  r  +  ",tinggi:" + t + 
    ",Volume tabung :"+ volumeTabung +
    ",Luas alas tabung :"+ LuasAlas +
    ",Keliling alas tabung :"+ kelilingAlas);
};