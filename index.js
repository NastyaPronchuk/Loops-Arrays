 for (i=1; i >= 100; i++) {
     console.log(i);
 }

  for (i= 100; i > 0 ; i--) {
     console.log(i);
 }

  for (i=1; i < 101; i++) {
     console.log(i);
 }

  for (i= 0; i < 100; i++) {
     console.log(i+1);
 }

  for (i= 0; i < 100; i++) {
     console.log(100-i);
 }

  for (i= 0; i < 100; i = i + 2) {
     console.log(100-i)
     }

      for (i= 0; i < 100; i+=2) {
     console.log(100-i)
     }

      for (i= 0; i < 100; i+=2) {
      if (i % 2 === 0)
     console.log(100-i)
     }

      for (i= 0; i <= 50; i+=2) {
     console.log(i*2)
     }

     let i = 0
while (i < 100) {
  console.log (i);
  i++;
}

do {
  console.log (i);
  i++;
} while (i < 100)

const products = ["Tesla X","Ford F150"];
console.log(products[0]);

const products = ["Tesla X","Ford F150"];
products[2] = "Ferrari LaDerrari";

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}


const prod = ["Tesla X","Ford F150"];
prod[2]= "Ferrari LaFerrari";
prod.push("Lamborgini Hurracane");
prod.push("Renault Zoe");
//дірявий масив
prod[10] = "Lexus NX 200t";


for (let i = 0; i < prod.length; i++) {
  console.log(prod[i]);
}


const prod = ["Tesla X","Ford F150"];
prod[2]= "Ferrari LaFerrari";
prod.push("Lamborgini Hurracane");
prod.push("Renault Zoe");
//дірявий масив
prod[10] = "Lexus NX 200t";


//for (let i = 0; i < prod.length; i++) {
//  console.log(prod[i]);
//}

prod.forEach(printEl);

 function printEl(el) {
  console.log(el);
}

//анонімна функція
prod.forEach(function (el) {
  console.log(el);
});

// cтрілочна функція
prod.forEach((el) => {
  console.log(el);
});

//оптимізація
prod.forEach(el => {
  console.log(el))