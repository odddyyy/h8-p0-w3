var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
            ]

function dataHandling(array){
    var ID = [];
    var name = [];
    var ttl = [];
    var hobi = [];

    for (i=0;i<array.length;i++){  
        var j = 0;  
        ID.push(array[i][j])
        name.push(array[i][j+1]);
        ttl.push(array[i][j+2]+ ` ` +array[i][j+3]);
        hobi.push(array[i][j+4])
    }

    for (i=0;i<array.length;i++){
        console.log(`Nomor ID: ` + ID[i]);
        console.log(`Nama Lengkap: ` + name[i]);
        console.log(`TTL: ` + ttl[i]);
        console.log(`Hobi: ` + hobi[i]);
        console.log();
    }
}

dataHandling(input)