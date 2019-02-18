
export class i18n {

    static AVAILABLE_LANGUAGES = [
        {
            label: 'Français',
            prefix: 'fr'
        }, {
            label: 'English',
            prefix: 'en'
        }
    ]

    static DEFAULT_LANGUAGE = 'en';

    public static bootstrap() :void {
        
        const lang = i18n.detectLanguage();
        
        const langExists = i18n.AVAILABLE_LANGUAGES.find(l => l.prefix === lang);
        
        if (!langExists) {
            i18n.initUiForLanguage(i18n.DEFAULT_LANGUAGE);
        } else {
            i18n.initUiForLanguage(lang);
        }
        
    }
    
    private static initUiForLanguage(lang: string) {
        console.log(`[i18n] initUiForLanguage for ${lang}`);
        
        const $ui = document.querySelector('#i18n-menu');
        
        $ui.classList.remove('hidden');

        const $select = $ui.querySelector('select');

        $select.value = lang;

        if (lang !== i18n.DEFAULT_LANGUAGE) {
            i18n.loadLangStrings(lang);
        }

        $select.addEventListener('change', (event: Event) => {
            const lang = (event.target as HTMLSelectElement).value;

            i18n.loadLangStrings(lang);
        });

    }

    private static loadLangStrings(lang: string) {
        // TODO ; mieux d'avoir une page index.html par langue ? de toute façon il n'y aura qu'une page ... ou alors de faire du JS pour internationnlisé ?
        // https://webmasters.stackexchange.com/questions/119138/root-index-html-file-of-a-multi-language-website
        // et balises meta
        // <meta http-equiv=”content-language” content=”en-us”>
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
