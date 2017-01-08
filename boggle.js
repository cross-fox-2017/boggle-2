//Kata Apapun Yang Tidak Ada Dalam Gird Bisa di Cari
// Untuk Melengkapi ini Gunakan Titik Tengah Dan Mengecek Ke Berbagai Arah, Jika ada maka titik mengah tersebut diganti dengan data pada arah yang ditemukan, hahaha :D Pusing gk tuhhh
function boggle2(cari) {

    var gird = [];
    var tampungGrid = [];
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    possible = possible.split("")
    for (var i = 0; i < 4; i++) {
        var arr = [];
        for (var j = 0; j < 4; j++) {
            var acak = Math.floor(Math.random() * possible.length)
            arr.push(possible[acak])
            tampungGrid.push(possible[acak])
            possible.splice(acak, 1)
        }
        gird.push(arr)
    }

    console.log(gird);
    cari = cari.split("")
    var status = true;
    var nilaiTengah = 0;
    var idPembanding = [1, 3, 4, 5]
    var hasilBanding = []
    for (var i = 0; i < cari.length; i++) {
        if (tampungGrid.indexOf(cari[i]) == -1) {
            status = false;
            break;
        } else if (i == cari.length - 1) {
            var tmp = tampungGrid.indexOf(cari[i])
            if (hasilBanding.indexOf(tmp) != -1) {
                status = true;
            } else {
                status = false;
            }
        } else {
            nilaiTengah = tampungGrid.indexOf(cari[i]);
            hasilBanding = []
            for (var k = 0; k < 4; k++) {
                hasilBanding.push(nilaiTengah + idPembanding[k])
                hasilBanding.push(nilaiTengah - idPembanding[k])
            }
        }
    }

    if (status == true) {
        return `Kata "${cari.join("")}" ADA di gird`
    } else {
        return `Kata "${cari.join("")}" TIDAK ada di gird`
    }

}

console.log(boggle2("AWC"));
