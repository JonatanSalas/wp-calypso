/** @format */
/**
 * External dependencies
 */
import React from 'react';
import renderer from 'react-test-renderer';

/**
 * Internal dependencies
 */
import { createReduxStore } from 'state';
import GSuitePurchaseCta from '../';

jest.mock( 'state/current-user/selectors', () => ( {
	getCurrentUserCurrencyCode: () => {
		return 'USD';
	},
} ) );

jest.mock( 'components/email-verification/email-verification-gate', () => 'EmailVerificationGate' );

describe( 'GSuitePurchaseCta', () => {
	test( 'it renders GSuitePurchaseCta with basic plan', () => {
		const store = createReduxStore();
		const tree = renderer
			.create(
				<GSuitePurchaseCta
					annualPrice={ '$50' }
					monthlyPrice={ '$5' }
					productSlug={ 'gapps' }
					selectedSite={ { ID: 'foo' } }
					store={ store }
				/>
			)
			.toJSON();
		expect( tree ).toMatchSnapshot();
	} );

	test( 'it renders GSuitePurchaseCta with business plan', () => {
		const store = createReduxStore();
		const tree = renderer
			.create(
				<GSuitePurchaseCta
					annualPrice={ '$50' }
					monthlyPrice={ '$5' }
					productSlug={ 'gappsbusiness' }
					selectedSite={ { ID: 'foo' } }
					store={ store }
				/>
			)
			.toJSON();
		expect( tree ).toMatchSnapshot();
	} );
} );
