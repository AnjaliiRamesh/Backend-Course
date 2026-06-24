//async-await together handles promise


//earlier

/*
const p = new Promise((resolve, reject)=>{
resolve("promise resolved!!");
});

function getData(){
p.then((res) => console.log(res))

}
getData();
*/

//now
const p = new Promise((resolve, reject)=>{
resolve("promise resolved!!");
});

async function handleData(){
const val = await p;
// console.log(val);

}
// handleData();

const obj = {
    a: 10,
    x: () =>{
        console.log(this)
    },
};
obj.x();