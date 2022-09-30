const res = document.querySelector('#res')
const conv = document.querySelector('#conv')

function verificar(){
    const metros = prompt('Digite uma distâcia em metros (m)')
    
    const div1000 = Number(metros/1000).toFixed(3)
    const div100 = Number(metros/100).toFixed(3)
    const div10 = Number(metros/10).toFixed(3)
    const mult10 = Number(metros*10)
    const mult100 = Number(metros*100)
    const mult1000 = Number(metros*1000)

    
    
    res.innerHTML = `<h2>A distâcia de ${metros} metros, corresponde a...</h2>`
    conv.innerHTML = `<p>${div1000} quilômetros (Km)
                      <p>${div100} hectômetros (Hm)
                      <p>${div10} decâmetros (Dam)
                      <p>${mult10} decímetros (dm)
                      <p>${mult100} centímetros (cm)
                      <p>${mult1000} milímetros (mm)
                      </p>`


}