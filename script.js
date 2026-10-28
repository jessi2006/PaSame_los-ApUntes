

const initialNotes = [

    {
        id: "note-1",

        title: "Introducción al diseño gráfico",

        subject: "Diseño Gráfico",

        type: "Apunte",

        description:
            "Conceptos básicos del diseño gráfico, elementos visuales, composición y principios fundamentales.",

        author: "Camila Rojas",

        date: "2026-09-20",

        tags: [
            "diseño",
            "composición",
            "teoría"
        ],

        content:
            "El diseño gráfico utiliza elementos visuales para comunicar un mensaje.\n\nElementos principales:\n• Línea\n• Forma\n• Color\n• Tipografía\n• Espacio\n\nPrincipios:\n• Equilibrio\n• Contraste\n• Jerarquía\n• Proporción\n• Ritmo",

        link: "",

        favorite: false,

        downloads: 34,

        own: false
    },


    {
        id: "note-2",

        title: "Resumen de tipografía",

        subject: "Diseño Editorial",

        type: "Resumen",

        description:
            "Resumen sobre clasificación tipográfica, anatomía de las letras, familias y legibilidad.",

        author: "Paola Canaviri",

        date: "2026-09-18",

        tags: [
            "tipografía",
            "editorial",
            "letras"
        ],

        content:
            "La tipografía es el arte y técnica de organizar tipos para facilitar la comunicación.\n\nClasificaciones comunes:\n• Serif\n• Sans Serif\n• Script\n• Display\n\nLa legibilidad depende de factores como tamaño, interlineado, contraste y longitud de línea.",

        link: "",

        favorite: true,

        downloads: 51,

        own: false
    },


    {
        id: "note-3",

        title: "Marketing digital - conceptos clave",

        subject: "Marketing",

        type: "Guía",

        description:
            "Guía rápida con conceptos importantes de marketing digital y comportamiento del consumidor.",

        author: "Diego Vargas",

        date: "2026-09-15",

        tags: [
            "marketing",
            "digital",
            "estrategia"
        ],

        content:
            "Marketing digital:\n\n1. Público objetivo\n2. Buyer persona\n3. Propuesta de valor\n4. Redes sociales\n5. Contenido\n6. Métricas\n7. Conversión\n\nUna estrategia debe partir de objetivos claros y medibles.",

        link: "",

        favorite: false,

        downloads: 42,

        own: false
    },


    {
        id: "note-4",

        title: "Historia del arte contemporáneo",

        subject: "Historia del Arte",

        type: "Resumen",

        description:
            "Resumen de los principales movimientos artísticos contemporáneos y sus características.",

        author: "Andrea Montes",

        date: "2026-09-12",

        tags: [
            "arte",
            "historia",
            "contemporáneo"
        ],

        content:
            "El arte contemporáneo reúne diferentes movimientos y lenguajes visuales.\n\nAlgunas características:\n• Experimentación\n• Nuevos materiales\n• Conceptualización\n• Interdisciplinariedad\n• Participación del espectador",

        link: "",

        favorite: false,

        downloads: 28,

        own: false
    },


    {
        id: "note-5",

        title: "Fotografía: composición y encuadre",

        subject: "Fotografía",

        type: "Apunte",

        description:
            "Conceptos esenciales para mejorar la composición de fotografías mediante encuadres y reglas visuales.",

        author: "Lorena Chavez",

        date: "2026-09-10",

        tags: [
            "fotografía",
            "composición",
            "encuadre"
        ],

        content:
            "Reglas útiles de composición:\n\n• Regla de tercios\n• Líneas guía\n• Simetría\n• Espacio negativo\n• Encuadre natural\n• Profundidad\n\nLa composición ayuda a dirigir la atención del espectador.",

        link: "",

        favorite: false,

        downloads: 63,

        own: false
    },


    {
        id: "note-6",

        title: "HTML y CSS desde cero",

        subject: "Desarrollo Web",

        type: "Guía",

        description:
            "Guía básica para comprender la estructura HTML y los estilos CSS de una página web.",

        author: "Bruno Salazar",

        date: "2026-09-08",

        tags: [
            "html",
            "css",
            "web"
        ],

        content:
            "HTML define la estructura y contenido de una página.\n\nCSS controla su presentación visual.\n\nHTML utiliza elementos como:\n• header\n• main\n• section\n• article\n• footer\n\nCSS permite trabajar con colores, tamaños, espacios, posiciones y responsive design.",

        link: "",

        favorite: false,

        downloads: 74,

        own: false
    },


    {
        id: "note-7",

        title: "Proceso creativo para proyectos",

        subject: "Creatividad",

        type: "Presentación",

        description:
            "Material sobre investigación, ideación, conceptualización y desarrollo de proyectos creativos.",

        author: "Valeria Gómez",

        date: "2026-09-05",

        tags: [
            "creatividad",
            "proceso",
            "ideas"
        ],

        content:
            "Etapas de un proceso creativo:\n\n1. Investigación\n2. Observación\n3. Definición del problema\n4. Lluvia de ideas\n5. Selección\n6. Prototipado\n7. Evaluación\n8. Presentación",

        link: "",

        favorite: false,

        downloads: 37,

        own: false
    },


    {
        id: "note-8",

        title: "Diseño de identidad visual",

        subject: "Branding",

        type: "Trabajo",

        description:
            "Apuntes sobre identidad visual, construcción de marca, logotipo, color y aplicaciones.",

        author: "Sofía Mendoza",

        date: "2026-09-03",

        tags: [
            "branding",
            "marca",
            "identidad"
        ],

        content:
            "Una identidad visual está formada por diferentes elementos que permiten reconocer una marca.\n\nElementos:\n• Logotipo\n• Paleta cromática\n• Tipografía\n• Recursos gráficos\n• Aplicaciones\n• Manual de marca",

        link: "",

        favorite: true,

        downloads: 48,

        own: false
    }

];


/* =====================================================
   ESTADO
===================================================== */

let notes = [];

let currentView = "all";

let toastTimeout;

const routeViews = {
    "/inicio": "all",
    "/explorar": "all",
    "/favoritos": "favorites",
    "/mis-apuntes": "mine"
};


/* =====================================================
   ELEMENTOS HTML
===================================================== */

const notesGrid =
    document.getElementById("notesGrid");

const emptyState =
    document.getElementById("emptyState");

const searchInput =
    document.getElementById("searchInput");

const filterSearch =
    document.getElementById("filterSearch");

const searchButton =
    document.getElementById("searchButton");

const subjectFilter =
    document.getElementById("subjectFilter");

const typeFilter =
    document.getElementById("typeFilter");

const sortFilter =
    document.getElementById("sortFilter");

const clearFilters =
    document.getElementById("clearFilters");

const resetView =
    document.getElementById("resetView");

const emptyReset =
    document.getElementById("emptyReset");

const resultsCount =
    document.getElementById("resultsCount");

const statNotes =
    document.getElementById("statNotes");

const statSubjects =
    document.getElementById("statSubjects");

const statFavorites =
    document.getElementById("statFavorites");

const statDownloads =
    document.getElementById("statDownloads");

const formModal =
    document.getElementById("formModal");

const detailModal =
    document.getElementById("detailModal");

const openAddModal =
    document.getElementById("openAddModal");

const noteForm =
    document.getElementById("noteForm");

const detailHeader =
    document.getElementById("detailHeader");

const detailContent =
    document.getElementById("detailContent");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

const toastIcon =
    document.getElementById("toastIcon");

const themeToggle =
    document.getElementById("themeToggle");

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");

const viewTitle =
    document.getElementById("viewTitle");

const viewDescription =
    document.getElementById("viewDescription");

const notFoundView =
    document.getElementById("notFoundView");


/* =====================================================
   SEGURIDAD DE TEXTO
===================================================== */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =====================================================
   NORMALIZAR TEXTO
===================================================== */

function normalizeText(value) {

    return String(value ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}


/* =====================================================
   FECHAS
===================================================== */

function formatDate(dateString) {

    const date =
        new Date(`${dateString}T12:00:00`);

    if (Number.isNaN(date.getTime())) {
        return "Fecha no disponible";
    }

    return new Intl.DateTimeFormat(
        "es-BO",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    ).format(date);
}


/* =====================================================
   INICIALES
===================================================== */

function getInitials(name) {

    const words =
        String(name)
            .trim()
            .split(/\s+/)
            .filter(Boolean);


    if (words.length === 0) {
        return "?";
    }


    if (words.length === 1) {
        return words[0]
            .slice(0, 2)
            .toUpperCase();
    }


    return (
        words[0][0] +
        words[words.length - 1][0]
    ).toUpperCase();
}


/* =====================================================
   GENERAR ID
===================================================== */

function generateId() {

    return (
        "note-" +
        Date.now() +
        "-" +
        Math.random()
            .toString(36)
            .slice(2, 8)
    );
}


/* =====================================================
   LOCAL STORAGE
===================================================== */

function loadNotes() {

    const savedNotes =
        localStorage.getItem(
            "pasameLosApuntesNotes"
        );


    if (!savedNotes) {

        notes = [...initialNotes];

        saveNotes();

        return;
    }


    try {

        const parsed =
            JSON.parse(savedNotes);


        if (Array.isArray(parsed)) {

            notes = parsed;

        } else {

            notes = [...initialNotes];

        }

    } catch (error) {

        notes = [...initialNotes];

    }
}


function saveNotes() {

    localStorage.setItem(
        "pasameLosApuntesNotes",
        JSON.stringify(notes)
    );
}


/* =====================================================
   MATERIAS
===================================================== */

function populateSubjects() {

    const currentValue =
        subjectFilter.value;


    const subjects =
        [...new Set(
            notes.map(note => note.subject)
        )].sort(
            (a, b) =>
                a.localeCompare(
                    b,
                    "es"
                )
        );


    subjectFilter.innerHTML = `
        <option value="all">
            Todas las materias
        </option>
    `;


    subjects.forEach(subject => {

        const option =
            document.createElement("option");

        option.value = subject;

        option.textContent = subject;

        subjectFilter.appendChild(option);

    });


    if (
        subjects.includes(currentValue)
    ) {

        subjectFilter.value =
            currentValue;

    } else {

        subjectFilter.value = "all";

    }
}


/* =====================================================
   ESTADÍSTICAS
===================================================== */

function updateStats() {

    const subjects =
        new Set(
            notes.map(
                note => note.subject
            )
        );


    const favorites =
        notes.filter(
            note => note.favorite
        ).length;


    const downloads =
        notes.reduce(
            (total, note) =>
                total +
                Number(note.downloads || 0),
            0
        );


    statNotes.textContent =
        notes.length;

    statSubjects.textContent =
        subjects.size;

    statFavorites.textContent =
        favorites;

    statDownloads.textContent =
        downloads;
}


/* =====================================================
   OBTENER APUNTES FILTRADOS
===================================================== */

function getFilteredNotes() {

    const search =
        normalizeText(
            filterSearch.value ||
            searchInput.value
        );


    const selectedSubject =
        subjectFilter.value;


    const selectedType =
        typeFilter.value;


    const selectedSort =
        sortFilter.value;


    let filtered = [...notes];


    /* BUSCADOR */

    if (search) {

        filtered =
            filtered.filter(note => {

                const content = [

                    note.title,

                    note.subject,

                    note.type,

                    note.description,

                    note.author,

                    note.content,

                    ...(note.tags || [])

                ]
                    .map(normalizeText)
                    .join(" ");


                return content.includes(search);

            });

    }


    /* MATERIA */

    if (
        selectedSubject !== "all"
    ) {

        filtered =
            filtered.filter(
                note =>
                    note.subject ===
                    selectedSubject
            );

    }


    /* TIPO */

    if (
        selectedType !== "all"
    ) {

        filtered =
            filtered.filter(
                note =>
                    note.type ===
                    selectedType
            );

    }


    /* FAVORITOS */

    if (
        currentView === "favorites"
    ) {

        filtered =
            filtered.filter(
                note =>
                    note.favorite
            );

    }


    /* MIS APUNTES */

    if (
        currentView === "mine"
    ) {

        filtered =
            filtered.filter(
                note =>
                    note.own
            );

    }


    /* ORDEN */

    if (
        selectedSort === "newest"
    ) {

        filtered.sort(
            (a, b) =>
                new Date(b.date) -
                new Date(a.date)
        );

    }


    if (
        selectedSort === "oldest"
    ) {

        filtered.sort(
            (a, b) =>
                new Date(a.date) -
                new Date(b.date)
        );

    }


    if (
        selectedSort === "popular"
    ) {

        filtered.sort(
            (a, b) =>
                Number(
                    b.downloads || 0
                ) -
                Number(
                    a.downloads || 0
                )
        );

    }


    if (
        selectedSort === "az"
    ) {

        filtered.sort(
            (a, b) =>
                a.title.localeCompare(
                    b.title,
                    "es"
                )
        );

    }


    return filtered;
}


/* =====================================================
   RENDERIZAR APUNTES
===================================================== */

function renderNotes() {

    const filteredNotes =
        getFilteredNotes();


    notesGrid.innerHTML = "";


    resultsCount.textContent =
        `${filteredNotes.length} ${
            filteredNotes.length === 1
                ? "resultado"
                : "resultados"
        }`;


    if (
        filteredNotes.length === 0
    ) {

        emptyState.classList.remove(
            "hidden"
        );

        return;
    }


    emptyState.classList.add(
        "hidden"
    );


    filteredNotes.forEach(note => {

        const card =
            document.createElement("article");


        card.className =
            "note-card";


        const safeTags =
            (note.tags || [])
                .slice(0, 4)
                .map(
                    tag => `
                        <span class="note-tag">
                            ${escapeHTML(tag)}
                        </span>
                    `
                )
                .join("");


        const deleteButton =
            note.own
                ? `
                    <button
                        class="card-action delete"
                        data-action="delete"
                        data-id="${escapeHTML(note.id)}"
                        type="button"
                    >
                        Eliminar
                    </button>
                `
                : "";


        card.innerHTML = `

            <div class="note-top">

                <span class="note-type">
                    ${escapeHTML(note.type)}
                </span>


                <button
                    class="note-favorite ${
                        note.favorite
                            ? "active"
                            : ""
                    }"
                    data-action="favorite"
                    data-id="${escapeHTML(note.id)}"
                    type="button"
                    aria-label="${
                        note.favorite
                            ? "Quitar de favoritos"
                            : "Agregar a favoritos"
                    }"
                >
                    ${
                        note.favorite
                            ? "♥"
                            : "♡"
                    }
                </button>

            </div>


            <span class="note-subject">
                ${escapeHTML(note.subject)}
            </span>


            <h3 class="note-title">
                ${escapeHTML(note.title)}
            </h3>


            <p class="note-description">
                ${escapeHTML(note.description)}
            </p>


            <div class="note-tags">
                ${safeTags}
            </div>


            <div class="note-footer">

                <div class="note-author">

                    <div class="author-avatar">
                        ${escapeHTML(
                            getInitials(
                                note.author
                            )
                        )}
                    </div>


                    <div class="note-author-text">

                        <strong>
                            ${escapeHTML(
                                note.author
                            )}
                        </strong>

                        <small>
                            ${formatDate(
                                note.date
                            )}
                        </small>

                    </div>

                </div>


                <div class="note-stats">

                    <span>
                        👁
                        ${Number(
                            note.downloads || 0
                        )}
                    </span>

                </div>

            </div>


            <div class="note-actions">

                <button
                    class="card-action"
                    data-action="view"
                    data-id="${escapeHTML(note.id)}"
                    type="button"
                >
                    Ver apunte →
                </button>

                ${deleteButton}

            </div>

        `;


        notesGrid.appendChild(card);

    });
}


/* =====================================================
   TÍTULOS DE VISTAS
===================================================== */

function updateViewLabels() {

    if (
        currentView === "favorites"
    ) {

        viewTitle.textContent =
            "Mis favoritos";

        viewDescription.textContent =
            "Aquí aparecen los apuntes que guardaste.";

        return;
    }


    if (
        currentView === "mine"
    ) {

        viewTitle.textContent =
            "Mis apuntes";

        viewDescription.textContent =
            "Administra los apuntes que compartiste.";

        return;
    }


    viewTitle.textContent =
        "Todos los apuntes";

    viewDescription.textContent =
        "Encuentra material para tus clases.";
}


/* =====================================================
   MODALES
===================================================== */

function openModal(modal) {

    modal.classList.remove(
        "hidden"
    );

    document.body.style.overflow =
        "hidden";
}


function closeModal(modal) {

    modal.classList.add(
        "hidden"
    );

    document.body.style.overflow =
        "";
}


function closeAllModals() {

    closeModal(formModal);

    closeModal(detailModal);
}


/* =====================================================
   VER APUNTE
===================================================== */

function openDetails(noteId) {

    const note =
        notes.find(
            item =>
                item.id === noteId
        );


    if (!note) {
        return;
    }


    note.downloads =
        Number(note.downloads || 0) + 1;


    saveNotes();

    updateStats();


    detailHeader.innerHTML = `

        <div>

            <div class="detail-meta">

                <span class="detail-badge">
                    ${escapeHTML(
                        note.type
                    )}
                </span>

                <span class="detail-badge">
                    ${escapeHTML(
                        note.subject
                    )}
                </span>

            </div>


            <h2 id="detailTitle">
                ${escapeHTML(
                    note.title
                )}
            </h2>

        </div>
    `;


    const safeLink =
        note.link &&
        /^https?:\/\//i.test(
            note.link
        )
            ? `
                <a
                    class="detail-link"
                    href="${escapeHTML(note.link)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Abrir enlace ↗
                </a>
            `
            : "";


    detailContent.innerHTML = `

        <p class="detail-description">
            ${escapeHTML(
                note.description
            )}
        </p>


        ${
            note.content
                ? `
                    <div class="detail-content-box">
                        ${escapeHTML(
                            note.content
                        )}
                    </div>
                `
                : `
                    <div class="detail-content-box">
                        Este apunte no tiene
                        contenido escrito.
                    </div>
                `
        }


        <div class="detail-info">

            <span>
                👤
                ${escapeHTML(
                    note.author
                )}
            </span>

            <span>
                📅
                ${formatDate(
                    note.date
                )}
            </span>

            <span>
                👁
                ${Number(
                    note.downloads || 0
                )}
                consultas
            </span>

        </div>


        ${safeLink}

    `;


    openModal(detailModal);
}


/* =====================================================
   AGREGAR APUNTE
===================================================== */

function addNote(event) {

    event.preventDefault();


    const formData =
        new FormData(noteForm);


    const title =
        String(
            formData.get("title") || ""
        ).trim();


    const subject =
        String(
            formData.get("subject") || ""
        ).trim();


    const type =
        String(
            formData.get("type") || ""
        ).trim();


    const author =
        String(
            formData.get("author") || ""
        ).trim();


    const description =
        String(
            formData.get("description") || ""
        ).trim();


    const content =
        String(
            formData.get("content") || ""
        ).trim();


    const link =
        String(
            formData.get("link") || ""
        ).trim();


    const tagsText =
        String(
            formData.get("tags") || ""
        ).trim();


    const tags =
        tagsText
            ? tagsText
                .split(",")
                .map(
                    tag =>
                        tag.trim()
                )
                .filter(Boolean)
                .slice(0, 8)
            : [];


    const newNote = {

        id: generateId(),

        title,

        subject,

        type,

        description,

        author,

        date:
            new Date()
                .toISOString()
                .split("T")[0],

        tags,

        content,

        link,

        favorite: false,

        downloads: 0,

        own: true

    };


    notes.unshift(newNote);


    saveNotes();

    populateSubjects();

    updateStats();

    renderNotes();


    noteForm.reset();


    closeModal(formModal);


    navigateToRoute("/explorar");


    showToast(
        "✓",
        "¡Tu apunte fue agregado correctamente!"
    );


}


/* =====================================================
   FAVORITOS
===================================================== */

function toggleFavorite(noteId) {

    const note =
        notes.find(
            item =>
                item.id === noteId
        );


    if (!note) {
        return;
    }


    note.favorite =
        !note.favorite;


    saveNotes();

    updateStats();

    renderNotes();


    showToast(
        note.favorite
            ? "♥"
            : "♡",

        note.favorite
            ? "Agregado a favoritos"
            : "Eliminado de favoritos"
    );
}


/* =====================================================
   ELIMINAR
===================================================== */

function deleteNote(noteId) {

    const note =
        notes.find(
            item =>
                item.id === noteId
        );


    if (
        !note ||
        !note.own
    ) {
        return;
    }


    const confirmed =
        window.confirm(
            "¿Seguro que quieres eliminar este apunte?"
        );


    if (!confirmed) {
        return;
    }


    notes =
        notes.filter(
            item =>
                item.id !== noteId
        );


    saveNotes();

    populateSubjects();

    updateStats();

    renderNotes();


    showToast(
        "✓",
        "Apunte eliminado correctamente."
    );
}


/* =====================================================
   TOAST
===================================================== */

function showToast(
    icon,
    message
) {

    toastIcon.textContent =
        icon;

    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );
}


/* =====================================================
   REINICIAR FILTROS
===================================================== */

function resetFilters() {

    searchInput.value =
        "";

    filterSearch.value =
        "";

    subjectFilter.value =
        "all";

    typeFilter.value =
        "all";

    sortFilter.value =
        "newest";

    navigateToRoute("/explorar");
}


/* =====================================================
   BUSCAR
===================================================== */

function applySearch() {

    const value =
        searchInput.value.trim();


    filterSearch.value =
        value;


    navigateToRoute("/explorar");
}


/* =====================================================
   TEMA
===================================================== */

function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "pasameLosApuntesTheme"
        );


    if (
        savedTheme === "dark"
    ) {

        document.body.classList.add(
            "dark"
        );

        themeToggle.textContent =
            "☀";

    } else {

        document.body.classList.remove(
            "dark"
        );

        themeToggle.textContent =
            "☾";
    }
}


function toggleTheme() {

    document.body.classList.toggle(
        "dark"
    );


    const isDark =
        document.body.classList.contains(
            "dark"
        );


    localStorage.setItem(
        "pasameLosApuntesTheme",
        isDark
            ? "dark"
            : "light"
    );


    themeToggle.textContent =
        isDark
            ? "☀"
            : "☾";
}


/* =====================================================
   NAV ACTIVO
===================================================== */

function setActiveNav(target) {

    document
        .querySelectorAll(
            ".nav-link"
        )
        .forEach(link => {

            link.classList.remove(
                "active"
            );

            link.removeAttribute("aria-current");

        });


    if (target) {

        target.classList.add(
            "active"
        );

        target.setAttribute(
            "aria-current",
            "page"
        );

    }
}


function navigateToRoute(route) {

    const nextHash = `#${route}`;


    if (window.location.hash === nextHash) {

        renderRoute();

    } else {

        window.location.hash = route;

    }
}


function renderRoute() {

    const route =
        window.location.hash.slice(1) ||
        "/inicio";

    const view =
        routeViews[route];

    const isNotFound =
        view === undefined;


    notFoundView.classList.toggle(
        "hidden",
        !isNotFound
    );

    document.body.classList.toggle(
        "route-not-found",
        isNotFound
    );


    if (isNotFound) {

        setActiveNav(null);

        document.title =
            "Página no encontrada | Pásame los apuntes";

        window.scrollTo(0, 0);

        return;
    }


    currentView = view;

    updateViewLabels();

    renderNotes();

    setActiveNav(
        document.querySelector(
            `.nav-link[href="#${route}"]`
        )
    );

    mainNav.classList.remove("open");

    document.title =
        `${viewTitle.textContent} | Pásame los apuntes`;


    if (route === "/inicio") {

        window.scrollTo(0, 0);

    } else {

        document
            .getElementById("explorar")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
}


window.addEventListener(
    "hashchange",
    renderRoute
);


/* =====================================================
   EVENTOS
===================================================== */


/* Abrir modal */

openAddModal.addEventListener(
    "click",
    () => {

        openModal(
            formModal
        );

    }
);


/* Formulario */

noteForm.addEventListener(
    "submit",
    addNote
);


/* Cerrar */

document
    .querySelectorAll(
        "[data-close-modal]"
    )
    .forEach(element => {

        element.addEventListener(
            "click",
            closeAllModals
        );

    });


/* ESC */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeAllModals();

        }

    }
);


/* =====================================================
   BUSCADOR
===================================================== */

searchButton.addEventListener(
    "click",
    applySearch
);


searchInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            applySearch();

        }

    }
);


filterSearch.addEventListener(
    "input",
    () => {

        searchInput.value =
            filterSearch.value;


        if (window.location.hash !== "#/explorar") {

            navigateToRoute("/explorar");

        } else {

            renderNotes();

        }

    }
);


/* =====================================================
   FILTROS
===================================================== */

subjectFilter.addEventListener(
    "change",
    renderNotes
);


typeFilter.addEventListener(
    "change",
    renderNotes
);


sortFilter.addEventListener(
    "change",
    renderNotes
);


/* =====================================================
   LIMPIAR
===================================================== */

clearFilters.addEventListener(
    "click",
    resetFilters
);


resetView.addEventListener(
    "click",
    resetFilters
);


emptyReset.addEventListener(
    "click",
    resetFilters
);


/* =====================================================
   BÚSQUEDAS RÁPIDAS
===================================================== */

document
    .querySelectorAll(
        ".quick-tag"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const search =
                    button.dataset.search ||
                    "";


                searchInput.value =
                    search;


                filterSearch.value =
                    search;


                navigateToRoute("/explorar");

            }
        );

    });


/* =====================================================
   ACCIONES DE TARJETAS
===================================================== */

notesGrid.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-action]"
            );


        if (!button) {
            return;
        }


        const action =
            button.dataset.action;


        const noteId =
            button.dataset.id;


        if (
            action === "favorite"
        ) {

            toggleFavorite(
                noteId
            );

        }


        if (
            action === "view"
        ) {

            openDetails(
                noteId
            );

        }


        if (
            action === "delete"
        ) {

            deleteNote(
                noteId
            );

        }

    }
);


document
    .querySelectorAll(
        ".nav-link"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "open"
                );


            }
        );

    });


/* =====================================================
   TEMA
===================================================== */

themeToggle.addEventListener(
    "click",
    toggleTheme
);


/* =====================================================
   MENÚ MÓVIL
===================================================== */

menuButton.addEventListener(
    "click",
    () => {

        mainNav.classList.toggle(
            "open"
        );

    }
);


/* =====================================================
   INICIALIZAR
===================================================== */

function init() {

    loadNotes();

    loadTheme();

    populateSubjects();

    updateStats();

    if (!window.location.hash) {

        window.history.replaceState(
            null,
            "",
            "#/inicio"
        );

    }

    renderRoute();
}


init();