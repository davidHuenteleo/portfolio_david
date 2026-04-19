import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (hash) {
                // Si hay un hash (ej: #ContactMe), buscamos el elemento y vamos a él
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                // Si no hay hash, vamos al inicio (0,0)
                window.scrollTo(0, 0);
            }
        }, 1000); // Esperamos 1000ms a que pase la animación de la página

        return () => clearTimeout(timeout);
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
