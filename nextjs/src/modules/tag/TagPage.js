import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import { EpisodeGrid } from 'modules/shared/components/EpisodeGrid';
import { Newsletter } from 'modules/shared/components/Newsletter';
import { VerticalDivider } from 'modules/shared/components/VerticalDivider';

// styles
import { MixinSectionHeading, MixinPageTitle } from 'styles/Typography';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const TagPage = ({ episodes }) => (
  <StyledTagPage>
    <h3>Tagged</h3>
    <h1>Career Development</h1>
    <EpisodeGrid episodes={episodes} />
    <VerticalDivider />
    <Newsletter />
  </StyledTagPage>
);

TagPage.propTypes = {
  episodes: PropTypes.array.isRequired,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledTagPage = styled.section`
  h3 {
    ${MixinSectionHeading};
    border: none;
    padding: 0;
    text-align: center;
    width: 100%;
  }

  h1 {
    ${MixinPageTitle};
  }
`;

export { TagPage };
