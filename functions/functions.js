export function formater(nombre) {
    return new Intl.NumberFormat("fr-FR").format(nombre)
}