


function mudarInfos(e) {
    const idInfo = e.target.id
    console.log(idInfo)
    const titulo = document.getElementById("cardText");
    
    const descricao = document.getElementById("descricaoPix");

    const inputCard = document.getElementById("cardi");
    const inputCpf = document.getElementById("cpfi");
    const inputValidade = document.getElementById("validadei");
    const inputCvv = document.getElementById("cvvi");

    const textoCpf = document.getElementById("textCpf");
    const textoValidade = document.getElementById("textValidade");
    const textoCvv = document.getElementById("textCvv");

 
    switch(idInfo){
        case 'card':
            console.log('clicado')
            titulo.innerText= 'Número do cartão'
            titulo.style.textAlign = 'left'
            titulo.style.marginTop = '0'

            descricao.style.display = 'none'

            inputCard.style.display = 'block'
            textoCpf.style.display = 'block'
            textoValidade.style.display = 'block'
            textoCvv.style.display = 'block'

            inputCpf.style.display = 'block'
            inputValidade.style.display = 'block'
            inputCvv.style.display = 'block'

            document.getElementById("card").classList.add("clicado")
            document.getElementById("pix").classList.remove("clicado")
            document.getElementById("formaBoleto").classList.remove("clicado")
            
            break
        case 'pix':
            titulo.innerText= 'Faça seu pagamento usando seu PIX'
            titulo.style.textAlign = 'center'
            titulo.style.marginTop = '1rem'
            descricao.style.display = 'block'
            descricao.innerText = `Com maior facilidade para você é só clicar no botão a baixo para copiar o código e ir em seu aplicativo do banco colar para efetuar o pagamento`

            inputCard.style.display = 'none'
            textoCpf.style.display = 'none'
            textoValidade.style.display = 'none'
            textoCvv.style.display = 'none'

            inputCpf.style.display = 'none'
            inputValidade.style.display = 'none'
            inputCvv.style.display = 'none'

            document.getElementById("pix").classList.add("clicado")
            document.getElementById("card").classList.remove("clicado")
            document.getElementById("formaBoleto").classList.remove("clicado")
    
            break
        case 'formaBoleto':
            titulo.innerText= 'Faça seu pagamento usando o Boleto'
            titulo.style.textAlign = 'center'
            titulo.style.marginTop = '1rem'
            descricao.style.display = 'block'
            descricao.innerText = `Quando você clicar no botão abaixo será baixado um pdf que você pode usar para pagar, lembrando que o pagamento pode ser realmente efetuado em até 3 dias úteis.`


            
            inputCard.style.display = 'none'
            textoCpf.style.display = 'none'
            textoValidade.style.display = 'none'
            textoCvv.style.display = 'none'

            inputCpf.style.display = 'none'
            inputValidade.style.display = 'none'
            inputCvv.style.display = 'none'

            
            document.getElementById("formaBoleto").classList.add("clicado")
            document.getElementById("card").classList.remove("clicado")
            document.getElementById("pix").classList.remove("clicado")
            break
    }
}


document.getElementById('slider').addEventListener('click', mudarInfos);