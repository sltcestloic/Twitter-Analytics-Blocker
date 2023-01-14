var observer = new MutationObserver(function() {
    document.querySelectorAll("[d]").forEach(match => {
        if (match.getAttribute("d") == "M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z") {
            const elem = match.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            if (elem.children[0].getAttribute("href") && elem.children[0].getAttribute("href").includes("analytics"))
                elem.parentNode.removeChild(elem);
        }
    });
    if (document.URL.endsWith("/home")) {
        document.querySelectorAll("nav").forEach(match => {
            if (match.getAttribute("aria-live") == "polite" && match.getAttribute("role") == "navigation")
                match.parentNode.removeChild(match);
        });
    }
});

observer.observe(document, { attributes: false, childList: true, characterData: false, subtree:true });
