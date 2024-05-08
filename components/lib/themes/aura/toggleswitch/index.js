export default {
    handle: {
        borderRadius: '50%',
        size: '1rem'
    },
    root: {
        width: '2.5rem',
        height: '1.5rem',
        borderRadius: '30px',
        gap: '0.25rem',
        shadow: '{form.field.shadow}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    colorScheme: {
        light: {
            root: {
                background: '{surface.300}',
                invalidBackground: '{red.400}',
                hoverBackground: '{surface.400}',
                checkedBackground: '{primary.500}',
                checkedHoverBackground: '{primary.600}'
            },
            handle: {
                background: '{surface.0}',
                hoverBackground: '{surface.0}',
                checkedBackground: '{surface.0}',
                checkedHoverBackground: '{surface.0}',
                invalidBackground: '{surface.0}'
            }
        },
        dark: {
            root: {
                background: '{surface.700}',
                invalidBackground: '{red.300}',
                hoverBackground: '{surface.600}',
                checkedBackground: '{primary.400}',
                checkedHoverBackground: '{primary.300}'
            },
            handle: {
                background: '{surface.400}',
                hoverBackground: '{surface.300}',
                checkedBackground: '{surface.900}',
                checkedHoverBackground: '{surface.900}',
                invalidBackground: '{surface.900}'
            }
        }
    }
};
