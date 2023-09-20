import React, { useEffect } from 'react';

const calendlyWidgetScript = 'calendlyWidgetScript';
const calendarDivId = 'calendarForm';

interface CalendlyProps {
    minWidth: string;
    height: string;
    url: string;
}

export const Calendly: React.FC<CalendlyProps> = ({ minWidth, height, url }) => {
    useEffect(() => {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('id', calendlyWidgetScript);
        script.setAttribute(
            'src',
            'https://assets.calendly.com/assets/external/widget.js'
        );
        head?.appendChild(script);

        return () => {
            const existingScript = document.getElementById(calendlyWidgetScript);
            const existingCalendar = document.getElementById(calendarDivId);

            if (existingScript && head && existingCalendar) {
                existingScript.remove();
                existingCalendar.remove();
            }
        };
    }, []);

    return (
        <div id={calendarDivId}>
            <div
                className="calendly-inline-widget"
                data-url={url}
                style={{ width: "500px", height: "500px" }}
            />
        </div>
    );
};
