# 🌸 Portafolio de Proyecto Web: Veloria Perfumes

**Estudiante:** Leidy Graziella Linarez García  
**Fecha:** 17 de octubre de 2026  
**Enlace al sitio web (Vercel):(https://veloria-perfumess.vercel.app/contacto.html)
**Repositorio GitHub:(https://github.com/19841021-sketch/veloria-perfumess)

---

## 1. Identidad de Marca y Producto

### 🌷 Ficha del producto

- **Nombre comercial:** Veloria Perfumes.
- **Descripción:** Veloria Perfumes es un sitio web dedicado a presentar perfumes y fragancias mediante una interfaz elegante y moderna. Permite a los visitantes conocer los productos y comunicarse mediante un formulario de contacto.
- **Público objetivo:** Personas interesadas en perfumes, fragancias y productos relacionados con el cuidado personal.
- **Propuesta de valor:** Ofrecer una experiencia visual atractiva para descubrir fragancias y facilitar la comunicación con los visitantes a través de un formulario web.

### 🎨 Diseño visual

- **Logotipo:** Logotipo original de Veloria Perfumes.
- **Paleta de colores:**

| Color | Código HEX | Uso en el sitio |
|---|---|---|
| Morado | `#70523E` | Detalles y elementos decorativos |
| Oscuro | `#35271F` | Fondos y botones |
| Crema | `#F8F1E7` | Fondos claros y textos |

Los colores se utilizan para mantener una identidad visual elegante y relacionada con el estilo de la marca. Los códigos deben verificarse con los colores definitivos de la página.

### 🖼️ Carousel de Bootstrap

La página principal incluye una presentación visual de productos mediante un carousel de Bootstrap, que permite mostrar diferentes imágenes dentro de un mismo espacio.

**Evidencia:** Agregar una captura del carousel en funcionamiento.

---

## 2. Investigación Técnica

### 2.1. JavaScript (Vanilla)

JavaScript es un lenguaje de programación que permite agregar interactividad a las páginas web. Se utiliza para responder a las acciones de los usuarios, validar formularios y modificar el contenido de una página.

HTML organiza el contenido, CSS define su apariencia y JavaScript agrega comportamientos dinámicos. Entre sus conceptos principales están las variables, las funciones y los eventos.

### 2.2. jQuery

jQuery es una biblioteca de JavaScript que facilita tareas como seleccionar elementos HTML, modificar contenido y crear efectos o animaciones. Su sintaxis utiliza frecuentemente el símbolo `$`.

Aunque jQuery puede simplificar ciertas tareas, muchas de sus funciones también pueden realizarse con JavaScript moderno.

### 2.3. JSON

JSON significa JavaScript Object Notation. Es un formato de texto que organiza información mediante pares de clave y valor. Se utiliza para intercambiar datos entre aplicaciones, páginas web, servidores y APIs.

En el formulario de Veloria Perfumes, los datos se convierten a JSON para enviarlos al servidor.

### 2.4. Web Hosting y Dominios

El hosting es un servicio que permite almacenar y publicar los archivos de un sitio web para que estén disponibles en internet. Vercel permite desplegar proyectos web y publicar sus versiones.

Un dominio es una dirección utilizada para acceder a un sitio web. Los TLD son las terminaciones de los dominios, como `.com` y `.org`. El DNS relaciona los nombres de dominio con los recursos correspondientes. La propagación DNS es el proceso mediante el cual los cambios en los registros DNS se reflejan en distintos sistemas de internet.

---

## 3. Integraciones Especiales

### Formulario de contacto + Webhook de Discord

Veloria Perfumes cuenta con un formulario de contacto conectado con Discord mediante un webhook.

Su funcionamiento es el siguiente:

1. El visitante completa el formulario de contacto.
2. JavaScript recoge los datos y realiza una petición asíncrona a la ruta `/api/contact`.
3. La función del servidor procesa la solicitud y utiliza la URL secreta del webhook almacenada en una variable de entorno de Vercel.
4. Discord recibe los datos y publica una notificación en el canal configurado.
5. El usuario recibe un mensaje en la página indicando el resultado del envío.

La integración fue comprobada mediante una prueba y la notificación llegó correctamente al canal de Discord.

**Seguridad:** La URL secreta del webhook debe mantenerse en las variables de entorno de Vercel y no publicarse en el repositorio ni en el código del navegador.

---

## 4. Anexos y Evidencias Gráficas

### Anexo 1. Integración con Discord

Agregar las capturas del formulario completado con datos de prueba y la notificación recibida en el canal de Discord.

![Evidencia de integración con Discord](assets/discord-webhook.png)

### Anexo 2. Despliegue exitoso en Vercel

Agregar una captura del panel de Vercel donde se observe el estado `Ready` y la dirección pública del sitio.

![Evidencia de despliegue en Vercel](assets/vercel-status.png)

### Anexo 3. Diseño responsive y Bootstrap

Agregar una captura del sitio web en vista móvil mediante las herramientas de desarrollador del navegador.

![Evidencia de diseño responsive](assets/responsive-mobile.png)

### Anexo 4. Cuestionario interactivo

Agregar una captura del cuestionario de conocimientos web con preguntas respondidas.

![Evidencia del cuestionario](assets/quiz-funcionando.png)

### Anexo 5. Estructura del repositorio en GitHub

Agregar una captura del repositorio público donde se observe la organización de los archivos del proyecto.

![Evidencia del repositorio GitHub](assets/github-repository.png)

---

## 5. Conclusiones y Autoevaluación

### Desafíos enfrentados

Uno de los principales desafíos fue conectar el formulario de contacto con Discord y configurar la comunicación entre la página web y una función del servidor. También fue necesario organizar los archivos del proyecto y publicar el sitio en Vercel.

### Aprendizajes clave

Durante este proyecto reforcé mis conocimientos de HTML, CSS y JavaScript, aprendí sobre el uso de Bootstrap y jQuery, comprendí la estructura de los datos JSON y conocí la función del hosting, los dominios y las APIs. También aprendí a utilizar webhooks para comunicar una página web con Discord y a documentar el trabajo con Markdown.

### Autoevaluación

Considero que el proyecto me permitió comprender mejor cómo se desarrolla y publica un sitio web interactivo. La integración con Discord fue probada correctamente y me ayudó a entender la comunicación entre el frontend, el servidor y un servicio externo.
