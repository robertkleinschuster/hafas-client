// todo: use import assertions once they're supported by Node.js & ESLint
// https://github.com/tc39/proposal-import-assertions
import {createRequire} from 'module'
const require = createRequire(import.meta.url)

import tap from 'tap'

import {createClient} from '../index.js'
import {profile as rawProfile} from '../p/stv/index.js'
const res = require('./fixtures/stv-departures.json')
import {stvDepartures as expected} from './fixtures/stv-departures.js'

const client = createClient(rawProfile, 'public-transport/hafas-client:test')
const {profile} = client

const opt = {
	direction: null,
	duration: 10,
	linesOfStops: true,
	remarks: true,
	stopovers: true,
	includeRelatedStations: true,
	when: '2023-12-28T10:30:00+01:00',
	products: {}
}

tap.test('parses a departure correctly (STV)', (t) => {
	const common = profile.parseCommon({profile, opt, res})
	const ctx = {profile, opt, common, res}
	const departures = res.jnyL.map(d => profile.parseDeparture(ctx, d))

	t.same(departures, expected)
	t.end()
})
