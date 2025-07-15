
let markHeight, markWeight;
let jhonHeight, jhonWeight;

markHeight = 1.88
markWeight = 95

jhonHeight = 1.76
jhonWeight = 85

let markBMI = markWeight / (markHeight ** 2);  
let jhonBMI = jhonWeight / (jhonHeight ** 2);
console.log(markBMI.toFixed(2), jhonBMI.toFixed(2))


if (markBMI > jhonBMI) {
    console.log(`Marks BMI ${markBMI.toFixed(2)} is higher than Jhons${jhonBMI.toFixed(2)}`)
}

else {
    console.log(`Johns BMI ${jhonBMI.toFixed(2)} is higher than Marks ${markBMI.toFixed(2)}`)
}

