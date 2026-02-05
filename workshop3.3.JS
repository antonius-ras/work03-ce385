
const fetchDataFromServer1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Server 1: Data OK'), 2000);
});


const fetchDataFromServer2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Server 2: Connection Failed'), 1000);
});

const fetchDataFromServer3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Server 3: Data OK'), 3000);
});


console.log("เซิร์ฟเวอร์ใดที่ตอบกลับก่อน");
Promise.any([fetchDataFromServer1, fetchDataFromServer2, fetchDataFromServer3])
    .then((result) => console.log("เซิร์ฟเวอร์ที่สำเร็จ:", result )) 
    
    .catch((err) => console.error("ไม่มีเซิร์ฟเวอร์ใดสำเร็จ:", err));

Promise.allSettled([fetchDataFromServer1, fetchDataFromServer2, fetchDataFromServer3])
    .then((results) => {
        console.log("\nสรุปผลการตอบกลับจากทุกเซิร์ฟเวอร์");
        results.forEach((res, index) => {
            console.log(`Server ${index + 1}: สถานะ=${res.status}, ค่า=${res.value || res.reason}`);
        });
    });