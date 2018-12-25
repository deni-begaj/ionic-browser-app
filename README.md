This Ionic app describes how to display website inside Ionic browser plugin, together with network plugin to check if there is no internet.

1. Cambiar la icona dell app.

La icona esta en el folder 'resources/icon.png' (deberias tener este nombre 'icon.png'). 
Se quieres generar los iconas, puedes escribir en el cmd:
'ionic cordova resources'
Solo cambiando este imagine 'icon.png' , Ionic generera todas las formas de imagines (por phone, tablet, etc...)
La icona deberia ser 19x192 minimo acceptado.

2. Cambiando la URL dell website.

Navigando en el file : 'PROJECT\src\app\home\home.page.ts' en el row #this.browser = this.iab.create("<<URL-POR-CAMBIAR>>"

3. Cambiando el nombre, descricion, author dell App ?

Navigando en el file : 'PROJECT\config.xml' en el row #    
    
    <name>Moda Ayelen</name>
    <description>Moda Ayelen App</description>
    <author email="modaayelen@gmail.com" href="https://modaayelen.com/">Moda Ayelen Team</author>

4. Cambiar la foto dell status Offline.

So , por primero cargas una nueva foto en el folder 'PROJECT\src\assets\img\.' y despues lo puedes cambiar la foto dell offline,
navigando en el file 'PROJECT\src\app\offline\offline.page.html' y cambiando el tag <img [src]="AQUI SE CAMBIA" />.
El link deberia ser como el link existente . 'assets/img/newfoto.png'



