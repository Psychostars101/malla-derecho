// script.js

// Datos de la malla curricular (simulados, ya que el JSON real se cargaría aquí)
// En un entorno real, cargarías esto desde un archivo JSON o una API.
// Para este ejemplo, usaremos el contenido del JSON proporcionado.
const mallaCurricular = [
    {
        "año": 1,
        "periodo": 1,
        "materias": [
            {"id": "70af1bf1-5dd4-49a3-ad89-a7f12e384630", "nombre": "INTRODUCCIÓN AL DERECHO I", "tipo": "ninguno", "requisitos": []},
            {"id": "b6788202-1dfa-493c-8c30-82446948e988", "nombre": "INTRODUCCIÓN A LA ECONOMÍA", "tipo": "ninguno", "requisitos": []},
            {"id": "57704421-9333-465f-8068-9ef2d3836e7e", "nombre": "HISTORIA DEL DERECHO I", "tipo": "ninguno", "requisitos": []},
            {"id": "db3fff99-ae5d-49e9-878b-d7b1b45184fe", "nombre": "FILOSOFÍA MORAL", "tipo": "ninguno", "requisitos": []},
            {"id": "04e79fd6-1c17-4eb5-b71e-2a32b2437ab1", "nombre": "ELECTIVO ABIERTO", "tipo": "ninguno", "requisitos": []},
            {"id": "73ffac60-5eb7-4dc0-8f30-1122408b8f5b", "nombre": "FORMACIÓN COMPLEMENTARIA (LIBRE/CFG)", "tipo": "ninguno", "requisitos": []},
            {"id": "29dcefe9-3dea-4773-bc61-563a0afb47b0", "nombre": "INGLÉS I", "tipo": "ninguno", "requisitos": []}
        ]
    },
    {
        "año": 1,
        "periodo": 2,
        "materias": [
            {"id": "ae543c67-ba78-4191-ae06-05b2dbf71523", "nombre": "INTRODUCCIÓN AL DERECHO II", "tipo": "ninguno", "requisitos": ["70af1bf1-5dd4-49a3-ad89-a7f12e384630"]},
            {"id": "3da9d5fe-507d-485b-b6e1-1dcd07920ce6", "nombre": "DERECHO CIVIL I", "tipo": "ninguno", "requisitos": ["70af1bf1-5dd4-49a3-ad89-a7f12e384630"]},
            {"id": "74dd5a3e-cd91-4e8f-823d-caaef8312f3a", "nombre": "HISTORIA DEL DERECHO II", "tipo": "ninguno", "requisitos": ["57704421-9333-465f-8068-9ef2d3836e7e"]},
            {"id": "4ebea9a6-3ead-420d-a373-de02e5d08a49", "nombre": "DERECHO CONSTITUCIONAL I", "tipo": "ninguno", "requisitos": ["70af1bf1-5dd4-49a3-ad89-a7f12e384630"]},
            {"id": "be7492bf-378f-4390-a58b-d3076a14a74e", "nombre": "ÁREA ESPECIALIZADA DERECHO ECONÓMICO I", "tipo": "ninguno", "requisitos": ["b6788202-1dfa-493c-8c30-82446948e988"]},
            {"id": "e2b97a83-c86a-4bf6-86e6-2f179eec1d34", "nombre": "FORMACIÓN COMPLEMENTARIA (LIBRE/CFG)", "tipo": "ninguno", "requisitos": []},
            {"id": "68a988d7-f8e3-4abe-898d-32c33370fdf3", "nombre": "INGLÉS II", "tipo": "ninguno", "requisitos": ["29dcefe9-3dea-4773-bc61-563a0afb47b0"]}
        ]
    },
    {
        "año": 2,
        "periodo": 1,
        "materias": [
            {"id": "f1bbfd9a-32b5-4b41-962a-6023d83c270d", "nombre": "Derecho Procesal I", "tipo": "ninguno", "requisitos": ["ae543c67-ba78-4191-ae06-05b2dbf71523"]},
            {"id": "8b82d0d2-5677-450b-9be7-e3455d13216a", "nombre": "DERECHO CIVIL II", "tipo": "ninguno", "requisitos": ["ae543c67-ba78-4191-ae06-05b2dbf71523", "3da9d5fe-507d-485b-b6e1-1dcd07920ce6"]},
            {"id": "8954f6b0-caf2-4794-8b65-b223b934b2f9", "nombre": "DERECHO INTERNACIONAL PÚBLICO", "tipo": "ninguno", "requisitos": ["ae543c67-ba78-4191-ae06-05b2dbf71523", "4ebea9a6-3ead-420d-a373-de02e5d08a49"]},
            {"id": "fc69b895-b372-4296-baef-24ffe6612715", "nombre": "DERECHO CONSTITUCIONAL II", "tipo": "ninguno", "requisitos": ["4ebea9a6-3ead-420d-a373-de02e5d08a49", "ae543c67-ba78-4191-ae06-05b2dbf71523"]},
            {"id": "61139cb1-0f3d-4acf-9645-c14cae5412b3", "nombre": "ELECTIVO ABIERTO", "tipo": "ninguno", "requisitos": []},
            {"id": "ebdfe08c-dc3e-4502-bb8f-4cbccc4c9f7a", "nombre": "FORMACIÓN COMPLEMENTARIA (LIBRE/CFG)", "tipo": "ninguno", "requisitos": []},
            {"id": "5cf09280-96fb-45f2-9ecd-acb188e203ea", "nombre": "INGLÉS III", "tipo": "ninguno", "requisitos": ["68a988d7-f8e3-4abe-898d-32c33370fdf3"]}
        ]
    },
    {
        "año": 2,
        "periodo": 2,
        "materias": [
            {"id": "875c1b3b-a34a-4799-8292-4072979c5db8", "nombre": "DERECHO PROCESAL II", "tipo": "ninguno", "requisitos": ["f1bbfd9a-32b5-4b41-962a-6023d83c270d"]},
            {"id": "969ba8d4-d3cc-4b1f-9311-c5d19eda7f80", "nombre": "DERECHO CIVIL III", "tipo": "ninguno", "requisitos": ["8b82d0d2-5677-450b-9be7-e3455d13216a"]},
            {"id": "d8150bb7-7df4-4b52-8e54-365606b954e9", "nombre": "DERECHO PENAL I", "tipo": "ninguno", "requisitos": ["fc69b895-b372-4296-baef-24ffe6612715"]},
            {"id": "62ed0e8c-900f-47d5-b81e-6ca72e8e3d80", "nombre": "DERECHO CONSTITUCIONAL III", "tipo": "ninguno", "requisitos": ["fc69b895-b372-4296-baef-24ffe6612715", "f1bbfd9a-32b5-4b41-962a-6023d83c270d"]},
            {"id": "ba649b1a-fb22-4d1d-9a37-390f1a1b7f99", "nombre": "REGULACIÓN DE MERCADOS", "tipo": "ninguno", "requisitos": ["be7492bf-378f-4390-a58b-d3076a14a74e"]},
            {"id": "6a41389a-ed5f-4762-bbf3-81a58eb05ab7", "nombre": "ÁREA ESPECIALIZADA DERECHOS HUMANOS", "tipo": "ninguno", "requisitos": ["74dd5a3e-cd91-4e8f-823d-caaef8312f3a"]},
            {"id": "582b247a-c97d-4a6c-ae63-d8117f47d764", "nombre": "INGLÉS IV", "tipo": "ninguno", "requisitos": ["5cf09280-96fb-45f2-9ecd-acb188e203ea"]}
        ]
    },
    {
        "año": 3,
        "periodo": 1,
        "materias": [
            {"id": "e9c34b8c-a2c3-48f6-86f7-8ed564475066", "nombre": "DERECHO PROCESAL III", "tipo": "ninguno", "requisitos": ["8b82d0d2-5677-450b-9be7-e3455d13216a"]},
            {"id": "01edbf33-9e97-4fb1-a62b-21e603aaf7e8", "nombre": "DERECHO CIVIL IV", "tipo": "ninguno", "requisitos": ["969ba8d4-d3cc-4b1f-9311-c5d19eda7f80"]},
            {"id": "21651b7b-6563-4d14-8d5e-ef41798cfc8f", "nombre": "DERECHO PENAL II", "tipo": "ninguno", "requisitos": ["d8150bb7-7df4-4b52-8e54-365606b954e9"]},
            {"id": "bee210f3-3052-4bb5-8661-91b0478a726c", "nombre": "DERECHO ADMINISTRATIVO I", "tipo": "ninguno", "requisitos": ["62ed0e8c-900f-47d5-b81e-6ca72e8e3d80"]},
            {"id": "89b113f5-844d-4948-ac2f-5c6fdd53e5c0", "nombre": "ÁREA ESPECIALIZADA DERECHO INTERNACIONAL", "tipo": "ninguno", "requisitos": []},
            {"id": "1267f291-8bde-4526-9373-c753e98eb126", "nombre": "DERECHO DEL TRABAJO I", "tipo": "ninguno", "requisitos": ["969ba8d4-d3cc-4b1f-9311-c5d19eda7f80"]},
            {"id": "a5f03685-3222-4096-b268-8ce0eaabaafa", "nombre": "INGLÉS V", "tipo": "ninguno", "requisitos": ["582b247a-c97d-4a6c-ae63-d8117f47d764"]}
        ]
    },
    {
        "año": 3,
        "periodo": 2,
        "materias": [
            {"id": "e9da9407-421e-48c2-8de9-516e9874fcfe", "nombre": "DERECHO PROCESAL IV", "tipo": "ninguno", "requisitos": ["e9c34b8c-a2c3-48f6-86f7-8ed564475066"]},
            {"id": "6bee94c2-6ddb-423e-ba4d-a869ac8ec558", "nombre": "DERECHO CIVIL V", "tipo": "ninguno", "requisitos": ["01edbf33-9e97-4fb1-a62b-21e603aaf7e8"]},
            {"id": "1534b4d1-f97a-4529-ade8-a3e8cf7d564c", "nombre": "DERECHO PENAL III", "tipo": "ninguno", "requisitos": ["21651b7b-6563-4d14-8d5e-ef41798cfc8f"]},
            {"id": "98b9f921-914e-47e3-a1ae-1291d5ef34e9", "nombre": "DERECHO ADMINISTRATIVO II", "tipo": "ninguno", "requisitos": ["bee210f3-3052-4bb5-8661-91b0478a726c"]},
            {"id": "a48029b0-8b74-4c1c-be91-72f9a2b80686", "nombre": "DERECHO COMERCIAL I", "tipo": "ninguno", "requisitos": ["01edbf33-9e97-4fb1-a62b-21e603aaf7e8"]},
            {"id": "7ae2686c-cf3e-4a55-9ebf-2018519b3c86", "nombre": "DERECHO DEL TRABAJO II", "tipo": "ninguno", "requisitos": ["1267f291-8bde-4526-9373-c753e98eb126"]},
            {"id": "72094852-27d9-4d6f-9194-363df638750f", "nombre": "DERECHO AMBIENTAL, DE LOS RECURSOS NATURALES Y DE LA SUSTENTABILIDAD", "tipo": "ninguno", "requisitos": ["ba649b1a-fb22-4d1d-9a37-390f1a1b7f99"]}
        ]
    },
    {
        "año": 4,
        "periodo": 1,
        "materias": [
            {"id": "38efa2ae-b656-478b-8421-b45f1038650a", "nombre": "ÁREA ESPECIALIZADA DERECHO PROCESAL", "tipo": "ninguno", "requisitos": ["e9da9407-421e-48c2-8de9-516e9874fcfe"]},
            {"id": "ac084b78-f09a-4f42-ae30-ae169d457e13", "nombre": "DERECHO CIVIL VI", "tipo": "ninguno", "requisitos": ["6bee94c2-6ddb-423e-ba4d-a869ac8ec558"]},
            {"id": "5878161c-9c49-4819-93af-2d026bb89ccd", "nombre": "ÁREA ESPECIALIZADA CIENCIAS PENALES", "tipo": "ninguno", "requisitos": ["1534b4d1-f97a-4529-ade8-a3e8cf7d564c"]},
            {"id": "da4c2e0c-9ea5-4aaf-855b-f34799e6ebdd", "nombre": "ÁREA ESPECILIZADA DERECHO ECONÓMICO II", "tipo": "ninguno", "requisitos": ["ba649b1a-fb22-4d1d-9a37-390f1a1b7f99"]},
            {"id": "e6850d37-36a5-420d-8409-4bc7a0e89f54", "nombre": "DERECHO COMERCIAL II", "tipo": "ninguno", "requisitos": ["a48029b0-8b74-4c1c-be91-72f9a2b80686"]},
            {"id": "2bb52d6a-6c76-48d4-97d8-faee744a2b3d", "nombre": "DERECHO DE LA SEGURIDAD SOCIAL", "tipo": "ninguno", "requisitos": ["7ae2686c-cf3e-4a55-9ebf-2018519b3c86"]},
            {"id": "e7aa9b50-12c6-4419-abb7-5426c8dc8d52", "nombre": "ÁREA ESPECIALIZADA CIENCIAS DEL DERECHO", "tipo": "ninguno", "requisitos": ["1534b4d1-f97a-4529-ade8-a3e8cf7d564c"]}
        ]
    },
    {
        "año": 4,
        "periodo": 2,
        "materias": [
            {"id": "f6ca8363-1d1e-43b6-a9b6-3122993ac508", "nombre": "TALLER DE MEMORIA I", "tipo": "ninguno", "requisitos": []},
            {"id": "dc0bf996-4193-45ff-8b07-d085618df15d", "nombre": "DERECHO CIVIL VII", "tipo": "ninguno", "requisitos": ["a48029b0-8b74-4c1c-be91-72f9a2b80686", "ac084b78-f09a-4f42-ae30-ae169d457e13"]},
            {"id": "a6e0003c-cd87-46a6-8d3b-d9d831fec9b9", "nombre": "CLÍNICAS JURÍDICAS I", "tipo": "ninguno", "requisitos": []},
            {"id": "4a976ad4-c0b2-495f-8163-06aa14af60eb", "nombre": "PROFESIÓN JURÍDICA", "tipo": "ninguno", "requisitos": ["ac084b78-f09a-4f42-ae30-ae169d457e13"]},
            {"id": "b05d47c1-4c2d-469a-a016-c9682eddebaa", "nombre": "DERECHO COMERCIAL III", "tipo": "ninguno", "requisitos": ["e6850d37-36a5-420d-8409-4bc7a0e89f54"]},
            {"id": "efe32828-3189-4a40-a45c-34bdf7089f15", "nombre": "FORMACIÓN COMPLEMENTARIA (LIBRE/CFG)", "tipo": "ninguno", "requisitos": []}
        ]
    },
    {
        "año": 5,
        "periodo": 1,
        "materias": [
            {"id": "6d8f513e-32d6-40b4-ba8a-00111bd15e1f", "nombre": "TALLER DE MEMORIA II", "tipo": "ninguno", "requisitos": ["f6ca8363-1d1e-43b6-a9b6-3122993ac508"]},
            {"id": "19d7919b-c38b-4b7a-9e6b-c40a61660b93", "nombre": "ÁREA ESPECIALIZADA DERECHO PRIVADO", "tipo": "ninguno", "requisitos": ["dc0bf996-4193-45ff-8b07-d085618df15d"]},
            {"id": "e7913eac-bb70-4b31-bcfe-b3826981a4ab", "nombre": "CLÍNICAS JURÍDICAS ESPECIALIZADAS", "tipo": "ninguno", "requisitos": ["a6e0003c-cd87-46a6-8d3b-d9d831fec9b9"]},
            {"id": "a7288222-ff44-420b-aecf-924863b367e0", "nombre": "DERECHO TRIBUTARIO", "tipo": "ninguno", "requisitos": ["e6850d37-36a5-420d-8409-4bc7a0e89f54"]},
            {"id": "f50a9cad-cc02-4ac5-948b-77ca68362ad3", "nombre": "ELECTIVO ABIERTO", "tipo": "ninguno", "requisitos": []},
            {"id": "6ea754a1-f2a5-49f6-972e-e85116d59222", "nombre": "ELECTIVO ABIERTO", "tipo": "ninguno", "requisitos": []}
        ]
    },
    {
        "año": 5,
        "periodo": 2,
        "materias": [
            {"id": "2be8d447-f97a-4982-a1a4-a0bb2e9baa00", "nombre": "TALLER INTEGRADO DE RESOLUCIÓN DE CASOS", "tipo": "ninguno", "requisitos": ["dc0bf996-4193-45ff-8b07-d085618df15d"]},
            {"id": "69c9d027-a590-4935-a0da-8ba931b7572a", "nombre": "DERECHO INTERNACIONAL PRIVADO", "tipo": "ninguno", "requisitos": ["ac084b78-f09a-4f42-ae30-ae169d457e13", "8954f6b0-caf2-4794-8b65-b223b934b2f9"]},
            {"id": "c6fa6833-048a-4ef1-b7dc-176d47a36eef", "nombre": "ELECTIVO ABIERTO", "tipo": "ninguno", "requisitos": []},
            {"id": "1b3ff280-96ae-4018-b0b1-695289f16504", "nombre": "ELECTIVO ABIERTO", "tipo": "ninguno", "requisitos": []},
            {"id": "258d9709-caf9-4aec-8e7f-9cd86d096779", "nombre": "FORMACIÓN COMPLEMENTARIA (LIBRE/CFG)", "tipo": "ninguno", "requisitos": []}
        ]
    }
];


// Objeto para almacenar el estado de las materias completadas
const completedCourses = {};

// Obtener referencias a elementos del DOM
const curriculumGrid = document.getElementById('curriculum-grid');
const requisitesModal = document.getElementById('requisites-modal');
const modalTitle = document.getElementById('modal-title');
const modalRequisitesList = document.getElementById('modal-requisites-list');
const closeModalButton = document.getElementById('close-modal');

// Nuevas referencias para la funcionalidad de Gemini API
const generateSummaryButton = document.getElementById('generate-summary-button');
const summaryOutput = document.getElementById('summary-output');
const summaryLoadingSpinner = document.getElementById('summary-loading-spinner');
const summaryError = document.getElementById('summary-error');

// Variable para almacenar la materia actualmente seleccionada en el modal
let currentCourseForSummary = null;

/**
 * Función para obtener el nombre de una materia por su ID.
 * @param {string} courseId - El ID de la materia.
 * @returns {string} El nombre de la materia o 'Materia desconocida' si no se encuentra.
 */
function getCourseNameById(courseId) {
    for (const semester of mallaCurricular) {
        const course = semester.materias.find(materia => materia.id === courseId);
        if (course) {
            return course.nombre;
        }
    }
    return 'Materia desconocida';
}

/**
 * Función para verificar si una materia tiene todos sus requisitos completados.
 * @param {Array<string>} requisites - Un array de IDs de materias que son requisitos.
 * @returns {boolean} True si todos los requisitos están completados, false en caso contrario.
 */
function checkRequisites(requisites) {
    if (!requisites || requisites.length === 0) {
        return true; // No hay requisitos, por lo tanto, está disponible
    }
    return requisites.every(reqId => completedCourses[reqId]);
}

/**
 * Función para renderizar la malla curricular.
 */
function renderCurriculum() {
    curriculumGrid.innerHTML = ''; // Limpiar el contenido actual de la malla

    mallaCurricular.forEach(semester => {
        // Crear un div para cada columna de semestre
        const semesterColumn = document.createElement('div');
        semesterColumn.className = 'semester-column';

        // Crear el título del semestre
        const semesterTitle = document.createElement('h2');
        semesterTitle.className = 'semester-title';
        semesterTitle.textContent = `Año ${semester.año} - Semestre ${semester.periodo}`;
        semesterColumn.appendChild(semesterTitle);

        // Iterar sobre las materias de cada semestre
        semester.materias.forEach(course => {
            // Crear la tarjeta de la materia
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card rounded-md p-4 mb-2 cursor-pointer transition duration-200 ease-in-out';
            courseCard.dataset.courseId = course.id; // Almacenar el ID de la materia en el dataset

            // Determinar el estado de la materia (completado, pendiente, no disponible)
            let statusClass = 'status-pending';
            let statusText = 'Pendiente';
            let isClickable = true; // Por defecto, las materias son clicables

            if (completedCourses[course.id]) {
                statusClass = 'status-completed';
                statusText = 'Completado';
            } else if (!checkRequisites(course.requisitos)) {
                statusClass = 'status-unavailable';
                statusText = 'No Disponible';
                isClickable = false; // Si no tiene requisitos, no es clicable para marcar como completado
            }

            // Añadir clases de estilo basadas en el estado
            courseCard.classList.add(statusClass);

            // Contenido de la tarjeta de la materia
            const courseName = document.createElement('p');
            courseName.className = 'course-name font-semibold text-blue-700';
            courseName.textContent = course.nombre;
            courseCard.appendChild(courseName);

            const courseStatus = document.createElement('span');
            courseStatus.className = 'course-status text-sm mt-2 px-2 py-1 rounded';
            courseStatus.textContent = statusText;
            courseCard.appendChild(courseStatus);

            // Añadir evento de click para marcar como completado/pendiente
            if (isClickable) {
                courseCard.addEventListener('click', () => {
                    toggleCourseCompletion(course.id);
                });
            }

            // Añadir evento de click para mostrar requisitos (si los tiene)
            // Se usa 'contextmenu' para el modal de requisitos/resumen
            courseCard.addEventListener('contextmenu', (e) => {
                e.preventDefault(); // Prevenir el menú contextual por defecto
                showRequisitesModal(course);
            });
            // También permitir clic normal para mostrar requisitos si la materia no es clicable para completar
            if (!isClickable && course.requisitos && course.requisitos.length > 0) {
                courseCard.addEventListener('click', () => {
                    showRequisitesModal(course);
                });
            }

            semesterColumn.appendChild(courseCard);
        });
        curriculumGrid.appendChild(semesterColumn);
    });
}

/**
 * Función para marcar/desmarcar una materia como completada.
 * @param {string} courseId - El ID de la materia a alternar.
 */
function toggleCourseCompletion(courseId) {
    if (completedCourses[courseId]) {
        // Si la materia está completada, desmarcarla
        delete completedCourses[courseId];
    } else {
        // Si la materia no está completada, marcarla
        completedCourses[courseId] = true;
    }
    renderCurriculum(); // Volver a renderizar la malla para actualizar el estado visual
}

/**
 * Función para mostrar el modal de requisitos y configurar el botón de resumen.
 * @param {object} course - El objeto de la materia.
 */
function showRequisitesModal(course) {
    currentCourseForSummary = course; // Almacenar la materia actual
    modalTitle.textContent = `Detalles de: ${course.nombre}`;
    modalRequisitesList.innerHTML = ''; // Limpiar la lista anterior
    summaryOutput.innerHTML = ''; // Limpiar el resumen anterior
    summaryOutput.classList.add('hidden'); // Ocultar el resumen
    summaryError.classList.add('hidden'); // Ocultar errores

    // Mostrar requisitos
    if (course.requisitos && course.requisitos.length > 0) {
        course.requisitos.forEach(reqId => {
            const listItem = document.createElement('li');
            listItem.textContent = getCourseNameById(reqId);
            modalRequisitesList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No tiene requisitos.';
        modalRequisitesList.appendChild(listItem);
    }

    requisitesModal.classList.remove('hidden'); // Mostrar el modal
}

// Event listener para el botón de generar resumen
generateSummaryButton.addEventListener('click', async () => {
    if (currentCourseForSummary) {
        await generateCourseSummary(currentCourseForSummary.nombre);
    }
});

/**
 * Función para generar un resumen de la materia usando la API de Gemini.
 * @param {string} courseName - El nombre de la materia a resumir.
 */
async function generateCourseSummary(courseName) {
    summaryOutput.classList.add('hidden');
    summaryError.classList.add('hidden');
    summaryLoadingSpinner.classList.remove('hidden'); // Mostrar spinner

    const prompt = `Genera un resumen conciso y relevante de la materia de derecho llamada '${courseName}' para un estudiante universitario de la Universidad de Chile. El resumen debe enfocarse en los temas clave, la importancia de la materia en la carrera de derecho y sus posibles aplicaciones.`;

    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = ""; // La clave API se proporciona en tiempo de ejecución por Canvas
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error de la API: ${response.status} - ${errorData.error.message || response.statusText}`);
        }

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const text = result.candidates[0].content.parts[0].text;
            summaryOutput.innerHTML = `<p>${text}</p>`;
            summaryOutput.classList.remove('hidden');
        } else {
            summaryError.textContent = 'No se pudo generar un resumen. Inténtalo de nuevo.';
            summaryError.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error al generar resumen:', error);
        summaryError.textContent = `Error al conectar con la IA: ${error.message}.`;
        summaryError.classList.remove('hidden');
    } finally {
        summaryLoadingSpinner.classList.add('hidden'); // Ocultar spinner
    }
}

// Event listener para cerrar el modal
closeModalButton.addEventListener('click', () => {
    requisitesModal.classList.add('hidden'); // Ocultar el modal
});

// Renderizar la malla curricular cuando la página se carga
document.addEventListener('DOMContentLoaded', renderCurriculum);
