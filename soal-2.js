const { send } = require("express/lib/response");

//2
const hewanBuas = ["Harimau","Singa","Beruang","Serigala"];
const hewanJinak = ["Kucing","Kelinci","Ayam"];

//3
const hewan = [...hewanBuas,...hewanJinak];

const cetakHewan = () => console.log(hewan);

const makananHewan = () => {
    let Whiskas, Kangkung, Sendal;
    [Whiskas,Kangkung,Sendal] = hewanJinak;

    return console.log("Wiskas : "+Whiskas + "\nKangkung : "+ Kangkung+"\nSendal : "+Sendal);

} 

makananHewan();

const tampil = new Promise((cetak) => {
    setTimeout(() => {
    cetak(cetakHewan());
    }, 5000);
   });

