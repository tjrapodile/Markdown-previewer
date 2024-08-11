
import PropTypes from 'prop-types';
import { marked } from 'marked';

export default function Preview({ markdown }) {
    const html = marked(markdown, { breaks: true });

    return (
        <div
            id= "preview"
            dangerouslySetInnerHTML={{
                __html: html,
            }}
        ></div>
    );
}

// Add prop types validation
Preview.propTypes = {
    markdown: PropTypes.string.isRequired,
    renderer: PropTypes.object,
    id: PropTypes.string.isRequired,
};

// Default props if needed (optional)
Preview.defaultProps = {
    renderer: null,
};
