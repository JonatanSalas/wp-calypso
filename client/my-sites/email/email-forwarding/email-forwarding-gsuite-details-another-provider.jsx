/** @format */

/**
 * External dependencies
 */
import { localize } from 'i18n-calypso';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Internal dependencies
 */
import Card from 'components/card/compact';

const EmailForwardingGSuiteDetailsAnotherProvider = ( { translate } ) => {
	return (
		<Card>
			<p className="email-forwarding__explanation">
				{ translate( 'You are using G Suite with another provider for this this domain.' ) }
			</p>
		</Card>
	);
};

EmailForwardingGSuiteDetailsAnotherProvider.propTypes = {
	translate: PropTypes.func.isRequired,
};

export default localize( EmailForwardingGSuiteDetailsAnotherProvider );
