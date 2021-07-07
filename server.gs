//Para cargar el formulario
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html'); 
}

//Ejecutar la función
//No se si form se pueda cambiar
function subiendoArchivos(form) {

//Aqui le decimos que se cree una carpeta llamada fotos de presas  
  try {
    
    var dropbox = "Nombre de Carpeta";
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    
//Aqui le decimos que se suban los archivos 
    var foto = form.miArchivo;    
    var archivo = folder.createFile(foto);

    var foto2 = form.miArchivo2;    
    var archivo2=folder.createFile(foto2);
    
    var foto3 = form.miArchivo3;    
    var archivo3=folder.createFile(foto3)

    


// Poner nombre a los archivos
var today= new Date();
var day = 1000*60*60*24;
var hour = 1000*60*60;
var minute= 1000*60;
var week = day*7;

var exacta= (1000*60*60*10) + (1000*60*30)
 
var yesterday = new Date(today.getTime() - day);
var lastWeek = new Date(today.getTime() - week);

var calculada=  new Date(today.getTime()- exacta);

    
var detas  =form.detalles;
var namez= form.nombreParaArchivo;

    archivo.setName(calculada +"#"+ namez +"#"+ detas); //cambiar description por name
    archivo2.setName(form.nombreParaArchivo + "dos");
    archivo3.setName(form.nombreParaArchivo + "tres");

    archivo.setDescription(form.detalles); // cambiar descripción

    
  } catch (f) {
    
    return f.toString();
  }
  
}



