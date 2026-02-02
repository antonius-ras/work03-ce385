function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = "ข้อมูลถูกดึงเรียบร้อย";
        callback(data);
    }, 2000);
}

function fetchDataWithPromise() {
    return new Promise ((resolve, reject)= {
        setTimeout(() => {
        const data = "ข้อมูลที่ไดจาก promise เรียบร้อย"
        
        
    }, 2000);
       

    

