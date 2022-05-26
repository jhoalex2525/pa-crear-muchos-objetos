let nombres = ["cucaracha","lechuga","jamon"]
let tipos = ["insecto","vegetal","animal"]
let niveles = [200,100,450,300,260]
let alimentos = []
for(let i=0; i<50; i++){
    let alimento = {}
    alimento.nombre = nombres[Math.floor(Math.random()*nombres.length)]
    alimento.tipo = tipos[Math.floor(Math.random()*tipos.length)]
    alimento.nivel = niveles[Math.floor(Math.random()*niveles.length)]
    alimentos.push(alimento)
}

console.log(alimentos)