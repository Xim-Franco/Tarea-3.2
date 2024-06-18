// Función que simula una solicitud a un servidor usando async/await
async function simularSolicitud() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simular un error aleatorio con probabilidad del 30%
            if (Math.random() < 0.3) {
                reject(new Error('Error con async/await'));
            } else {
                // Datos de respuesta exitosa
                const datosSimulados = {
                    id: 2022300523,
                    nombre: 'Ximena Franco',
                    mensaje: 'Hola, profe :) ... usando async/await'
                };
                // Resolver la promesa con los datos
                resolve(datosSimulados);
            }
        }, 2000); // Retraso de 2 segundos 
    });
}

// Utilizar la función y manejar la promesa con async/await
async function realizarSolicitud() {
    try {
        const datos = await simularSolicitud();
        console.log('Respuesta exitosa:');
        console.log(datos);
    } catch (error) {
        console.error('Error durante la solicitud:');
        console.error(error.message);
    } 
}

// Llamar a la función principal
realizarSolicitud();