
export class lazyload {

    public static bootstrap() :void {

        const $imgEls = document.querySelectorAll('img[data-src]');
        const $bgEls = document.querySelectorAll('[data-lazyload-bg]');
        
        lazyload.checkImgTags($imgEls);
        lazyload.checkDivBg($bgEls);

        window.addEventListener('scroll', (event) => {
            lazyload.checkImgTags($imgEls);
            lazyload.checkDivBg($bgEls);
        });

    }

    private static checkImgTags($els) {
        [].forEach.call($els, ($el: HTMLElement) => {
            if ($el.getAttribute('src').indexOf('base64') > 0) {
                if (lazyload.isVisible($el)) {
                    const src = $el.getAttribute('data-src');
                    console.log(`[lazyload] loading image ${src}`);
                    $el.setAttribute('src', src);
                }
            }
        });
    }

    private static checkDivBg($bgEls) {
        [].forEach.call($bgEls, ($el: HTMLElement) => {
            if ($el.getAttribute('data-lazyload-bg') !== 'loaded') {
                if (lazyload.isVisible($el)) {
                    console.log(`[lazyload] loading image bg`, $el);
                    $el.setAttribute('data-lazyload-bg', 'loaded');
                }
            }
            
        });
    }

    private static isVisible($el: HTMLElement): boolean {
        var bounding = $el.getBoundingClientRect();

        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        var vertInView = (bounding.top <= windowHeight) && ((bounding.top + bounding.height) >= 0);
        var horInView = (bounding.left <= windowWidth) && ((bounding.left + bounding.width) >= 0);
        return (vertInView && horInView);

    }
}
