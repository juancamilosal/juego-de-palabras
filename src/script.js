const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="info"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
