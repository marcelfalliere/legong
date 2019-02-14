
export default function (): string {
    
    let found = 'en';
    
    if (typeof window.navigator !== 'undefined') {
        if (window.navigator.languages && window.navigator.languages.length > 0) {
            found = window.navigator.languages[0];
        } else if (window.navigator.userLanguage) {
            found = window.navigator.userLanguage;
        } else if (window.navigator.language) {
            found = window.navigator.language;
        }
    }

    return found;
}
