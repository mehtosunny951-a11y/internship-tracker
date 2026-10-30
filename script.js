/* =====================================================
   INTERNTRACK
   INTERNSHIP APPLICATION TRACKER
   ===================================================== */


/* ================= DOM ELEMENTS ================= */

const modalOverlay =
    document.getElementById("modalOverlay");

const applicationForm =
    document.getElementById("applicationForm");

const addApplicationBtn =
    document.getElementById("addApplicationBtn");

const emptyAddBtn =
    document.getElementById("emptyAddBtn");

const closeModal =
    document.getElementById("closeModal");

const cancelBtn =
    document.getElementById("cancelBtn");

const modalTitle =
    document.getElementById("modalTitle");


/* Form */

const applicationId =
    document.getElementById("applicationId");

const companySelect =
    document.getElementById("companySelect");

const companyManual =
    document.getElementById("companyManual");

const roleSelect =
    document.getElementById("roleSelect");

const roleManual =
    document.getElementById("roleManual");

const locationSelect =
    document.getElementById("locationSelect");

const locationManual =
    document.getElementById("locationManual");

const applicationDate =
    document.getElementById("applicationDate");

const deadline =
    document.getElementById("deadline");

const status =
    document.getElementById("status");

const jobLink =
    document.getElementById("jobLink");

const notes =
    document.getElementById("notes");


/* Search */

const searchInput =
    document.getElementById("searchInput");

const statusFilter =
    document.getElementById("statusFilter");


const applicationsContainer =
    document.getElementById(
        "applicationsContainer"
    );


const emptyState =
    document.getElementById("emptyState");


/* Theme */

const themeBtn =
    document.getElementById("themeBtn");


/* =====================================================
   DEMO DATA
   ===================================================== */

const demoApplications = [

    {
        id: 1,

        company: "Google",

        role: "Frontend Developer",

        location: "Bangalore",

        applicationDate: "2026-09-15",

        deadline: "2026-10-10",

        status: "Interview",

        jobLink:
            "https://careers.google.com/",

        notes:
            "Technical interview preparation required."
    },


    {
        id: 2,

        company: "Microsoft",

        role: "Software Developer",

        location: "Hyderabad",

        applicationDate: "2026-09-18",

        deadline: "2026-10-15",

        status: "Shortlisted",

        jobLink:
            "https://careers.microsoft.com/",

        notes:
            "Waiting for interview schedule."
    },


    {
        id: 3,

        company: "Amazon",

        role: "Backend Developer",

        location: "Bangalore",

        applicationDate: "2026-09-10",

        deadline: "2026-10-05",

        status: "Applied",

        jobLink:
            "https://www.amazon.jobs/",

        notes:
            "Prepare DSA and backend fundamentals."
    },


    {
        id: 4,

        company: "Infosys",

        role: "Python Developer",

        location: "Pune",

        applicationDate: "2026-09-05",

        deadline: "2026-10-08",

        status: "Rejected",

        jobLink:
            "https://www.infosys.com/careers/",

        notes:
            "Improve Python and problem-solving skills."
    },


    {
        id: 5,

        company: "Accenture",

        role: "Full Stack Developer",

        location: "Gurgaon",

        applicationDate: "2026-09-20",

        deadline: "2026-10-20",

        status: "Selected",

        jobLink:
            "https://www.accenture.com/careers",

        notes:
            "Offer received."
    },


    {
        id: 6,

        company: "TCS",

        role: "Web Developer",

        location: "Chandigarh",

        applicationDate: "2026-09-22",

        deadline: "2026-10-12",

        status: "Applied",

        jobLink:
            "https://www.tcs.com/careers",

        notes:
            "Application submitted successfully."
    }

];


/* =====================================================
   LOAD DATA
   ===================================================== */

let applications =
    JSON.parse(
        localStorage.getItem(
            "internApplications"
        )
    );


/*
   If there is no saved data,
   load demo applications.
*/

if (!applications) {

    applications =
        demoApplications;

    saveData();

}


/* =====================================================
   INITIALIZE
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadTheme();

        setTodayDate();

        renderApplications();

        updateStatistics();

    }
);


/* =====================================================
   SAVE DATA
   ===================================================== */

function saveData() {

    localStorage.setItem(
        "internApplications",
        JSON.stringify(
            applications
        )
    );

}


/* =====================================================
   MODAL
   ===================================================== */

function openModal() {

    modalOverlay.classList.add(
        "active"
    );

}


function closeApplicationModal() {

    modalOverlay.classList.remove(
        "active"
    );

    resetForm();

}


/* =====================================================
   RESET FORM
   ===================================================== */

function resetForm() {

    applicationForm.reset();

    applicationId.value = "";

    modalTitle.textContent =
        "Add Internship Application";

    hideManualInputs();

    setTodayDate();

}


/* =====================================================
   TODAY DATE
   ===================================================== */

function setTodayDate() {

    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    applicationDate.value =
        today;

}


/* =====================================================
   MANUAL INPUTS
   ===================================================== */


/* Company */

companySelect.addEventListener(
    "change",
    function () {

        if (
            this.value === "Other"
        ) {

            companyManual
                .classList
                .add("show");

            companyManual.required =
                true;

        }

        else {

            companyManual
                .classList
                .remove("show");

            companyManual.required =
                false;

            companyManual.value =
                "";

        }

    }
);


/* Role */

roleSelect.addEventListener(
    "change",
    function () {

        if (
            this.value === "Other"
        ) {

            roleManual
                .classList
                .add("show");

            roleManual.required =
                true;

        }

        else {

            roleManual
                .classList
                .remove("show");

            roleManual.required =
                false;

            roleManual.value =
                "";

        }

    }
);


/* Location */

locationSelect.addEventListener(
    "change",
    function () {

        if (
            this.value === "Other"
        ) {

            locationManual
                .classList
                .add("show");

            locationManual.required =
                true;

        }

        else {

            locationManual
                .classList
                .remove("show");

            locationManual.required =
                false;

            locationManual.value =
                "";

        }

    }
);


/* =====================================================
   HIDE MANUAL INPUTS
   ===================================================== */

function hideManualInputs() {

    companyManual
        .classList
        .remove("show");

    roleManual
        .classList
        .remove("show");

    locationManual
        .classList
        .remove("show");


    companyManual.required =
        false;

    roleManual.required =
        false;

    locationManual.required =
        false;

}


/* =====================================================
   GET VALUES
   ===================================================== */

function getCompany() {

    if (
        companySelect.value ===
        "Other"
    ) {

        return companyManual
            .value
            .trim();

    }

    return companySelect.value;

}


function getRole() {

    if (
        roleSelect.value ===
        "Other"
    ) {

        return roleManual
            .value
            .trim();

    }

    return roleSelect.value;

}


function getLocation() {

    if (
        locationSelect.value ===
        "Other"
    ) {

        return locationManual
            .value
            .trim();

    }

    return locationSelect.value;

}


/* =====================================================
   ADD / UPDATE APPLICATION
   ===================================================== */

applicationForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const application = {

            id:
                applicationId.value
                    ? Number(
                        applicationId.value
                    )
                    : Date.now(),

            company:
                getCompany(),

            role:
                getRole(),

            location:
                getLocation(),

            applicationDate:
                applicationDate.value,

            deadline:
                deadline.value,

            status:
                status.value,

            jobLink:
                jobLink.value.trim(),

            notes:
                notes.value.trim()

        };


        /* UPDATE */

        if (
            applicationId.value
        ) {

            const index =
                applications.findIndex(
                    app =>
                        app.id ===
                        Number(
                            applicationId.value
                        )
                );


            if (index !== -1) {

                applications[index] =
                    application;

            }

        }


        /* ADD */

        else {

            applications.unshift(
                application
            );

        }


        saveData();

        renderApplications();

        updateStatistics();

        closeApplicationModal();

    }
);


/* =====================================================
   RENDER APPLICATIONS
   ===================================================== */

function renderApplications() {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    const selectedStatus =
        statusFilter.value;


    const filtered =
        applications.filter(
            app => {

                const searchableText =

                    (
                        app.company +
                        " " +
                        app.role +
                        " " +
                        app.location
                    )
                    .toLowerCase();


                const matchesSearch =
                    searchableText
                        .includes(
                            searchTerm
                        );


                const matchesStatus =

                    selectedStatus ===
                    "All"

                    ||

                    app.status ===
                    selectedStatus;


                return (
                    matchesSearch &&
                    matchesStatus
                );

            }
        );


    applicationsContainer.innerHTML =
        "";


    if (
        filtered.length === 0
    ) {

        emptyState.style.display =
            "block";

        return;

    }


    emptyState.style.display =
        "none";


    filtered.forEach(
        app => {

            applicationsContainer
                .appendChild(
                    createApplicationCard(
                        app
                    )
                );

        }
    );

}


/* =====================================================
   CREATE APPLICATION CARD
   ===================================================== */

function createApplicationCard(app) {

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "application-card";


    const initials =
        getInitials(
            app.company
        );


    const statusClass =
        "status-" +
        app.status
            .toLowerCase();


    const deadlineInfo =
        getDeadlineInfo(
            app.deadline
        );


    card.innerHTML = `

        <div class="card-top">

            <div class="company-info">

                <div class="company-logo">
                    ${initials}
                </div>

                <div>

                    <h3>
                        ${escapeHTML(
                            app.company
                        )}
                    </h3>

                    <p>
                        ${escapeHTML(
                            app.role
                        )}
                    </p>

                </div>

            </div>


            <span
                class="
                    status-badge
                    ${statusClass}
                "
            >
                ${app.status}
            </span>

        </div>


        <div class="card-details">


            <div class="detail-item">

                Location

                <strong>
                    📍
                    ${escapeHTML(
                        app.location
                    )}
                </strong>

            </div>


            <div class="detail-item">

                Applied On

                <strong>
                    ${formatDate(
                        app.applicationDate
                    )}
                </strong>

            </div>


            <div class="detail-item">

                Deadline

                <strong
                    class="${deadlineInfo.className}"
                >
                    ${deadlineInfo.text}
                </strong>

            </div>


            <div class="detail-item">

                Status

                <strong>
                    ${app.status}
                </strong>

            </div>

        </div>


        ${
            app.notes
                ? `
                    <div class="card-notes">

                        📝
                        ${escapeHTML(
                            app.notes
                        )}

                    </div>
                  `
                : ""
        }


        <div class="card-actions">


            <button
                onclick="editApplication(
                    ${app.id}
                )"
            >
                ✏ Edit
            </button>


            <button
                class="delete-btn"
                onclick="deleteApplication(
                    ${app.id}
                )"
            >
                🗑 Delete
            </button>


            ${
                app.jobLink
                    ? `
                        <button
                            class="job-link"
                            onclick="openJobLink(
                                '${escapeAttribute(
                                    app.jobLink
                                )}'
                            )"
                        >
                            🔗 Job Link
                        </button>
                      `
                    : ""
            }


        </div>

    `;


    return card;

}


/* =====================================================
   EDIT APPLICATION
   ===================================================== */

function editApplication(id) {

    const app =
        applications.find(
            item =>
                item.id === id
        );


    if (!app) return;


    applicationId.value =
        app.id;


    modalTitle.textContent =
        "Edit Internship Application";


    setSelectOrManual(
        companySelect,
        companyManual,
        app.company
    );


    setSelectOrManual(
        roleSelect,
        roleManual,
        app.role
    );


    setSelectOrManual(
        locationSelect,
        locationManual,
        app.location
    );


    applicationDate.value =
        app.applicationDate;


    deadline.value =
        app.deadline;


    status.value =
        app.status;


    jobLink.value =
        app.jobLink || "";


    notes.value =
        app.notes || "";


    openModal();

}


/* =====================================================
   SELECT OR MANUAL
   ===================================================== */

function setSelectOrManual(
    select,
    manual,
    value
) {

    const optionExists =
        [...select.options]
            .some(
                option =>
                    option.value ===
                    value
            );


    if (optionExists) {

        select.value =
            value;


        manual.value =
            "";


        manual.classList
            .remove("show");


        manual.required =
            false;

    }

    else {

        select.value =
            "Other";


        manual.value =
            value;


        manual.classList
            .add("show");


        manual.required =
            true;

    }

}


/* =====================================================
   DELETE APPLICATION
   ===================================================== */

function deleteApplication(id) {

    const confirmed =
        confirm(
            "Are you sure you want to delete this application?"
        );


    if (!confirmed) return;


    applications =
        applications.filter(
            app =>
                app.id !== id
        );


    saveData();

    renderApplications();

    updateStatistics();

}


/* =====================================================
   JOB LINK
   ===================================================== */

function openJobLink(url) {

    if (!url) return;


    let finalURL =
        url;


    if (
        !url.startsWith(
            "http://"
        )
        &&
        !url.startsWith(
            "https://"
        )
    ) {

        finalURL =
            "https://" +
            url;

    }


    window.open(
        finalURL,
        "_blank"
    );

}


/* =====================================================
   STATISTICS
   ===================================================== */

function updateStatistics() {

    const total =
        applications.length;


    const interviews =
        applications.filter(
            app =>
                app.status ===
                "Interview"
                ||
                app.status ===
                "Shortlisted"
        ).length;


    const selected =
        applications.filter(
            app =>
                app.status ===
                "Selected"
        ).length;


    const rejected =
        applications.filter(
            app =>
                app.status ===
                "Rejected"
        ).length;


    const applied =
        applications.filter(
            app =>
                app.status ===
                "Applied"
        ).length;


    const shortlisted =
        applications.filter(
            app =>
                app.status ===
                "Shortlisted"
        ).length;


    const interviewStatus =
        applications.filter(
            app =>
                app.status ===
                "Interview"
        ).length;


    const withdrawn =
        applications.filter(
            app =>
                app.status ===
                "Withdrawn"
        ).length;


    document.getElementById(
        "totalApplications"
    ).textContent =
        total;


    document.getElementById(
        "interviewCount"
    ).textContent =
        interviews;


    document.getElementById(
        "selectedCount"
    ).textContent =
        selected;


    document.getElementById(
        "rejectedCount"
    ).textContent =
        rejected;


    document.getElementById(
        "appliedCount"
    ).textContent =
        applied;


    document.getElementById(
        "shortlistedCount"
    ).textContent =
        shortlisted;


    document.getElementById(
        "statusInterviewCount"
    ).textContent =
        interviewStatus;


    document.getElementById(
        "statusSelectedCount"
    ).textContent =
        selected;


    document.getElementById(
        "statusRejectedCount"
    ).textContent =
        rejected;


    document.getElementById(
        "withdrawnCount"
    ).textContent =
        withdrawn;


    const interviewRate =
        total > 0
            ? Math.round(
                (
                    interviews /
                    total
                ) * 100
            )
            : 0;


    const selectionRate =
        total > 0
            ? Math.round(
                (
                    selected /
                    total
                ) * 100
            )
            : 0;


    document.getElementById(
        "interviewRate"
    ).textContent =
        interviewRate +
        "%";


    document.getElementById(
        "selectionRate"
    ).textContent =
        selectionRate +
        "%";


    document.getElementById(
        "interviewProgress"
    ).style.width =
        interviewRate +
        "%";


    document.getElementById(
        "selectionProgress"
    ).style.width =
        selectionRate +
        "%";

}


/* =====================================================
   DEADLINE
   ===================================================== */

function getDeadlineInfo(
    dateString
) {

    if (!dateString) {

        return {

            text:
                "No deadline",

            className:
                ""

        };

    }


    const today =
        new Date();


    today.setHours(
        0,
        0,
        0,
        0
    );


    const deadlineDate =
        new Date(
            dateString
        );


    deadlineDate.setHours(
        0,
        0,
        0,
        0
    );


    const difference =
        deadlineDate -
        today;


    const days =
        Math.ceil(
            difference /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    if (days < 0) {

        return {

            text:
                "Deadline Passed",

            className:
                "deadline-danger"

        };

    }


    if (days === 0) {

        return {

            text:
                "Due Today",

            className:
                "deadline-danger"

        };

    }


    if (days <= 3) {

        return {

            text:
                `${days} day${
                    days > 1
                        ? "s"
                        : ""
                } left`,

            className:
                "deadline-warning"

        };

    }


    return {

        text:
            `${days} days left`,

        className:
            ""

    };

}


/* =====================================================
   DATE FORMAT
   ===================================================== */

function formatDate(
    dateString
) {

    if (!dateString) {

        return "Not provided";

    }


    const date =
        new Date(
            dateString
        );


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =====================================================
   INITIALS
   ===================================================== */

function getInitials(
    company
) {

    const words =
        company
            .trim()
            .split(" ");


    if (
        words.length === 1
    ) {

        return words[0]
            .substring(
                0,
                2
            )
            .toUpperCase();

    }


    return (
        words[0][0] +
        words[1][0]
    ).toUpperCase();

}


/* =====================================================
   SECURITY
   ===================================================== */

function escapeHTML(
    text
) {

    if (!text) return "";


    return text
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


function escapeAttribute(
    text
) {

    return escapeHTML(
        text
    );

}


/* =====================================================
   SEARCH
   ===================================================== */

searchInput.addEventListener(
    "input",
    renderApplications
);


statusFilter.addEventListener(
    "change",
    renderApplications
);


/* =====================================================
   MODAL EVENTS
   ===================================================== */

addApplicationBtn.addEventListener(
    "click",
    () => {

        resetForm();

        openModal();

    }
);


emptyAddBtn.addEventListener(
    "click",
    () => {

        resetForm();

        openModal();

    }
);


closeModal.addEventListener(
    "click",
    closeApplicationModal
);


cancelBtn.addEventListener(
    "click",
    closeApplicationModal
);


/* Click outside modal */

modalOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            modalOverlay
        ) {

            closeApplicationModal();

        }

    }
);


/* =====================================================
   DARK MODE
   ===================================================== */

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const darkMode =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "darkMode",
            darkMode
        );


        updateThemeButton();

    }
);


/* =====================================================
   LOAD THEME
   ===================================================== */

function loadTheme() {

    const darkMode =
        localStorage.getItem(
            "darkMode"
        );


    if (
        darkMode === "true"
    ) {

        document.body.classList.add(
            "dark"
        );

    }


    updateThemeButton();

}


/* =====================================================
   THEME BUTTON
   ===================================================== */

function updateThemeButton() {

    const darkMode =
        document.body.classList.contains(
            "dark"
        );


    themeBtn.textContent =
        darkMode
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";

}