document.addEventListener("DOMContentLoaded",()=> {//executa a função ao abrir a pagina
    var tema = localStorage.getItem("tema")
    const btTema = document.getElementById("mode")
    const style = document.getElementById("style")

    
    btTema.addEventListener("click", ()=>{//verifica o status do checkbox
      if(btTema.checked){
          dark()
      }else{
          white()
      }
    })
  
    if(tema == null){//verifica se tem preferencias no localstorage
          white()
    }else{
      if(tema == "white") white()
      if(tema == "dark") dark()
    }
  
  //aqui e onde fica a configuração para executar as mudanças no visual
    function dark(){
      tema = localStorage.setItem("tema", "dark")
      btTema.checked = true
      style.href = "./styleDark.css"
    }
    function white(){
      tema = localStorage.setItem("tema", "white")
      btTema.checked = false
      style.href = "./styleWhite.css"
      
    }
  
    });

    //simpres ne ?