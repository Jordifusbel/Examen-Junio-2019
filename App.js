/**
 * Precios:
 *
 * Eyeholes: 25,
 * Turbulent Juice: 30,
 * Plumbus: 100,
 * 
 * Smiggles: 50,
 * Fleeb Juice: 35,
 */

/**
* Desayuno Eyeholes
*/

function EyeHoles() {
    return {
        "nombre": "Eyeholes",
        "pvp": 25,
        "empaquetado": "caja"
    }
}
function TurbulentJuice() {
    return {
        "nombre": "Turbulent Juice",
        "pvp": 30,
        "empaquetado": "tubo"
    }
}

function Desayuno() {
    return {
        "prepararEyeDes": function () {
            return {
                "EyeHoles": new EyeHoles(),
                "TurbulentJuice": new TurbulentJuice()
            }
        }
    }
}
function FastBreakTruck(desayuno) {
    if (desayuno == "EyeHoles") {
        return {
            "pack": new Desayuno(),
            "mostrarItems": function () {
                console.log("Item: " + EyeHoles().nombre + ", Empaquetado: " + EyeHoles().empaquetado + ", Precio: " + EyeHoles().pvp)
                console.log("Item: " + TurbulentJuice().nombre + ", Empaquetado: " + TurbulentJuice().empaquetado + ", Precio: " + TurbulentJuice().pvp)
            },
            "getCoste": function () {
                return EyeHoles().pvp + TurbulentJuice().pvp;
            }
        }
    }
    if (desayuno == "Smiggles") {
        return {
            "pack": new Desayuno(),
            "mostrarItems": function () {
                console.log("Item: " + Smiggles().nombre + ", Empaquetado: " + Smiggles().empaquetado + ", Precio: " + Smiggles().pvp)
                console.log("Item: " + FleebJuice().nombre + ", Empaquetado: " + FleebJuice().empaquetado + ", Precio: " + FleebJuice().pvp)
            },
            "getCoste": function () {
                return Smiggles().pvp + FleebJuice().pvp;
            }
        }
    }
    
}
var eyeDes = new FastBreakTruck("EyeHoles");
console.log(Desayuno);
console.log("\nNo abras la caja de Eyeholes!");
eyeDes.mostrarItems();
console.log("Precio pedido: " + eyeDes.getCoste());


/**
 * Desayuno Smiggles
 */

function Smiggles() {
    return {
        "nombre": "Smiggles",
        "pvp": 50,
        "empaquetado": "caja"
    }
}
function FleebJuice() {
    return {
        "nombre": "Fleeb Juice",
        "pvp": 35,
        "empaquetado": "tubo"
    }
}

var smigDes = new FastBreakTruck("Smiggles");
console.log("\nSmiggles per als nins!");
smigDes.mostrarItems();
console.log("Precio pedido: " + smigDes.getCoste());

/**
 * Plumbus
 */
function Plumbus() {
    return {
        "nombre": "Plumbus",
        "pvp": 100,
        "empaquetado": "caja"
    }
}
// var eyeDes = new FastBreakTruck("Plumbus");
// FastBreakTruck.incluirJuguete(eyeDes);
// console.log("\nEyeholes con plumbus!");
// eyeDes.mostrarItems();
// console.log("Precio pedido: " + eyeDes.getCoste());