//2
const mahasiswa = {
    nama : "Agus Rahman",
    nim : "02042111002",
    email : "arh100802@gmail.com"
}

//3
const {nama,nim,email} = mahasiswa;

//4
console.log(nama);
console.log(nim);
console.log(email);

//5
const teman = ["Kurniawan","Anggi"];
const teman2 = ["Ryanda","Bagas"];
const teman3 = ["Fadli","Toyyib"];

//6
const temanteman = [...teman,...teman2,...teman3];
console.log(temanteman);