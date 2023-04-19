// 1
let i = 0
for (let i = 0; i <= 50; i++) {
    console.log(i); 
}

// 2
let a = 0
while (a <= 20){
    console.log(a);
    a++
}

// 3
do{
    console.log(i)
    i++
}while(i <= 30)

// 4
const numbers = [1,2,5,7,8,10,23,24,26]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2=== 0){
        console.log(numbers[i])
    } 

}

// 5
const currentDay = new Date().getDay();
switch (currentDay) {
    case 0:
        console.log("კვირა");
    break;
    case 1:
     console.log("ორშაბათი");
    break;
    case 2:
     console.log("სამშაბათი");
    break;
    case 3:
     console.log("ოთხშაბათი");
    break;
    case 4:
     console.log("ხუთშაბათი");
    break;
    case 5:
     console.log("პარასკევი");
    break;
    case 6:
     console.log("შაბათი");
    break;
}

// 6
const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "6.8886",
		diffFormated: "0.0082",
		rate: 6.8886,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0082,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.4869",
		diffFormated: "0.0334",
		rate: 6.4869,
		name: "სომხური დრამი",
		diff: -0.0334,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1820",
		diffFormated: "0.0010",
		rate: 1.182,
		name: "ჩეხური კრონა",
		diff: 0.001,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7599",
		diffFormated: "0.0056",
		rate: 2.7599,
		name: "ევრო",
		diff: -0.0056,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},

];

for (let i = 0; i < currencies.length; i++) {
    if (currencies[i].rate > 5) {
        console.log(currencies[i].name, currencies[i].rate)
    }
    
}