const fetchDataWithCallback  = (callback) => {
    console.log("กำลังดึงข้อมูล callback...");
    setTimeout(() => {
        const data = "ข้อมูลที่ไดจาก callback เรียบร้อย";
        callback(null,data);
    }, 2000);
}

fetchDataWithCallback((error, data) => {
    if(error) {
        console.log("เกิดข้อผิดพลาด:", error);
    } else {
        console.log(data);
    }
});

const fetchDataWithPromise = () => {
    return new Promise ((resolve, reject) => {
        console.log("กำลังดึงข้อมูลด้วย promise...");
        setTimeout(() => {
        const data = "ข้อมูลที่ไดจาก promise เรียบร้อย"
        resolve(data);
    }, 4000);
    });
}

fetchDataWithPromise()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("เกิดข้อผิดพลาด:", error);
    });
       

    

