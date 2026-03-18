(function () {
    function getPage() {
        return document.body.getAttribute("data-page") || "home";
    }

    function navItemsForPage(page) {
        const isHome = page === "home";
        const section = function (id) {
            return isHome ? "#" + id : "index.html#" + id;
        };

        return [
            { key: "home", href: isHome ? "#top" : "index.html#top", icon: "icon-home", zh: "\u9996\u9875", en: "Home", active: page === "home", level: 0, group: "home" },
            { key: "about", href: section("about"), icon: "icon-info", zh: "\u5173\u4e8e", en: "About", level: 1, group: "home" },
            { key: "skills", href: section("abilitys"), icon: "icon-wrench", zh: "\u6280\u80fd", en: "Skills", level: 1, group: "home" },
            { key: "projects", href: section("projects"), icon: "icon-folder", zh: "\u9879\u76ee", en: "Projects", level: 1, group: "home" },
            { key: "contact", href: section("contact"), icon: "icon-mail", zh: "\u8054\u7cfb", en: "Contact", level: 1, group: "home" },
            { key: "creative", href: page === "creative-works" ? "#" : "creative-works.html", icon: "icon-book", zh: "创意作品", en: "Creative works", active: page === "creative-works", level: 0, group: "secondary", separatorBefore: true }
            ,{ key: "cyber-musem", href: page === "cyber-musem" ? "#" : "cyber-musem.html", icon: "icon-gallery", zh: "\u7535\u5b50\u535a\u7269\u9986", en: "Cyber Musem", active: page === "cyber-musem", level: 0, group: "secondary" }
        ];
    }

    function renderNavList(page) {
        return navItemsForPage(page).map(function (item) {
            const liClasses = [
                "nav-item",
                item.level > 0 ? "is-child" : "",
                item.separatorBefore ? "with-separator" : ""
            ].filter(Boolean).join(" ");
            const linkClasses = [
                item.active ? "nav-active" : "",
                item.placeholder ? "is-placeholder" : ""
            ].filter(Boolean).join(" ");

            return `<li class="${liClasses}">
    <a href="${item.href}" class="${linkClasses}">
        <svg viewBox="0 0 24 24"><use href="#${item.icon}"></use></svg>
        <span data-zh="${item.zh}" data-en="${item.en}">${item.zh}</span>
    </a>
</li>`;
        }).join("");
    }

    function renderShell(page) {
        return `
<svg aria-hidden="true" focusable="false" style="position:absolute;width:0;height:0;overflow:hidden;">
    <symbol id="icon-menu" viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>
    <symbol id="icon-sun" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" fill="currentColor" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </symbol>
    <symbol id="icon-moon" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
    </symbol>
    <symbol id="icon-logo" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="currentColor" />
    </symbol>
    <symbol id="icon-close" viewBox="0 0 24 24">
        <path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>
    <symbol id="icon-collapse" viewBox="0 0 24 24">
        <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>
    <symbol id="icon-home" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill="currentColor" />
        <polyline points="9 22 9 12 15 12 15 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>
    <symbol id="icon-info" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" />
        <path d="M12 16v-4M12 8h.01" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </symbol>
    <symbol id="icon-wrench" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" fill="currentColor" />
    </symbol>
    <symbol id="icon-folder" viewBox="0 0 24 24">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" fill="currentColor" />
    </symbol>
    <symbol id="icon-mail" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="currentColor" />
        <polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>
    <symbol id="icon-book" viewBox="0 0 24 24">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" fill="currentColor" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" fill="currentColor" />
    </symbol>
    <symbol id="icon-gallery" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2" />
        <circle cx="9" cy="10" r="1.5" fill="currentColor" />
        <path d="M5 17l5-5 3 3 3-4 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>
    <symbol id="icon-github" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor" />
    </symbol>
    <symbol id="icon-linkedin" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor" />
    </symbol>
</svg>
<div class="top-controls">
    <button class="sidebar-toggle control-btn" id="sidebarToggle" title="\u5c55\u5f00\u83dc\u5355">
        <svg viewBox="0 0 24 24"><use href="#icon-menu"></use></svg>
    </button>
    <div class="floating-controls">
        <button class="control-btn" id="langToggle" title="\u5207\u6362\u8bed\u8a00"><span id="langIcon">\u4e2d</span></button>
        <button class="control-btn" id="themeToggle" title="\u5207\u6362\u4e3b\u9898">
            <svg id="themeIcon" viewBox="0 0 24 24"><use href="#icon-moon"></use></svg>
        </button>
    </div>
</div>
<aside class="sidebar" id="sidebar">
    <div class="sidebar-header">
        <a href="index.html#top" class="nav-logo">
            <svg viewBox="0 0 24 24"><use href="#icon-logo"></use></svg>
            <span data-zh="W. Zheng" data-en="W. Zheng">W. Zheng</span>
        </a>
        <button class="sidebar-close control-btn" id="sidebarClose" title="\u6536\u8d77\u83dc\u5355">
            <svg viewBox="0 0 24 24"><use href="#icon-collapse"></use></svg>
        </button>
    </div>
    <ul class="nav-links">${renderNavList(page)}</ul>
</aside>
<div class="particles">
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
</div>
<div class="sky-effects">
    <span class="twinkle-star s1"></span>
    <span class="twinkle-star s2 big"></span>
    <span class="twinkle-star s3"></span>
    <span class="twinkle-star s4"></span>
    <span class="twinkle-star s5 big"></span>
    <span class="twinkle-star s6"></span>
    <span class="twinkle-star s7"></span>
    <span class="twinkle-star s8"></span>
    <span class="twinkle-star s9"></span>
    <span class="twinkle-star s10"></span>
    <span class="shooting-star star-1"></span>
    <span class="shooting-star star-2"></span>
</div>`;
    }

    function initShell() {
        const page = getPage();
        document.body.insertAdjacentHTML("afterbegin", renderShell(page));

        const sidebar = document.getElementById("sidebar");
        const sidebarToggle = document.getElementById("sidebarToggle");
        const sidebarClose = document.getElementById("sidebarClose");
        const mainContent = document.getElementById("mainContent");
        const themeToggle = document.getElementById("themeToggle");
        const themeIcon = document.getElementById("themeIcon");
        const langToggle = document.getElementById("langToggle");
        const langIcon = document.getElementById("langIcon");

        let sidebarCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
        let currentTheme = localStorage.getItem("theme") === "dark" ? "dark" : "light";
        let currentLang = localStorage.getItem("lang") || "en";

        function updateSidebarState() {
            sidebar.classList.toggle("collapsed", sidebarCollapsed);
            if (mainContent) {
                mainContent.classList.toggle("expanded", sidebarCollapsed);
            }
            sidebarToggle.classList.toggle("hidden", !sidebarCollapsed);
            localStorage.setItem("sidebarCollapsed", String(sidebarCollapsed));
        }

        function applyTheme(theme) {
            if (theme === "dark") {
                document.documentElement.setAttribute("data-theme", "dark");
                themeIcon.innerHTML = '<use href="#icon-sun"></use>';
                themeToggle.title = "\u5207\u6362\u5230\u6d45\u8272";
            } else {
                document.documentElement.removeAttribute("data-theme");
                themeIcon.innerHTML = '<use href="#icon-moon"></use>';
                themeToggle.title = "\u5207\u6362\u5230\u6df1\u8272";
            }
            document.documentElement.setAttribute("data-active-theme", theme);
            localStorage.setItem("theme", theme);
        }

        function applyLanguage(lang) {
            document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
            langIcon.textContent = lang === "zh" ? "En" : "中";
            document.querySelectorAll("[data-zh][data-en]").forEach(function (el) {
                const text = lang === "zh" ? el.getAttribute("data-zh") : el.getAttribute("data-en");
                if (text !== null) {
                    el.textContent = text;
                }
            });
            localStorage.setItem("lang", lang);
        }

        sidebarToggle.addEventListener("click", function () {
            sidebarCollapsed = false;
            updateSidebarState();
        });

        sidebarClose.addEventListener("click", function () {
            sidebarCollapsed = true;
            updateSidebarState();
        });

        document.querySelectorAll(".nav-links a").forEach(function (link) {
            link.addEventListener("click", function () {
                if (window.innerWidth <= 768) {
                    sidebarCollapsed = true;
                    updateSidebarState();
                }
            });
        });

        themeToggle.addEventListener("click", function () {
            currentTheme = currentTheme === "light" ? "dark" : "light";
            applyTheme(currentTheme);
        });

        langToggle.addEventListener("click", function () {
            currentLang = currentLang === "zh" ? "en" : "zh";
            applyLanguage(currentLang);
        });

        updateSidebarState();
        applyTheme(currentTheme);
        applyLanguage(currentLang);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initShell);
    } else {
        initShell();
    }
})();
