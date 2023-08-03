import React from "react";

type FadeInSectionTypes = {
    delay?: string;
    children: React.ReactElement;
};

export default function FadeInSection({delay = "0ms", children}: FadeInSectionTypes) {
    const [isVisible, setVisible] = React.useState(false);

    const domRef:any = React.useRef();

    React.useEffect(() => {
        const currentRef = domRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(currentRef);
        return () => {observer.unobserve(currentRef)};
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${ delay }` }}
            ref={ domRef }
        >
            { children }
        </div>
    );
}
