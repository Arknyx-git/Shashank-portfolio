/* =========================================
   JAVASCRIPT EFFECTS
========================================= */

.reveal {
    opacity: 0;
    transform: translateY(35px);
    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

.nav-links a.active-link {
    color: var(--cherry-light);
}

/* Hamburger animation */

.menu-toggle.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

/* Accessibility: reduce animation when requested */

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    .reveal {
        opacity: 1;
        transform: none;
        transition: none;
    }
}
