
function ValidationEvent() {
    // Storing Field Values In Variables
    var user = document.getElementById("name").value;
    var pass = document.getElementById("password").value;
        
    if (user == 'admin') {
         // alt96 
        if ( pass == '12345' ) {            
			alert(`Usuario Logeado.....! Bienvenido ${ user }  Listo`);
			return true;
        } 
        else {
            if (pass == '') {
                alert("Campo PassWord VACIO.....!");
                return false;
                }
                else{
              alert("PassWord Invalido.....!");
              return false;
            }
        }
    } 
    else {
        if (user == '') {
        alert("Campo Usuario VACIO.....!");
        return false;
        }
        else{
            //alt96 
            alert(`El Usuario ${ user }   es Invalido.....!`);
        return false;
        }
    } 

        
    
    }