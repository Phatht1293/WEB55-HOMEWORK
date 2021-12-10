var fs= require('fs')
const { resolve } = require('path')
const path = require('path')


//creating file//
fs.writeFile('sinhvien.json',`[{"name:"Phat","age":29,"class":"web55"}]`,function(err){
    if(err) throw err
    console.log('da tao xong file sinhvien.json')
})


//reading file//

fs.readFile(path.resolve(__dirname,'sinhvien.json'),'utf-8',(err,data)=>{
    const dataConvert=JSON.parse(data)
    console.log("Ds Hoc Sinh:",dataConvert)
})

//

//add new student//
dataConvert.push({name:"Phu",age:18,class:"web55"})
dataAdd=JSON.stringify(dataConvert)

fs.writeFile(path.resolve(__dirname,'sinhvien.json'),dataAdd,function(err){
    if(err) return console.log(err)
    console.log("===Tao thanh cong===")
})


//modifier student//
dataUpdate={name:"Binh", age:"30"};
    for(const student in dataConvert){
        if(dataConvert[student].name===dataUpdate.name){
            dataConvert.splice(student,1);
            dataConvert.push(dataUpdate)
            let dataSave=JSON.stringify(dataConvert);
            fs.writeFile(path.resolve(__dirname, 'sinhvien.json'), dataSave, function (err) {
                if (err) return console.log(err);
                console.log("===Cap nhat thanh cong===");
            });
        }
    }


