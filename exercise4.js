var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(array){

    // adding string to existing array
    array.splice(1,4, array[1]+`Elsharawy`, `Provinsi` + array[2], array[3], `Pria`, `SMA International Metro`);
    console.log(array);

    let month = array[3];

    //splitting the value inside month
    month.split();
    let newMonth = month.split(`/`);
    month = month[3]+month[4];

    //generating case for converting month from number to sentence
    switch(month){
        case `01`:
            month = `Januari`;
            break;
        case `02`:
            month = `Februari`;
            break;
        case `03`:
            month = `Maret`;
            break;
        case `04`:
            month = `April`;
            break;
        case `05`:
            month = `Mei`;
            break;
        case `06`:
            month = `Juni`;
            break;
        case `07`:
            month = `Juli`;
            break;
        case `08`:
            month = `Agustus`;
            break;
        case `09`:
            month = `September`;
            break;
        case `10`:
            month = `Oktober`;
            break;
        case `11`:
            month = `November`;
            break;
        case `12`:
            month = `Desember`;
            break;
    }
    console.log(month);

    //sorting the month value
    console.log(newMonth.sort((a,b) => b-a));
    newMonth = array[3];

    //join month with `-`
    console.log(newMonth.split(`/`).join(`-`));

    //restricting name into 15 characters
    console.log(array[1].slice(0,15));
}







dataHandling2(input);
