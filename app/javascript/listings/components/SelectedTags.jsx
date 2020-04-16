import { h } from 'preact';
import { selectedTagsPropTypes } from '../../src/components/common-prop-types';

const SelectedTags = ({ tags, onClick, onKeyPress }) => {
  return (
    <section>
      {tags.map((tag) => (
        <span
          className="classified-tag"
          key={tag.id}
          id={`selected-tag-${tag.id}`}
        >
          <a
            href="/listings?tags="
            className="tag-name"
            onClick={onClick}
            data-no-instant
          >
            <span>{tag}</span>
            <span
              className="tag-close"
              onClick={onClick}
              data-no-instant
              role="button"
              onKeyPress={onKeyPress}
              tabIndex="0"
            >
              ×
            </span>
          </a>
        </span>
      ))}
    </section>
  );
};

SelectedTags.propTypes = selectedTagsPropTypes;

export default SelectedTags;