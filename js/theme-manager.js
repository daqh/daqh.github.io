(() => {
    
    class ThemeManager {

        static ThemeModes = Object.freeze({
            LIGHT: "light",
            DARK: "dark",
            AUTO: "auto",
        });

        constructor() {
            this.theme = localStorage.getItem("theme") || ThemeManager.ThemeModes.LIGHT;
            localStorage.setItem("theme", this.theme);
            this.setTheme(this.theme);
        }
      
        setTheme(themeMode) {
            this.theme = themeMode;
            document.documentElement.setAttribute("data-bs-theme", themeMode);
            document.documentElement.setAttribute("data-mdb-theme", themeMode);
        }
    
    }
    
    const themeManager = new ThemeManager();

    $(() => {
        $('#theme-select').val(themeManager.theme);

        $('#theme-select').change(() => {
            themeManager.setTheme($('#theme-select').val());
            localStorage.setItem("theme", themeManager.theme);
        });
    });

})();