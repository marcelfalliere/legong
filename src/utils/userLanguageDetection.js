let found;

if (typeof navigator !== 'undefined') {
    if (navigator.languages && navigator.languages.length > 0) {
        found = navigator.languages[0];
    } else if (navigator.userLanguage) {
        found.push(navigator.userLanguage);
    } else if (navigator.language) {
        found.push(navigator.language);
    }
}