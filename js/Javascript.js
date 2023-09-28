const bodyGreen = document.querySelector('body');
const heroGreen = document.querySelector('.hero');
const judulGreen = document.querySelector('.jdl');
const atapGreen = document.querySelector('.atap');
const bGreen = document.querySelectorAll('.atap-main');
const logoGreen = document.querySelector('img');
const tombolGreen = document.querySelector('button');
const iMusic = document.querySelector('.i-music');
const pMusic = document.querySelector('.p-music');


document.querySelector('.tombol-main-coba').onclick = () => {
    bodyGreen.classList.toggle('active');
    heroGreen.classList.toggle('active');
    judulGreen.classList.toggle('active');
    atapGreen.classList.toggle('active');
    bGreen.classList.toggle('active');
    logoGreen.classList.toggle('active');
    tombolGreen.classList.toggle('active');
    iMusic.classList.toggle('active');
    pMusic.classList.toggle('active');
};

let audio = new Audio('Sound.mp3');


document.querySelector('#i-music').onclick = (e) => {
  audio.play();
  e.preventDefault();
};

document.querySelector('#p-music').onclick = (e) => {
    audio.pause();
}


let nama = prompt(`Masukan nama "lengkap" anda`);
let logoSaya = document.querySelector('#logo-saya');
let namaJudul = document.querySelector('#jdl');
let mukaR = new Image('Rendra-p.png');


switch(nama){
  case 'Muhammad Rendra Harimurti':
    namaJudul.innerHTML = "Rendra NPC"
    logoSaya.src = 'Rendra-p.png';
    nama = "NPC atau anak GYM"
    break
  case 'Evan Zuhdi Adinata':
    namaJudul.innerHTML = "Evan Zuhdi"
    logoSaya.src = 'Evan.png';
    nama = "China"
    break
  case 'Rakadheo Gading Pratama':
    namaJudul.innerHTML = "king Jomoks"
    logoSaya.src = 'Raka.png';
    nama = "Bakam"
    break
  case 'Bela Rismayana':
    nama = "Rismot"
    break
};



let kabar = prompt(`halo ${nama},apa kabar anda hari ini? (baik/buruk/biasa)`)






switch(kabar){
  case 'baik':
    kabar = "Alhamdulilah kalo begitu saya akan membuat hari anda menjadi buruk👿"
  break
  case 'biasa':
    kabar = "Akan kubuat hari anda terasa tak biasa🙏🙏🙏"
  break
  case 'buruk':
    kabar = "Akan kubuat hari anda menjadi lebih buruk hahahayuukk😏😏"
  break
  default:
    kabar = "Ketik seperti yang ada di intruksi kalo tidak mengikuti maka akan berhadapan langsung tatap muka dengan Rendra NPC!!!!😡😡😡" 
  break
}
alert(`${kabar}`)
alert(`Terimakasih atas kerja bedanya`)
alert(`silahkan nikmati web yg belum selesai ini`)


