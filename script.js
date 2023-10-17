const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados =  document.getElementById("link-perfil-dados");
const logout = document.getElementById("logout");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block";
})

document.addEventListener('keyup', (e) => {
  console.log(e.key);
  console.log(e.code);
  if(e.code == 'Numpad1') {
    console.log('Abre o menu lateral');
    navPerfil.style.display = 'block';
    document.addEventListener('keyup', (e) => {
      if(e.code == 'Numpad1') {
        console.log('Entrar no perfil dados');
        linkPerfilDados.click();
      }
      else if(e.code == 'Numpad2') {
        console.log('logout');
        logout.click();
      }
      else (logout.click())
    })

   
  }
  else if (e.code == 'Escape'){
    console.log('Fecha o menu lateral');
    navPerfil.style.display = 'none';
  }
})

