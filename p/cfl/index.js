import baseProfile from "./base.json" assert {type: "json"}
import {products} from './products.js'

const profile = {
	...baseProfile,
	locale: 'de-LU',
	timezone: 'Europe/Luxembourg',
	defaultLanguage: 'de',

	products: products,

	refreshJourneyUseOutReconL: true,
	trip: true,
	radar: true,
	reachableFrom: true,
	remarksGetPolyline: false,
}

export {
	profile,
}
