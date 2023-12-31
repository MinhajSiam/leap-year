import test from 'ava';
import leapYear from './index.js';

test('main', t => {
	t.throws(() => {
		leapYear('foo');
	}, {instanceOf: TypeError});

	t.is(typeof leapYear(), 'boolean');
	t.false(leapYear(2014));
	t.true(leapYear(2016));
	t.true(leapYear(new Date(2016, 0)));
});
