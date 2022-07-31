function habilitar_edicion() {
    let y = document.getElementsByClassName('edicion').length
    for (let i = 0; i < y ; i++) {
        document.getElementsByClassName('edicion')[i].style.display = "block";
    }
    document.getElementById("conectarse").style.display = "none";
    document.getElementById("desconectarse").style.display = "block";
}

function deshabilitar_edicion() {
    cerrar_ventana();
    let y = document.getElementsByClassName('edicion').length
    for (let i = 0; i < y; i++) {
        document.getElementsByClassName('edicion')[i].style.display = "none";
    }
    document.getElementById("conectarse").style.display = "block";
    document.getElementById("desconectarse").style.display = "none";
}

function cambiar_perfil() {
    cerrar_ventana();
    document.getElementById("input_edit_foto_perfil").style.display = "block";
    
}

//cierro todas las ventanas abiertas de edición, al buscar elementos por clase, me trae un array
function cerrar_ventana() {
    for (let i = 0; i < document.getElementsByClassName('input_editar').length; i++) {
        document.getElementsByClassName('input_editar')[i].style.display = "none";
    }    
}

function reemplazar_imagen_perfil(image) {
    let src_cortada = image.replace(/^.*\\/, "");
    document.getElementById('imagenperfil').src = "DataBase/" + src_cortada;
    cerrar_ventana();
}


//NombreCiuadProfesion
function cambiar_nombre() {
    cerrar_ventana();
    document.getElementById("input_editar_nombre").style.display = "block";
    let textarea = document.getElementById("input_acerca_de")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

function reemplazar_nombre(value) {
    document.getElementById("nombre").innerText = value;

    let textarea = document.getElementById("input_nombre")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

function reemplazar_profesion(value) {
    document.getElementById("texto_profesion").innerText = value;

    let textarea = document.getElementById("input_profesion")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

function reemplazar_ciudad(value) {
    document.getElementById("texto_pais").innerText = value;

    let textarea = document.getElementById("input_ciudad")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}


//AcercaDe
function cambiar_acerca_de() {
    cerrar_ventana();
    document.getElementById("contendendor_editar_acerca_de").style.display = "block"
}


function reemplazar_acerca_de(value) {
    document.getElementById("texto_descripcion").innerText = value;

    let textarea = document.getElementById("input_acerca_de")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}










//EMPRESA 1

function cambiar_experiencia_1() {
    cerrar_ventana();
    document.getElementById("input_editar_experiencia").style.display = "block"
}

function reemplazar_empresa1(value) {
    document.getElementById("empresa1_nombre").innerText = value;

    let textarea = document.getElementById("input_empresa_1")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

function reemplazar_experiencia1(value) {
    document.getElementById("empresa1_desc").innerText = value;

    let textarea = document.getElementById("input_empresa_1_desc")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

function reemplazar_imagen_empresa1(image) {
    let src_cortada = image.replace(/^.*\\/, "");
    document.getElementById('logo_empresa_1').src = "DataBase/" + src_cortada;
    cerrar_ventana();
}



//EMPRESA 2

function cambiar_experiencia_2() {
    cerrar_ventana();
    document.getElementById("input_editar_experiencia2").style.display = "block"
}

function reemplazar_empresa2(value) {
    document.getElementById("empresa2_nombre").innerText = value;

    let textarea = document.getElementById("input_empresa_2")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

function reemplazar_experiencia2(value) {
    document.getElementById("empresa2_desc").innerText = value;

    let textarea = document.getElementById("input_empresa_2_desc")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

function reemplazar_imagen_empresa2(image) {
    let src_cortada = image.replace(/^.*\\/, "");
    document.getElementById('logo_empresa_2').src = "DataBase/" + src_cortada;
    cerrar_ventana();
}



//Educacion1
function cambiar_educacion_1() {
    cerrar_ventana();
    document.getElementById("input_editar_educacion1").style.display = "block"
}

function reemplazar_educacion_1(value) {
    document.getElementById("input_educacion_1").innerText = value;

    let textarea = document.getElementById("input_educacion1")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

function reemplazar_educacion_1_desc(value) {
    document.getElementById("educacion1_desc").innerText = value;

    let textarea = document.getElementById("input_educacion_1_desc")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

function reemplazar_imagen_educacion1(image) {
    let src_cortada = image.replace(/^.*\\/, "");
    document.getElementById('logo_educacion1').src = "DataBase/" + src_cortada;
    cerrar_ventana();
}

//educacion2
function cambiar_educacion_2() {
    cerrar_ventana();
    document.getElementById("input_editar_educacion2").style.display = "block"
}

function reemplazar_educacion_2(value) {
    document.getElementById("input_educacion_2").innerText = value;

    let textarea = document.getElementById("input_educacion2")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

function reemplazar_educacion_2_desc(value) {
    document.getElementById("educacion2_desc").innerText = value;

    let textarea = document.getElementById("input_educacion_2_desc")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

function reemplazar_imagen_educacion2(image) {
    let src_cortada = image.replace(/^.*\\/, "");
    document.getElementById('logo_educacion2').src = "DataBase/" + src_cortada;
    cerrar_ventana();
}

//educacion3
function cambiar_educacion_3() {
    cerrar_ventana();
    document.getElementById("input_editar_educacion3").style.display = "block"
}

function reemplazar_educacion_3(value) {
    document.getElementById("input_educacion_3").innerText = value;

    let textarea = document.getElementById("input_educacion3")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

function reemplazar_educacion_3_desc(value) {
    document.getElementById("educacion3_desc").innerText = value;

    let textarea = document.getElementById("input_educacion_3_desc")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

function reemplazar_imagen_educacion3(image) {
    let src_cortada = image.replace(/^.*\\/, "");
    document.getElementById('logo_educacion3').src = "DataBase/" + src_cortada;
    cerrar_ventana();
}



//SKILL 1
function cambiar_skill_1() {
    cerrar_ventana();
    document.getElementById("input_editar_skill_1").style.display = "block"
}


function reemplazar_skill_titulo_1(value) {
    document.getElementById("skill1_titulo").innerText = value;

    let textarea = document.getElementById("input_skill_titulo_1")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}


function reemplazar_skill_1(value) {
    if (value >= 0 && value < 101) {
        document.getElementById("primera_skill_porcentaje").innerHTML = value + "%";
        document.getElementById("skill_1").style.width = value + "%";

    }
    let textarea = document.getElementById("input_skill_1")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}



//SKILL 2
function cambiar_skill_2() {
    cerrar_ventana();
    document.getElementById("input_editar_skill_2").style.display = "block"
}


function reemplazar_skill_titulo_2(value) {
    document.getElementById("skill2_titulo").innerText = value;

    let textarea = document.getElementById("input_skill_titulo_2")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}


function reemplazar_skill_2(value) {
    if (value >= 0 && value < 101) {
        document.getElementById("segunda_skill_porcentaje").innerHTML = value + "%";
        document.getElementById("skill_2").style.width = value + "%";

    }
    let textarea = document.getElementById("input_skill_2")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}

////Proyecto1
function cambiar_proyecto_1() {
    cerrar_ventana();
    document.getElementById("input_editar_proyecto1").style.display = "block"
}


function reemplazar_proyecto_1(value) {
    document.getElementById("proyecto1_titulo").innerText = value;

    let textarea = document.getElementById("input_proyecto1")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}


function reemplazar_proyecto_1_desc(value) {
    document.getElementById("proyecto1_desc").innerText = value;

    let textarea = document.getElementById("input_proyecto_1_desc")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}


///Proyecto2
function cambiar_proyecto_2() {
    cerrar_ventana();
    document.getElementById("input_editar_proyecto2").style.display = "block"
}


function reemplazar_proyecto_2(value) {
    document.getElementById("proyecto2_titulo").innerText = value;

    let textarea = document.getElementById("input_proyecto2")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}


function reemplazar_proyecto_2_desc(value) {
    document.getElementById("proyecto2_desc").innerText = value;

    let textarea = document.getElementById("input_proyecto_2_desc")
    textarea.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            cerrar_ventana();
        }
    });
}