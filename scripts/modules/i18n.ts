
export class i18n {

    static AVAILABLE_LANGUAGES = [
        {
            label: 'Français',
            prefix: 'fr'
        }
    ]

    static DEFAULT_LANGUAGE = 'en';
    
    public static bootstrap() :void {
        
        //const lang = i18n.detectLanguage();
        const lang = 'fr';

        console.log(`[i18n] detected ${lang}`);

        if (lang !== i18n.DEFAULT_LANGUAGE) {
            i18n.loadUiForLanguage(lang);
        }

    }

    private static loadUiForLanguage(lang: string) {
        console.log(`[i18n] loadUiForLanguage for ${lang}`);
    }

    private static detectLanguage(): string {
    
        let found = i18n.DEFAULT_LANGUAGE;
        
        if (typeof window.navigator !== 'undefined') {
            if (window.navigator.languages && window.navigator.languages.length > 0) {
                found = window.navigator.languages[0];
            } else if (window.navigator.userLanguage) {
                found = window.navigator.userLanguage;
            } else if (window.navigator.language) {
                found = window.navigator.language;
            }
        }

        if (found.indexOf('-')) {
            found = found.substring(0, found.indexOf('-'));
        }
    
        return found;
    }

}
