const cotaçao = prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')
const conv = document.querySelector('div#conv')
const res = document.querySelector('div#res')

function converter() {
    
    const valorCart = Number(prompt('Quantos R$ você tem na carteira?'))
    const soma = Number(valorCart/5.26).toFixed(2)
    
    res.innerHTML = `<h2>Cotação do dolár R$ ${cotaçao}</h2>`
    conv.innerHTML = `<p><strong>Levando em consideração a cotação atual, você consegue comprar US$ ${soma} dolares</strong></p>`

    
}

    