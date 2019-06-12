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
        "pvp": 25,
        "empaquetado": "caja"
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
}
var eyeDes = new FastBreakTruck("EyeHoles");
console.log(Desayuno);
console.log("\nNo abras la caja de Eyeholes!");
eyeDes.mostrarItems();
console.log("Precio pedido: " + eyeDes.getCoste());

/**
 * Desayuno Smiggles
 */

    // var smigDes = new FastBreakTruck(prepararSmiggles);
    // console.log("\nSmiggles per als nins!");
    // smigDes.mostrarItems();
    // console.log("Precio pedido: " + smigDes.getCoste());

/**
 * Plumbus
 */

    // var eyeDes = new FastBreakTruck (prepararEyeHoles);
    // FastBreakTruck.incluirJuguete(eyeDes);
    // console.log("\nEyeholes con plumbus!");
    // eyeDes.mostrarItems();
    // console.log("Precio pedido: " + eyeDes.getCoste());