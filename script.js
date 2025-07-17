// script.js

// Datos de la malla curricular inicial con créditos y campos adicionales
const defaultMallaCurricular = [
    {
        "año": 1,
        "periodo": 1,
        "materias": [
            {"id": "70af1bf1-5dd4-49a3-ad89-a7f12e384630", "nombre": "INTRODUCCIÓN AL DERECHO I", "tipo": "ninguno", "requisitos": [], "creditos": 5},
            {"id": "b6788202-1dfa-493c-8c30-82446948e988", "nombre": "INTRODUCCIÓN A LA ECONOMÍA", "tipo": "ninguno", "requisitos": [], "creditos": 5},
            {"id": "57704421-9333-465f-8068-9ef2d3836e7e", "nombre": "HISTORIA DEL DERECHO I", "tipo": "ninguno", "requisitos": [], "creditos": 5},
            {"id": "db3fff99-ae5d-49e9-878b-d7b1b45184fe", "nombre": "FILOSOFÍA MORAL", "tipo": "ninguno", "requisitos": [], "creditos": 5},
            {"id": "04e79fd6-1c17-4eb5-b71e-2a32b2437ab1", "nombre": "ELECTIVO ABIERTO", "tipo": "electivo", "requisitos": [], "creditos": 4},
            {"id": "73ffac60-5eb7-4dc0-8f30-1122408b8f5b", "nombre": "FORMACIÓN COMPLEMENTARIA (LIBRE/CFG)", "tipo": "cfg", "requisitos": [], "creditos": 2},
            {"id": "29dcefe9-3dea-4773-bc61-563a0afb47b0", "nombre": "INGLÉS I", "tipo": "ninguno", "requisitos": [], "creditos": 3}
        ]
    },
    {
        "año": 1,
        "periodo": 2,
        "materias": [
            {"id": "ae543c67-ba78-4191-ae06-05b2dbf71523", "nombre": "INTRODUCCIÓN AL DERECHO II", "tipo": "ninguno", "requisitos": ["70af1bf1-5dd4-49a3-ad89-a7f12e384630"], "creditos": 5},
            {"id": "3da9d5fe-507d-485b-b6e1-1dcd07920ce6", "nombre": "DERECHO CIVIL I", "tipo": "ninguno", "requisitos": ["70af1bf1-5dd4-49a3-ad89-a7f12e384630"], "creditos": 5},
            {"id": "74dd5a3e-cd91-4e8f-823d-caaef8312f3a", "nombre": "HISTORIA DEL DERECHO II", "tipo": "ninguno", "requisitos": ["57704421-9333-465f-8068-9ef2d3836e7e"], "creditos": 5},
            {"id": "4ebea9a6-3ead-420d-a373-de02e5d08a49", "nombre": "DERECHO CONSTITUCIONAL I", "tipo": "ninguno", "requisitos": ["70af1bf1-5dd4-49a3-ad89-a7f12e384630"], "creditos": 5},
            {"id": "be7492bf-378f-4390-a58b-d3076a14a74e", "nombre": "ÁREA ESPECIALIZADA DERECHO ECONÓMICO I", "tipo": "ninguno", "requisitos": ["b6788202-1dfa-493c-8c30-82446948e988"], "creditos": 4},
            {"id": "e2b97a83-c86a-4bf6-86e6-2f179eec1d34", "nombre": "FORMACIÓN COMPLEMENTARIA (LIBRE/CFG)", "tipo": "cfg", "requisitos": [], "creditos": 2},
            {"id": "68a988d7-f8e3-4abe-898d-32c33370fdf3", "nombre": "INGLÉS II", "tipo": "ninguno", "requisitos": ["29dcefe9-3dea-4773-bc61-563a0afb47b0"], "creditos": 2}
        ]
    },
    {
        "año": 2,
        "periodo": 1,
        "materias": [
            {"id": "f1bbfd9a-32b5-4b41-962a-6023d83c270d", "nombre": "Derecho Procesal I", "tipo": "ninguno", "requisitos": ["ae543c67-ba78-4191-ae06-05b2dbf71523"], "creditos": 5},
            {"id": "8b82d0d2-5677-450b-9be7-e3455d13216a", "nombre": "DERECHO CIVIL II", "tipo": "ninguno", "requisitos": ["ae543c67-ba78-4191-ae06-05b2dbf71523", "3da9d5fe-507d-485b-b6e1-1dcd07920ce6"], "creditos": 5},
            {"id": "8954f6b0-caf2-4794-8b65-b223b934b2f9", "nombre": "DERECHO INTERNACIONAL PÚBLICO", "tipo": "ninguno", "requisitos": ["ae543c67-ba78-4191-ae06-05b2dbf71523", "4ebea9a6-3ead-420d-a373-de02e5d08a49"], "creditos": 5},
            {"id": "fc69b895-b372-4296-baef-24ffe6612715", "nombre": "DERECHO CONSTITUCIONAL II", "tipo": "ninguno", "requisitos": ["4ebea9a6-3ead-420d-a373-de02e5d08a49", "ae543c67-ba78-4191-ae06-05b2dbf71523"], "creditos": 5},
            {"id": "61139cb1-0f3d-4acf-9645-c14cae5412b3", "nombre": "ELECTIVO ABIERTO", "tipo": "electivo", "requisitos": [], "creditos": 4},
            {"id": "ebdfe08c-dc3e-4502-bb8f-4cbccc4c9f7a", "nombre": "FORMACIÓN COMPLEMENTARIA (LIBRE/CFG)", "tipo": "cfg", "requisitos": [], "creditos": 2},
            {"id": "5cf09280-96fb-45f2-9ecd-acb188e203ea", "nombre": "INGLÉS III", "tipo": "ninguno", "requisitos": ["68a988d7-f8e3-4abe-898d-32c33370fdf3"], "creditos": 2}
        ]
    },
    {
        "año": 2,
        "periodo": 2,
        "materias": [
            {"id": "875c1b3b-a34a-4799-8292-4072979c5db8", "nombre": "DERECHO PROCESAL II", "tipo": "ninguno", "requisitos": ["f1bbfd9a-32b5-4b41-962a-6023d83c270d"], "creditos": 5},
            {"id": "969ba8d4-d3cc-4b1f-9311-c5d19eda7f80", "nombre": "DERECHO CIVIL III", "tipo": "ninguno", "requisitos": ["8b82d0d2-5677-450b-9be7-e3455d13216a"], "creditos": 5},
            {"id": "d8150bb7-7df4-4b52-8e54-365606b954e9", "nombre": "DERECHO PENAL I", "tipo": "ninguno", "requisitos": ["fc69b895-b372-4296-baef-24ffe6612715"], "creditos": 5},
            {"id": "62ed0e8c-900f-47d5-b81e-6ca72e8e3d80", "nombre": "DERECHO CONSTITUCIONAL III", "tipo": "ninguno", "requisitos": ["fc69b895-b372-4296-baef-24ffe6612715", "f1bbfd9a-32b5-4b41-962a-6023d83c270d"], "creditos": 5},
            {"id": "ba649b1a-fb22-4d1d-9a37-390f1a1b7f99", "nombre": "REGULACIÓN DE MERCADOS", "tipo": "ninguno", "requisitos": ["be7492bf-378f-4390-a58b-d3076a14a74e"], "creditos": 5},
            {"id": "6a41389a-ed5f-4762-bbf3-81a58eb05ab7", "nombre": "ÁREA ESPECIALIZADA DERECHOS HUMANOS", "tipo": "ninguno", "requisitos": ["74dd5a3e-cd91-4e8f-823d-caaef8312f3a"], "creditos": 4},
            {"id": "582b247a-c97d-4a6c-ae63-d8117f47d764", "nombre": "INGLÉS IV", "tipo": "ninguno", "requisitos": ["5cf09280-96fb-45f2-9ecd-acb188e203ea"], "creditos": 2}
        ]
    },
    {
        "año": 3,
        "periodo": 1,
        "materias": [
            {"id": "e9c34b8c-a2c3-48f6-86f7-8ed564475066", "nombre": "DERECHO PROCESAL III", "tipo": "ninguno", "requisitos": ["8b82d0d2-5677-450b-9be7-e3455d13216a"], "creditos": 5},
            {"id": "01edbf33-9e97-4fb1-a62b-21e603aaf7e8", "nombre": "DERECHO CIVIL IV", "tipo": "ninguno", "requisitos": ["969ba8d4-d3cc-4b1f-9311-c5d19eda7f80"], "creditos": 5},
            {"id": "21651b7b-6563-4d14-8d5e-ef41798cfc8f", "nombre": "DERECHO PENAL II", "tipo": "ninguno", "requisitos": ["d8150bb7-7df4-4b52-8e54-365606b954e9"], "creditos": 5},
            {"id": "bee210f3-3052-4bb5-8661-91b0478a726c", "nombre": "DERECHO ADMINISTRATIVO I", "tipo": "ninguno", "requisitos": ["62ed0e8c-900f-47d5-b81e-6ca72e8e3d80"], "creditos": 5},
            {"id": "89b113f5-844d-4948-ac2f-5c6fdd53e5c0", "nombre": "ÁREA ESPECIALIZADA DERECHO INTERNACIONAL", "tipo": "ninguno", "requisitos": [], "creditos": 4},
            {"id": "1267f291-8bde-4526-9373-c753e98eb126", "nombre": "DERECHO DEL TRABAJO I", "tipo": "ninguno", "requisitos": ["969ba8d4-d3cc-4b1f-9311-c5d19eda7f80"], "creditos": 5},
            {"id": "a5f03685-3222-4096-b268-8ce0eaabaafa", "nombre": "INGLÉS V", "tipo": "ninguno", "requisitos": ["582b247a-c97d-4a6c-ae63-d8117f47d764"], "creditos": 2}
        ]
    },
    {
        "año": 3,
        "periodo": 2,
        "materias": [
            {"id": "e9da9407-421e-48c2-8de9-516e9874fcfe", "nombre": "DERECHO PROCESAL IV", "tipo": "ninguno", "requisitos": ["e9c34b8c-a2c3-48f6-86f7-8ed564475066"], "creditos": 5},
            {"id": "6bee94c2-6ddb-423e-ba4d-a869ac8ec558", "nombre": "DERECHO CIVIL V", "tipo": "ninguno", "requisitos": ["01edbf33-9e97-4fb1-a62b-21e603aaf7e8"], "creditos": 5},
            {"id": "1534b4d1-f97a-4529-ade8-a3e8cf7d564c", "nombre": "DERECHO PENAL III", "tipo": "ninguno", "requisitos": ["21651b7b-6563-4d14-8d5e-ef41798cfc8f"], "creditos": 5},
            {"id": "98b9f921-914e-47e3-a1ae-1291d5ef34e9", "nombre": "DERECHO ADMINISTRATIVO II", "tipo": "ninguno", "requisitos": ["bee210f3-3052-4bb5-8661-91b0478a726c"], "creditos": 5},
            {"id": "a48029b0-8b74-4c1c-be91-72f9a2b80686", "nombre": "DERECHO COMERCIAL I", "tipo": "ninguno", "requisitos": ["01edbf33-9e97-4fb1-a62b-21e603aaf7e8"], "creditos": 5},
            {"id": "7ae2686c-cf3e-4a55-9ebf-2018519b3c86", "nombre": "DERECHO DEL TRABAJO II", "tipo": "ninguno", "requisitos": ["1267f291-8bde-4526-9373-c753e98eb126"], "creditos": 5},
            {"id": "72094852-27d9-4d6f-9194-363df638750f", "nombre": "DERECHO AMBIENTAL, DE LOS RECURSOS NATURALES Y DE LA SUSTENTABILIDAD", "tipo": "ninguno", "requisitos": ["ba649b1a-fb22-4d1d-9a37-390f1a1b7f99"], "creditos": 5}
        ]
    },
    {
        "año": 4,
        "periodo": 1,
        "materias": [
            {"id": "38efa2ae-b656-478b-8421-b45f1038650a", "nombre": "ÁREA ESPECIALIZADA DERECHO PROCESAL", "tipo": "ninguno", "requisitos": ["e9da9407-421e-48c2-8de9-516e9874fcfe"], "creditos": 4},
            {"id": "ac084b78-f09a-4f42-ae30-ae169d457e13", "nombre": "DERECHO CIVIL VI", "tipo": "ninguno", "requisitos": ["6bee94c2-6ddb-423e-ba4d-a869ac8ec558"], "creditos": 5},
            {"id": "5878161c-9c49-4819-93af-2d026bb89ccd", "nombre": "ÁREA ESPECIALIZADA CIENCIAS PENALES", "tipo": "ninguno", "requisitos": ["1534b4d1-f97a-4529-ade8-a3e8cf7d564c"], "creditos": 4},
            {"id": "da4c2e0c-9ea5-4aaf-855b-f34799e6ebdd", "nombre": "ÁREA ESPECILIZADA DERECHO ECONÓMICO II", "tipo": "ninguno", "requisitos": ["ba649b1a-fb22-4d1d-9a37-390f1a1b7f99"], "creditos": 4},
            {"id": "e6850d37-36a5-420d-8409-4bc7a0e89f54", "nombre": "DERECHO COMERCIAL II", "tipo": "ninguno", "requisitos": ["a48029b0-8b74-4c1c-be91-72f9a2b80686"], "creditos": 5},
            {"id": "2bb52d6a-6c76-48d4-97d8-faee744a2b3d", "nombre": "DERECHO DE LA SEGURIDAD SOCIAL", "tipo": "ninguno", "requisitos": ["7ae2686c-cf3e-4a55-9ebf-2018519b3c86"], "creditos": 5},
            {"id": "e7aa9b50-12c6-4419-abb7-5426c8dc8d52", "nombre": "ÁREA ESPECIALIZADA CIENCIAS DEL DERECHO", "tipo": "ninguno", "requisitos": ["1534b4d1-f97a-4529-ade8-a3e8cf7d564c"], "creditos": 4}
        ]
    },
    {
        "año": 4,
        "periodo": 2,
        "materias": [
            {"id": "f6ca8363-1d1e-43b6-a9b6-3122993ac508", "nombre": "TALLER DE MEMORIA I", "tipo": "ninguno", "requisitos": [], "creditos": 8},
            {"id": "dc0bf996-4193-45ff-8b07-d085618df15d", "nombre": "DERECHO CIVIL VII", "tipo": "ninguno", "requisitos": ["a48029b0-8b74-4c1c-be91-72f9a2b80686", "ac084b78-f09a-4f42-ae30-ae169d457e13"], "creditos": 5},
            {"id": "a6e0003c-cd87-46a6-8d3b-d9d831fec9b9", "nombre": "CLÍNICAS JURÍDICAS I", "tipo": "ninguno", "requisitos": [], "creditos": 7},
            {"id": "4a976ad4-c0b2-495f-8163-06aa14af60eb", "nombre": "PROFESIÓN JURÍDICA", "tipo": "ninguno", "requisitos": ["ac084b78-f09a-4f42-ae30-ae169d457e13"], "creditos": 5},
            {"id": "b05d47c1-4c2d-469a-a016-c9682eddebaa", "nombre": "DERECHO COMERCIAL III", "tipo": "ninguno", "requisitos": ["e6850d37-36a5-420d-8409-4bc7a0e89f54"], "creditos": 5},
            {"id": "efe32828-3189-4a40-a45c-34bdf7089f15", "nombre": "FORMACIÓN COMPLEMENTARIA (LIBRE/CFG)", "tipo": "cfg", "requisitos": [], "creditos": 2}
        ]
    },
    {
        "año": 5,
        "periodo": 1,
        "materias": [
            {"id": "6d8f513e-32d6-40b4-ba8a-00111bd15e1f", "nombre": "TALLER DE MEMORIA II", "tipo": "ninguno", "requisitos": ["f6ca8363-1d1e-43b6-a9b6-3122993ac508"], "creditos": 8},
            {"id": "19d7919b-c38b-4b7a-9e6b-c40a61660b93", "nombre": "ÁREA ESPECIALIZADA DERECHO PRIVADO", "tipo": "ninguno", "requisitos": ["dc0bf996-4193-45ff-8b07-d085618df15d"], "creditos": 4},
            {"id": "e7913eac-bb70-4b31-bcfe-b3826981a4ab", "nombre": "CLÍNICAS JURÍDICAS ESPECIALIZADAS", "tipo": "ninguno", "requisitos": ["a6e0003c-cd87-46a6-8d3b-d9d831fec9b9"], "creditos": 7},
            {"id": "a7288222-ff44-420b-aecf-924863b367e0", "nombre": "DERECHO TRIBUTARIO", "tipo": "ninguno", "requisitos": ["e6850d37-36a5-420d-8409-4bc7a0e89f54"], "creditos": 5},
            {"id": "f50a9cad-cc02-4ac5-948b-77ca68362ad3", "nombre": "ELECTIVO ABIERTO", "tipo": "electivo", "requisitos": [], "creditos": 4},
            {"id": "6ea754a1-f2a5-49f6-972e-e85116d59222", "nombre": "ELECTIVO ABIERTO", "tipo": "electivo", "requisitos": [], "creditos": 4}
        ]
    },
    {
        "año": 5,
        "periodo": 2,
        "materias": [
            {"id": "2be8d447-f97a-4982-a1a4-a0bb2e9baa00", "nombre": "TALLER INTEGRADO DE RESOLUCIÓN DE CASOS", "tipo": "ninguno", "requisitos": ["dc0bf996-4193-45ff-8b07-d085618df15d"], "creditos": 8},
            {"id": "69c9d027-a590-4935-a0da-8ba931b7572a", "nombre": "DERECHO INTERNACIONAL PRIVADO", "tipo": "ninguno", "requisitos": ["ac084b78-f09a-4f42-ae30-ae169d457e13", "8954f6b0-caf2-4794-8b65-b223b934b2f9"], "creditos": 5},
            {"id": "c6fa6833-048a-4ef1-b7dc-176d47a36eef", "nombre": "ELECTIVO ABIERTO", "tipo": "electivo", "requisitos": [], "creditos": 4},
            {"id": "1b3ff280-96ae-4018-b0b1-695289f16504", "nombre": "ELECTIVO ABIERTO", "tipo": "electivo", "requisitos": [], "creditos": 4},
            {"id": "258d9709-caf9-4aec-8e7f-9cd86d096779", "nombre": "FORMACIÓN COMPLEMENTARIA (LIBRE/CFG)", "tipo": "cfg", "requisitos": [], "creditos": 2}
        ]
    }
];

// Cargar malla curricular desde localStorage o usar la predeterminada
let mallaCurricular = JSON.parse(localStorage.getItem('mallaCurricular')) || defaultMallaCurricular;

// Objeto para almacenar el estado de las materias completadas y otros datos personalizados
let courseData = JSON.parse(localStorage.getItem('courseData')) || {};
// Inicializar completedCourses a partir de courseData si existe
let completedCourses = {};
for (const courseId in courseData) {
    if (courseData[courseId].completed) {
        completedCourses[courseId] = true;
    }
}

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

// Referencias para los nuevos campos del modal (edición de curso)
const editCourseNameInput = document.getElementById('edit-course-name');
const editCourseCreditsInput = document.getElementById('edit-course-credits');
const editCourseTypeSelect = document.getElementById('edit-course-type');
const professorNameInput = document.getElementById('professor-name');
const courseNotesTextarea = document.getElementById('course-notes');
const gradesContainer = document.getElementById('grades-container');
const addGradeButton = document.getElementById('add-grade-button');
const finalCourseGradeSpan = document.getElementById('final-course-grade');
const saveCourseDetailsButton = document.getElementById('save-course-details');
const includeInGpaCheckbox = document.getElementById('include-in-gpa');

// Referencias para los promedios y créditos
const creditsCounterSpan = document.getElementById('credits-counter');
const semesterGpaSpan = document.getElementById('semester-gpa');
const overallGpaSpan = document.getElementById('overall-gpa');
const calculateGpaButton = document.getElementById('calculate-gpa-button');

// Referencias para la personalización del fondo y tema
const backgroundColorPicker = document.getElementById('background-color-picker');
const backgroundImageInput = document.getElementById('background-image-input');
const clearBackgroundImageButton = document.getElementById('clear-background-image');
const primaryColorPicker = document.getElementById('primary-color-picker');
const secondaryColorPicker = document.getElementById('secondary-color-picker');
const borderRadiusSlider = document.getElementById('border-radius-slider');
const borderRadiusValueSpan = document.getElementById('border-radius-value');
const shadowIntensitySlider = document.getElementById('shadow-intensity-slider');
const shadowIntensityValueSpan = document.getElementById('shadow-intensity-value');
const fontFamilySelect = document.getElementById('font-family-select');
const semesterColumnsSelect = document.getElementById('semester-columns-select');
const resetCustomizationButton = document.getElementById('reset-customization');

const bodyElement = document.body;
const rootElement = document.documentElement; // Para variables CSS

// Referencias del calendario
const openCalendarButton = document.getElementById('open-calendar-button');
const calendarModal = document.getElementById('calendar-modal');
const closeCalendarModalButton = document.getElementById('close-calendar-modal');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
const currentMonthYearDisplay = document.getElementById('current-month-year');
const calendarDaysGrid = document.getElementById('calendar-days-grid');
const selectedDateDisplay = document.getElementById('selected-date-display');
const eventNotesInput = document.getElementById('event-notes-input');
const saveEventButton = document.getElementById('save-event-button');

// Variables del calendario
let currentCalendarDate = new Date(); // Fecha actual para el calendario
let calendarEvents = JSON.parse(localStorage.getItem('calendarEvents')) || {}; // { 'YYYY-MM-DD': 'Notas del evento' }
let selectedCalendarDate = null; // La fecha seleccionada en el calendario

// Variable para almacenar la materia actualmente seleccionada en el modal
let currentCourseForModal = null;

// Colores para los fondos de semestre (para que contrasten con los ramos)
const semesterBackgroundColors = [
    '#e0f7fa', // Light Cyan
    '#f3e5f5', // Light Purple
    '#fffde7', // Light Yellow
    '#e8f5e9', // Light Green
    '#fbe9e7', // Light Orange
    '#e3f2fd', // Lighter Blue
    '#fce4ec', // Lighter Pink
    '#f1f8e9', // Very Light Green
    '#ede7f6', // Very Light Purple
    '#ffe0b2'  // Light Peach
];


// Cargar la configuración de personalización guardada
loadCustomizationSettings();

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
 * Función para obtener el año más alto con al menos una materia completada.
 * Esto se usa para la restricción de cursos por año.
 * @returns {number} El año más alto completado, o 0 si no hay cursos completados.
 */
function getMaxCompletedYear() {
    let maxYear = 0;
    for (const semester of mallaCurricular) {
        for (const course of semester.materias) {
            if (completedCourses[course.id]) {
                maxYear = Math.max(maxYear, semester.año);
            }
        }
    }
    return maxYear;
}


/**
 * Función para renderizar la malla curricular.
 */
function renderCurriculum() {
    curriculumGrid.innerHTML = ''; // Limpiar el contenido actual de la malla
    const maxCompletedYear = getMaxCompletedYear();

    // Agrupar materias por año
    const years = {};
    mallaCurricular.forEach(semester => {
        if (!years[semester.año]) {
            years[semester.año] = [];
        }
        years[semester.año].push(semester);
    });

    let semesterColorIndex = 0; // Para ciclar los colores de fondo de los semestres

    for (const yearNum in years) {
        const yearContainer = document.createElement('div');
        yearContainer.className = 'year-container';

        const yearHeader = document.createElement('div');
        yearHeader.className = 'year-header';
        yearHeader.dataset.year = yearNum; // Almacenar el año para el toggle

        const yearTitle = document.createElement('h2');
        yearTitle.className = 'year-title';
        yearTitle.textContent = `Año ${yearNum}`;
        yearHeader.appendChild(yearTitle);

        const toggleIcon = document.createElement('span');
        toggleIcon.className = 'toggle-icon';
        toggleIcon.textContent = '▶'; // Icono de flecha
        yearHeader.appendChild(toggleIcon);

        yearContainer.appendChild(yearHeader);

        const semestersInYearDiv = document.createElement('div');
        semestersInYearDiv.className = 'semesters-in-year';
        // Aplicar el número de columnas seleccionado
        semestersInYearDiv.style.gridTemplateColumns = `repeat(${customizationSettings.semesterColumns}, 1fr)`;


        years[yearNum].forEach(semester => {
            // Crear un div para cada columna de semestre
            const semesterColumn = document.createElement('div');
            semesterColumn.className = 'semester-column';
            // Asignar color de fondo único al semestre
            semesterColumn.style.setProperty('--semester-bg-color', semesterBackgroundColors[semesterColorIndex % semesterBackgroundColors.length]);
            semesterColorIndex++;

            // Crear el título del semestre
            const semesterSubtitle = document.createElement('h3');
            semesterSubtitle.className = 'semester-subtitle';
            semesterSubtitle.textContent = `Semestre ${semester.periodo}`;
            semesterColumn.appendChild(semesterSubtitle);

            // Iterar sobre las materias de cada semestre
            semester.materias.forEach(course => {
                // Crear la tarjeta de la materia
                const courseCard = document.createElement('div');
                courseCard.className = 'course-card';
                courseCard.dataset.courseId = course.id; // Almacenar el ID de la materia en el dataset

                // Determinar el estado de la materia (completado, pendiente, no disponible)
                let statusClass = 'status-pending';
                let statusText = 'Pendiente';
                let isClickable = true; // Por defecto, las materias son clicables

                const isElectiveOrCfg = course.tipo === 'electivo' || course.tipo === 'cfg';
                // La restricción de año se aplica a cursos "normales"
                const isYearRestricted = !isElectiveOrCfg && parseInt(yearNum) > (maxCompletedYear + 1);

                if (completedCourses[course.id]) {
                    statusClass = 'status-completed';
                    statusText = 'Completado';
                } else if (!checkRequisites(course.requisitos)) {
                    statusClass = 'status-unavailable';
                    statusText = 'No Disponible (Requisitos)';
                    isClickable = false;
                } else if (isYearRestricted) {
                     // Restricción por año para cursos no electivos/CFG
                    statusClass = 'status-unavailable';
                    statusText = 'No Disponible (Año)';
                    isClickable = false;
                }


                // Añadir clases de estilo basadas en el estado
                courseCard.classList.add(statusClass);

                // Contenido de la tarjeta de la materia
                const courseName = document.createElement('p');
                courseName.className = 'course-name';
                courseName.textContent = course.nombre;
                courseCard.appendChild(courseName);

                const courseFooter = document.createElement('div');
                courseFooter.className = 'course-footer';

                const courseCredits = document.createElement('span');
                courseCredits.className = 'course-credits';
                courseCredits.textContent = `${course.creditos} SCT`;
                courseFooter.appendChild(courseCredits);

                const courseStatus = document.createElement('span');
                courseStatus.className = 'course-status';
                courseStatus.textContent = statusText;
                courseFooter.appendChild(courseStatus);
                courseCard.appendChild(courseFooter);


                // Añadir evento de click para marcar como completado/pendiente
                if (isClickable) {
                    courseCard.addEventListener('click', () => {
                        toggleCourseCompletion(course.id);
                    });
                }

                // Añadir evento de click para mostrar requisitos y detalles (contextmenu o click si no es clicable para completar)
                courseCard.addEventListener('contextmenu', (e) => {
                    e.preventDefault(); // Prevenir el menú contextual por defecto
                    showCourseDetailsModal(course);
                });
                if (!isClickable) { // Si no es clicable para marcar, el clic normal abre el modal de detalles
                    courseCard.addEventListener('click', () => {
                        showCourseDetailsModal(course);
                    });
                }

                semesterColumn.appendChild(courseCard);
            });
            semestersInYearDiv.appendChild(semesterColumn);
        });
        yearContainer.appendChild(semestersInYearDiv);
        curriculumGrid.appendChild(yearContainer);

        // Añadir evento de click para expandir/colapsar el año
        yearHeader.addEventListener('click', () => {
            yearHeader.classList.toggle('expanded');
        });
    }
    calculateSemesterAndOverallGPA(); // Recalcular promedios al renderizar
    updateCreditsCounter(); // Actualizar contador de créditos
}

/**
 * Función para marcar/desmarcar una materia como completada.
 * @param {string} courseId - El ID de la materia a alternar.
 */
function toggleCourseCompletion(courseId) {
    if (courseData[courseId] && courseData[courseId].completed) {
        // Si la materia está completada, desmarcarla
        courseData[courseId].completed = false;
        delete completedCourses[courseId]; // Eliminar del objeto de completados
    } else {
        // Si la materia no está completada, marcarla
        if (!courseData[courseId]) {
            courseData[courseId] = {};
        }
        courseData[courseId].completed = true;
        completedCourses[courseId] = true; // Añadir al objeto de completados
    }
    saveCourseData(); // Guardar el estado
    renderCurriculum(); // Volver a renderizar la malla para actualizar el estado visual
}

/**
 * Función para mostrar el modal de detalles del curso.
 * @param {object} course - El objeto de la materia.
 */
function showCourseDetailsModal(course) {
    currentCourseForModal = course; // Almacenar la materia actual
    modalTitle.textContent = `Detalles de: ${course.nombre}`;
    modalRequisitesList.innerHTML = ''; // Limpiar la lista de requisitos anterior
    summaryOutput.innerHTML = ''; // Limpiar el resumen anterior
    summaryOutput.classList.add('hidden'); // Ocultar el resumen
    summaryError.classList.add('hidden'); // Ocultar errores
    summaryLoadingSpinner.classList.add('hidden'); // Ocultar spinner

    // Cargar datos guardados para el curso
    const savedCourse = courseData[course.id] || {};

    // Rellenar campos de edición de curso
    editCourseNameInput.value = course.nombre;
    editCourseCreditsInput.value = course.creditos;
    editCourseTypeSelect.value = course.tipo;

    // Rellenar campos adicionales
    professorNameInput.value = savedCourse.professor || '';
    courseNotesTextarea.value = savedCourse.notes || '';
    includeInGpaCheckbox.checked = savedCourse.includeInGpa !== undefined ? savedCourse.includeInGpa : true; // Por defecto true

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

    // Cargar y renderizar calificaciones
    renderGradesInput(savedCourse.grades || []);
    calculateFinalCourseGrade(); // Calcular la nota final al abrir el modal

    requisitesModal.classList.remove('hidden'); // Mostrar el modal
}

/**
 * Renderiza los campos de entrada para las calificaciones de un curso.
 * @param {Array<object>} grades - Array de objetos de calificación.
 */
function renderGradesInput(grades) {
    gradesContainer.innerHTML = ''; // Limpiar las entradas anteriores
    if (grades.length === 0) {
        // Añadir una entrada vacía si no hay calificaciones
        addGradeInput();
    } else {
        grades.forEach(grade => addGradeInput(grade));
    }
    // Añadir listeners para recalcular la nota final al cambiar las calificaciones
    gradesContainer.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', calculateFinalCourseGrade);
    });
}

/**
 * Añade un nuevo campo de entrada para una calificación.
 * @param {object} [grade={}] - Objeto de calificación opcional para pre-llenar.
 */
function addGradeInput(grade = {}) {
    const gradeGroup = document.createElement('div');
    gradeGroup.className = 'grade-input-group';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Nombre (ej. Control 1)';
    nameInput.value = grade.nombre || '';
    nameInput.className = 'p-2 border rounded-md text-sm';
    nameInput.addEventListener('input', calculateFinalCourseGrade);

    const scoreInput = document.createElement('input');
    scoreInput.type = 'number';
    scoreInput.placeholder = 'Nota (1.0-7.0)';
    scoreInput.min = '1.0';
    scoreInput.max = '7.0';
    scoreInput.step = '0.1';
    scoreInput.value = grade.nota !== undefined ? grade.nota : '';
    scoreInput.className = 'p-2 border rounded-md text-sm w-24';
    scoreInput.addEventListener('input', calculateFinalCourseGrade);

    const weightInput = document.createElement('input');
    weightInput.type = 'number';
    weightInput.placeholder = 'Ponderación (%)';
    weightInput.min = '0';
    weightInput.max = '100';
    weightInput.value = grade.ponderacion !== undefined ? grade.ponderacion : '';
    weightInput.className = 'p-2 border rounded-md text-sm w-28';
    weightInput.addEventListener('input', calculateFinalCourseGrade);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.className = 'bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md transition duration-300 ease-in-out text-xs';
    removeButton.addEventListener('click', () => {
        gradeGroup.remove();
        calculateFinalCourseGrade(); // Recalcular después de eliminar
    });

    gradeGroup.appendChild(nameInput);
    gradeGroup.appendChild(scoreInput);
    gradeGroup.appendChild(weightInput);
    gradeGroup.appendChild(removeButton);
    gradesContainer.appendChild(gradeGroup);
}

// Event listener para añadir una nueva calificación
addGradeButton.addEventListener('click', () => addGradeInput());

/**
 * Calcula la nota final del curso actual en el modal.
 */
function calculateFinalCourseGrade() {
    let totalScore = 0;
    let totalWeight = 0;
    let hasValidGrades = false;

    const gradeInputs = gradesContainer.querySelectorAll('.grade-input-group');
    const currentGrades = [];

    gradeInputs.forEach(group => {
        const name = group.children[0].value;
        const score = parseFloat(group.children[1].value);
        const weight = parseFloat(group.children[2].value);

        if (!isNaN(score) && score >= 1.0 && score <= 7.0 && !isNaN(weight) && weight >= 0) {
            totalScore += (score * weight);
            totalWeight += weight;
            hasValidGrades = true;
            currentGrades.push({ nombre: name, nota: score, ponderacion: weight });
        } else if (name || !isNaN(score) || !isNaN(weight)) { // Si algún campo está parcialmente lleno, considéralo para guardar
             currentGrades.push({ nombre: name, nota: isNaN(score) ? null : score, ponderacion: isNaN(weight) ? null : weight });
        }
    });

    if (hasValidGrades && totalWeight > 0) {
        const finalGrade = totalScore / totalWeight;
        finalCourseGradeSpan.textContent = finalGrade.toFixed(2);
    } else {
        finalCourseGradeSpan.textContent = 'N/A';
    }

    // Actualizar el objeto courseData con las calificaciones actuales y nota final del ramo
    if (currentCourseForModal) {
        if (!courseData[currentCourseForModal.id]) {
            courseData[currentCourseForModal.id] = {};
        }
        courseData[currentCourseForModal.id].grades = currentGrades;
        courseData[currentCourseForModal.id].finalGrade = hasValidGrades && totalWeight > 0 ? parseFloat(finalCourseGradeSpan.textContent) : null;
    }
}

/**
 * Guarda los detalles del curso (nombre, créditos, tipo, profesor, notas, calificaciones) en localStorage.
 */
saveCourseDetailsButton.addEventListener('click', () => {
    if (currentCourseForModal) {
        const courseId = currentCourseForModal.id;
        
        // Actualizar la malla curricular con los nuevos datos del curso
        let courseFound = false;
        for (const semester of mallaCurricular) {
            const courseIndex = semester.materias.findIndex(m => m.id === courseId);
            if (courseIndex !== -1) {
                semester.materias[courseIndex].nombre = editCourseNameInput.value;
                semester.materias[courseIndex].creditos = parseInt(editCourseCreditsInput.value) || 0;
                semester.materias[courseIndex].tipo = editCourseTypeSelect.value;
                courseFound = true;
                break;
            }
        }
        saveMallaCurricular(); // Guardar la malla curricular actualizada

        // Guardar datos personalizados del curso
        if (!courseData[courseId]) {
            courseData[courseId] = {};
        }
        courseData[courseId].professor = professorNameInput.value;
        courseData[courseId].notes = courseNotesTextarea.value;
        courseData[courseId].includeInGpa = includeInGpaCheckbox.checked;

        // Las calificaciones y la nota final ya se actualizan en calculateFinalCourseGrade
        saveCourseData();
        requisitesModal.classList.add('hidden');
        renderCurriculum(); // Re-render para actualizar posibles cambios en el estado de disponibilidad por notas o datos del curso
    }
});

/**
 * Guarda los datos personalizados del curso en localStorage.
 */
function saveCourseData() {
    localStorage.setItem('courseData', JSON.stringify(courseData));
}

/**
 * Guarda la estructura de la malla curricular en localStorage.
 */
function saveMallaCurricular() {
    localStorage.setItem('mallaCurricular', JSON.stringify(mallaCurricular));
}

/**
 * Calcula y actualiza el contador de créditos alcanzados.
 */
function updateCreditsCounter() {
    let totalCreditsAchieved = 0;
    mallaCurricular.forEach(semester => {
        semester.materias.forEach(course => {
            const courseId = course.id;
            const savedCourse = courseData[courseId] || {};
            if (savedCourse.completed) { // Solo contar si el curso está marcado como completado
                totalCreditsAchieved += course.creditos;
            }
        });
    });
    creditsCounterSpan.textContent = totalCreditsAchieved;
}


/**
 * Calcula y muestra el promedio semestral y el promedio general de carrera.
 */
function calculateSemesterAndOverallGPA() {
    let totalCreditsOverall = 0;
    let totalWeightedScoreOverall = 0;

    // Calcular promedio general de carrera
    mallaCurricular.forEach(semester => {
        semester.materias.forEach(course => {
            const courseId = course.id;
            const savedCourse = courseData[courseId] || {};

            if (savedCourse.completed && savedCourse.finalGrade !== null && savedCourse.finalGrade !== undefined && savedCourse.includeInGpa) {
                totalCreditsOverall += course.creditos;
                totalWeightedScoreOverall += (savedCourse.finalGrade * course.creditos);
            }
        });
    });

    if (totalCreditsOverall > 0) {
        const overallGPA = totalWeightedScoreOverall / totalCreditsOverall;
        overallGpaSpan.textContent = overallGPA.toFixed(2);
    } else {
        overallGpaSpan.textContent = 'N/A';
    }

    // Calcular promedio del último semestre completado con notas
    let latestSemesterGPA = 'N/A';
    for (let i = mallaCurricular.length - 1; i >= 0; i--) {
        const semester = mallaCurricular[i];
        let currentSemesterCredits = 0;
        let currentSemesterWeightedScore = 0;

        semester.materias.forEach(course => {
            const courseId = course.id;
            const savedCourse = courseData[courseId] || {};
            if (savedCourse.completed && savedCourse.finalGrade !== null && savedCourse.finalGrade !== undefined) {
                currentSemesterCredits += course.creditos;
                currentSemesterWeightedScore += (savedCourse.finalGrade * course.creditos);
            }
        });

        if (currentSemesterCredits > 0) {
            latestSemesterGPA = (currentSemesterWeightedScore / currentSemesterCredits).toFixed(2);
            break; // Se encontró el semestre más reciente con cursos completados y notas
        }
    }
    semesterGpaSpan.textContent = latestSemesterGPA;
}

// Event listener para el botón de generar resumen
generateSummaryButton.addEventListener('click', async () => {
    if (currentCourseForModal) {
        await generateCourseSummary(currentCourseForModal.nombre);
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

// Event listener para el botón de calcular promedios
calculateGpaButton.addEventListener('click', calculateSemesterAndOverallGPA);

// --- Funcionalidad de Personalización General ---

const defaultCustomizationSettings = {
    backgroundColor: '#f3f4f6',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(\'https://placehold.co/1920x1080/2c3e50/ecf0f1?text=Justicia%20y%20Derecho\')',
    primaryColor: '#2563eb',
    secondaryColor: '#eff6ff',
    borderRadius: '8', // en px
    shadowIntensity: '1', // 0: none, 1: base, 2: medium, 3: strong
    fontFamily: 'Inter, sans-serif',
    semesterColumns: '3'
};

let customizationSettings = JSON.parse(localStorage.getItem('customizationSettings')) || defaultCustomizationSettings;

/**
 * Guarda la configuración de personalización en localStorage.
 */
function saveCustomizationSettings() {
    localStorage.setItem('customizationSettings', JSON.stringify(customizationSettings));
    applyCustomizationSettings(); // Aplicar inmediatamente los cambios
}

/**
 * Carga la configuración de personalización desde localStorage y la aplica.
 */
function loadCustomizationSettings() {
    // Aplicar colores y fondo
    bodyElement.style.backgroundColor = customizationSettings.backgroundColor;
    bodyElement.style.backgroundImage = customizationSettings.backgroundImage;
    if (customizationSettings.backgroundImage !== 'none') {
        bodyElement.style.backgroundSize = 'cover';
        bodyElement.style.backgroundPosition = 'center';
        bodyElement.style.backgroundAttachment = 'fixed';
        bodyElement.style.backgroundBlendMode = 'multiply'; // Asegura el blend mode para el fondo por defecto
        bodyElement.style.color = '#ecf0f1'; // Color de texto claro para fondo oscuro
    } else {
        bodyElement.style.backgroundBlendMode = 'normal';
        bodyElement.style.color = '#374151'; // Color de texto oscuro para fondo claro
    }

    // Aplicar variables CSS
    rootElement.style.setProperty('--primary-color', customizationSettings.primaryColor);
    // Calcular un color oscuro para primary-color-dark
    const primaryColorRgb = hexToRgb(customizationSettings.primaryColor);
    if (primaryColorRgb) {
        const darkPrimaryColor = `rgb(${primaryColorRgb.r * 0.8}, ${primaryColorRgb.g * 0.8}, ${primaryColorRgb.b * 0.8})`;
        rootElement.style.setProperty('--primary-color-dark', darkPrimaryColor);
    } else {
        rootElement.style.setProperty('--primary-color-dark', '#1d4ed8'); // Fallback
    }

    rootElement.style.setProperty('--secondary-color', customizationSettings.secondaryColor);
    rootElement.style.setProperty('--border-radius', `${customizationSettings.borderRadius}px`);
    rootElement.style.setProperty('--font-family', customizationSettings.fontFamily);
    rootElement.style.setProperty('--semester-columns', customizationSettings.semesterColumns);


    // Aplicar sombras
    let shadowBase = 'none';
    let shadowHover = 'none';
    if (customizationSettings.shadowIntensity === '1') {
        shadowBase = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        shadowHover = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    } else if (customizationSettings.shadowIntensity === '2') {
        shadowBase = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        shadowHover = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    } else if (customizationSettings.shadowIntensity === '3') {
        shadowBase = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        shadowHover = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
    }
    rootElement.style.setProperty('--shadow-base', shadowBase);
    rootElement.style.setProperty('--shadow-hover', shadowHover);

    // Actualizar valores en los controles de UI
    backgroundColorPicker.value = customizationSettings.backgroundColor;
    primaryColorPicker.value = customizationSettings.primaryColor;
    secondaryColorPicker.value = customizationSettings.secondaryColor;
    borderRadiusSlider.value = customizationSettings.borderRadius;
    borderRadiusValueSpan.textContent = `${customizationSettings.borderRadius}px`;
    shadowIntensitySlider.value = customizationSettings.shadowIntensity;
    shadowIntensityValueSpan.textContent = getShadowText(customizationSettings.shadowIntensity);
    fontFamilySelect.value = customizationSettings.fontFamily;
    semesterColumnsSelect.value = customizationSettings.semesterColumns;

    // Re-renderizar la malla para aplicar cambios de columnas
    renderCurriculum();
}

/**
 * Aplica la configuración de personalización actual a los estilos.
 * Se llama después de cargar o guardar la configuración.
 */
function applyCustomizationSettings() {
    loadCustomizationSettings(); // Simplemente recarga y aplica
}

/**
 * Convierte un color RGB a formato HEX.
 * @param {string} rgb - Color en formato 'rgb(r, g, b)'.
 * @returns {string} Color en formato '#rrggbb'.
 */
function rgbToHex(rgb) {
    if (!rgb || rgb.startsWith('linear-gradient')) return null;
    const parts = rgb.match(/\d+/g);
    if (!parts || parts.length < 3) return null;
    const hex = parts.map(x => {
        const hexVal = parseInt(x).toString(16);
        return hexVal.length === 1 ? '0' + hexVal : hexVal;
    }).join('');
    return `#${hex}`;
}

/**
 * Convierte un color HEX a formato RGB.
 * @param {string} hex - Color en formato '#rrggbb'.
 * @returns {object} Objeto con propiedades r, g, b.
 */
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}


/**
 * Obtiene el texto descriptivo para la intensidad de sombra.
 * @param {string} value - El valor de la intensidad (0-3).
 * @returns {string} Texto descriptivo.
 */
function getShadowText(value) {
    switch (value) {
        case '0': return 'Ninguna';
        case '1': return 'Baja';
        case '2': return 'Media';
        case '3': return 'Fuerte';
        default: return 'Baja';
    }
}

// --- Event Listeners para Personalización ---

backgroundColorPicker.addEventListener('input', (e) => {
    customizationSettings.backgroundColor = e.target.value;
    customizationSettings.backgroundImage = 'none'; // Clear image if color is picked
    saveCustomizationSettings();
});

backgroundImageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            customizationSettings.backgroundImage = `url('${event.target.result}')`;
            saveCustomizationSettings();
        };
        reader.readAsDataURL(file);
    }
});

clearBackgroundImageButton.addEventListener('click', () => {
    customizationSettings.backgroundImage = 'none';
    saveCustomizationSettings();
});

primaryColorPicker.addEventListener('input', (e) => {
    customizationSettings.primaryColor = e.target.value;
    saveCustomizationSettings();
});

secondaryColorPicker.addEventListener('input', (e) => {
    customizationSettings.secondaryColor = e.target.value;
    saveCustomizationSettings();
});

borderRadiusSlider.addEventListener('input', (e) => {
    customizationSettings.borderRadius = e.target.value;
    borderRadiusValueSpan.textContent = `${e.target.value}px`;
    saveCustomizationSettings();
});

shadowIntensitySlider.addEventListener('input', (e) => {
    customizationSettings.shadowIntensity = e.target.value;
    shadowIntensityValueSpan.textContent = getShadowText(e.target.value);
    saveCustomizationSettings();
});

fontFamilySelect.addEventListener('change', (e) => {
    customizationSettings.fontFamily = e.target.value;
    saveCustomizationSettings();
});

semesterColumnsSelect.addEventListener('change', (e) => {
    customizationSettings.semesterColumns = e.target.value;
    saveCustomizationSettings();
});

resetCustomizationButton.addEventListener('click', () => {
    localStorage.removeItem('customizationSettings');
    localStorage.removeItem('mallaCurricular'); // También restablecer la malla a la original
    localStorage.removeItem('courseData'); // Y los datos de los cursos
    customizationSettings = { ...defaultCustomizationSettings }; // Reset to default
    mallaCurricular = JSON.parse(JSON.stringify(defaultMallaCurricular)); // Deep copy to reset
    courseData = {}; // Clear course data
    completedCourses = {}; // Clear completed courses
    applyCustomizationSettings();
    renderCurriculum(); // Re-render everything
});

// --- Funcionalidad del Calendario ---

openCalendarButton.addEventListener('click', () => {
    calendarModal.classList.remove('hidden');
    renderCalendar();
});

closeCalendarModalButton.addEventListener('click', () => {
    calendarModal.classList.add('hidden');
});

prevMonthButton.addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
    renderCalendar();
});

saveEventButton.addEventListener('click', () => {
    if (selectedCalendarDate) {
        const dateKey = formatDate(selectedCalendarDate);
        calendarEvents[dateKey] = eventNotesInput.value;
        localStorage.setItem('calendarEvents', JSON.stringify(calendarEvents));
        renderCalendar(); // Re-render para mostrar el punto de evento
    }
});

/**
 * Renderiza el calendario para el mes y año actuales.
 */
function renderCalendar() {
    calendarDaysGrid.innerHTML = '';
    currentMonthYearDisplay.textContent = currentCalendarDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' });

    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth(); // 0-indexed

    // Obtener el primer día del mes
    const firstDayOfMonth = new Date(year, month, 1);
    // Obtener el último día del mes
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Calcular el día de la semana del primer día (0=Dom, 1=Lun...)
    const startDayOfWeek = firstDayOfMonth.getDay();

    // Días del mes anterior para rellenar el inicio
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = prevMonthLastDay - i;
        calendarDaysGrid.appendChild(dayElement);
    }

    // Días del mes actual
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day current-month';
        dayElement.textContent = i;

        const fullDate = new Date(year, month, i);
        const dateKey = formatDate(fullDate);

        // Marcar el día de hoy
        if (isSameDay(fullDate, new Date())) {
            dayElement.classList.add('today');
        }

        // Marcar si tiene eventos
        if (calendarEvents[dateKey] && calendarEvents[dateKey].trim() !== '') {
            dayElement.classList.add('has-event');
        }

        // Marcar si es el día seleccionado
        if (selectedCalendarDate && isSameDay(fullDate, selectedCalendarDate)) {
            dayElement.classList.add('selected');
            selectedDateDisplay.textContent = fullDate.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
            eventNotesInput.value = calendarEvents[dateKey] || '';
        }

        dayElement.addEventListener('click', () => {
            selectedCalendarDate = fullDate;
            renderCalendar(); // Re-render para resaltar el día seleccionado
        });

        calendarDaysGrid.appendChild(dayElement);
    }

    // Días del mes siguiente para rellenar el final
    const totalDaysDisplayed = startDayOfWeek + lastDayOfMonth.getDate();
    const remainingDays = 42 - totalDaysDisplayed; // 6 filas * 7 días = 42 celdas
    for (let i = 1; i <= remainingDays; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = i;
        calendarDaysGrid.appendChild(dayElement);
    }

    // Si no hay fecha seleccionada, mostrar la fecha actual en el input de notas
    if (!selectedCalendarDate) {
        selectedDateDisplay.textContent = new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        eventNotesInput.value = ''; // Limpiar notas si no hay día seleccionado
    }
}

/**
 * Formatea una fecha a 'YYYY-MM-DD'.
 * @param {Date} date - Objeto de fecha.
 * @returns {string} Fecha formateada.
 */
function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Compara si dos fechas son el mismo día (ignorando la hora).
 * @param {Date} date1
 * @param {Date} date2
 * @returns {boolean}
 */
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}


// Renderizar la malla curricular cuando la página se carga
document.addEventListener('DOMContentLoaded', renderCurriculum);
