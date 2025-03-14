const bvgJourney = {
	type: 'journey',
	legs: [{
		origin: {
			type: 'location',
			id: '900980968',
			latitude: 52.521769,
			longitude: 13.395231,
			name: 'Berlin, Bodemuseum',
			poi: true
		},
		destination: {
			type: 'stop',
			id: '900100007',
			name: 'S Oranienburger Str. (Berlin)',
			location: {
				type: 'location',
				id: '900100007',
				latitude: 52.525158,
				longitude: 13.393064
			},
			products: {
				suburban: true,
				subway: false,
				tram: true,
				bus: false,
				ferry: false,
				express: false,
				regional: false
			}
		},
		arrival: '2019-08-18T14:16:00+02:00',
		plannedArrival: '2019-08-18T14:16:00+02:00',
		arrivalDelay: null,
		departure: '2019-08-18T14:06:00+02:00',
		plannedDeparture: '2019-08-18T14:06:00+02:00',
		departureDelay: null,
		public: true,
		walking: true,
		distance: 568
	}, {
		origin: {
			type: 'stop',
			id: '900100007',
			name: 'S Oranienburger Str. (Berlin)',
			location: {
				type: 'location',
				id: '900100007',
				latitude: 52.525158,
				longitude: 13.393064
			},
			products: {
				suburban: true,
				subway: false,
				tram: true,
				bus: false,
				ferry: false,
				express: false,
				regional: false
			}
		},
		destination: {
			type: 'stop',
			id: '900058101',
			name: 'S Südkreuz Bhf (Berlin)',
			location: {
				type: 'location',
				id: '900058101',
				latitude: 52.475465,
				longitude: 13.365575
			},
			products: {
				suburban: true,
				subway: false,
				tram: false,
				bus: true,
				ferry: false,
				express: true,
				regional: true
			}
		},
		arrival: '2019-08-18T14:29:00+02:00',
		plannedArrival: '2019-08-18T14:29:00+02:00',
		arrivalDelay: 0,
		arrivalPrognosisType: 'prognosed',
		departure: '2019-08-18T14:16:00+02:00',
		plannedDeparture: '2019-08-18T14:16:00+02:00',
		departureDelay: 0,
		departurePrognosisType: 'prognosed',
		reachable: true,
		polyline: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {
						type: 'stop',
						id: '900100007',
						name: 'S Oranienburger Str. (Berlin)',
						location: {
							type: 'location',
							id: '900100007',
							latitude: 52.525158,
							longitude: 13.393064
						},
						products: {
							suburban: true,
							subway: false,
							tram: true,
							bus: false,
							ferry: false,
							express: false,
							regional: false
						}
					},
					geometry: {
						type: 'Point',
						coordinates: [
							13.39306,
							52.52516
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.39176,
							52.52284
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.39023,
							52.52216
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38866,
							52.52195
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38798,
							52.52174
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38744,
							52.52141
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38651,
							52.5206
						]
					}
				},
				{
					type: 'Feature',
					properties: {
						type: 'stop',
						id: '900100001',
						name: 'S+U Friedrichstr. Bhf (Berlin)',
						location: {
							type: 'location',
							id: '900100001',
							latitude: 52.520268,
							longitude: 13.387149
						},
						products: {
							suburban: true,
							subway: true,
							tram: true,
							bus: true,
							ferry: false,
							express: false,
							regional: true
						}
					},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38715,
							52.52027
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38635,
							52.52049
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38537,
							52.51974
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38567,
							52.51785
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.3855,
							52.51745
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38497,
							52.51691
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38444,
							52.51665
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38399,
							52.51657
						]
					}
				},
				{
					type: 'Feature',
					properties: {
						type: 'stop',
						id: '900100025',
						name: 'S+U Brandenburger Tor (Berlin)',
						location: {
							type: 'location',
							id: '900100025',
							latitude: 52.51651,
							longitude: 13.381936
						},
						products: {
							suburban: true,
							subway: true,
							tram: false,
							bus: true,
							ferry: false,
							express: false,
							regional: false
						}
					},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38194,
							52.51651
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38178,
							52.51643
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37888,
							52.51623
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37831,
							52.51609
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37768,
							52.51576
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37714,
							52.51313
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37669,
							52.51024
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.3767,
							52.50949
						]
					}
				},
				{
					type: 'Feature',
					properties: {
						type: 'stop',
						id: '900100020',
						name: 'S+U Potsdamer Platz Bhf (Berlin)',
						location: {
							type: 'location',
							id: '900100020',
							latitude: 52.509337,
							longitude: 13.376452
						},
						products: {
							suburban: true,
							subway: false,
							tram: false,
							bus: false,
							ferry: false,
							express: false,
							regional: true
						}
					},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37645,
							52.50934
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37686,
							52.50873
						]
					}
				},
				{
					type: 'Feature',
					properties: {
						type: 'stop',
						id: '900012101',
						name: 'S Anhalter Bahnhof (Berlin)',
						location: {
							type: 'location',
							id: '900012101',
							latitude: 52.504537,
							longitude: 13.38208
						},
						products: {
							suburban: true,
							subway: false,
							tram: false,
							bus: true,
							ferry: false,
							express: false,
							regional: false
						}
					},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38208,
							52.50454
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.38181,
							52.5046
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37956,
							52.50099
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37902,
							52.50004
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37814,
							52.49942
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37639,
							52.4987
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37493,
							52.49795
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37338,
							52.49679
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37287,
							52.49597
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37242,
							52.49468
						]
					}
				},
				{
					type: 'Feature',
					properties: {
						type: 'stop',
						id: '900058103',
						name: 'S+U Yorckstr. S2 S25 S26 U7 (Berlin)',
						location: {
							type: 'location',
							id: '900058103',
							latitude: 52.49232,
							longitude: 13.372227
						},
						products: {
							suburban: true,
							subway: false,
							tram: false,
							bus: true,
							ferry: false,
							express: false,
							regional: false
						}
					},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37223,
							52.49232
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37207,
							52.49233
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37186,
							52.48857
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.37121,
							52.48667
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.36503,
							52.47612
						]
					}
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.36524,
							52.476
						]
					}
				},
				{
					type: 'Feature',
					properties: {
						type: 'stop',
						id: '900058101',
						name: 'S Südkreuz Bhf (Berlin)',
						location: {
							type: 'location',
							id: '900058101',
							latitude: 52.475465,
							longitude: 13.365575
						},
						products: {
							suburban: true,
							subway: false,
							tram: false,
							bus: true,
							ferry: false,
							express: true,
							regional: true
						}
					},
					geometry: {
						type: 'Point',
						coordinates: [
							13.36558,
							52.47547
						]
					}
				}
			]
		},
		tripId: '1|32794|20|86|18082019',
		line: {
			type: 'line',
			id: 's2',
			fahrtNr: '14825',
			name: 'S2',
			public: true,
			filter: false,
			adminCode: 'DBS---',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		direction: 'S Blankenfelde (TF) Bhf',
		arrivalPlatform: '1',
		plannedArrivalPlatform: '1',
		departurePlatform: '1',
		plannedDeparturePlatform: '1',
		stopovers: [{
			stop: {
				type: 'stop',
				id: '900100007',
				name: 'S Oranienburger Str. (Berlin)',
				location: {
					type: 'location',
					id: '900100007',
					latitude: 52.525158,
					longitude: 13.393064
				},
				products: {
					suburban: true,
					subway: false,
					tram: true,
					bus: false,
					ferry: false,
					express: false,
					regional: false
				}
			},
			arrival: null,
			plannedArrival: null,
			arrivalDelay: null,
			arrivalPlatform: null,
			plannedArrivalPlatform: null,
			arrivalPrognosisType: null,
			departure: '2019-08-18T14:16:00+02:00',
			plannedDeparture: '2019-08-18T14:16:00+02:00',
			departureDelay: 0,
			departurePlatform: '1',
			plannedDeparturePlatform: '1',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '900100001',
				name: 'S+U Friedrichstr. Bhf (Berlin)',
				location: {
					type: 'location',
					id: '900100001',
					latitude: 52.520268,
					longitude: 13.387149
				},
				products: {
					suburban: true,
					subway: true,
					tram: true,
					bus: true,
					ferry: false,
					express: false,
					regional: true
				}
			},
			arrival: '2019-08-18T14:18:00+02:00',
			plannedArrival: '2019-08-18T14:18:00+02:00',
			arrivalDelay: 0,
			arrivalPlatform: '11',
			plannedArrivalPlatform: '11',
			arrivalPrognosisType: 'prognosed',
			departure: '2019-08-18T14:18:00+02:00',
			plannedDeparture: '2019-08-18T14:18:00+02:00',
			departureDelay: 0,
			departurePlatform: '11',
			plannedDeparturePlatform: '11',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '900100025',
				name: 'S+U Brandenburger Tor (Berlin)',
				location: {
					type: 'location',
					id: '900100025',
					latitude: 52.51651,
					longitude: 13.381936
				},
				products: {
					suburban: true,
					subway: true,
					tram: false,
					bus: true,
					ferry: false,
					express: false,
					regional: false
				}
			},
			arrival: '2019-08-18T14:19:00+02:00',
			plannedArrival: '2019-08-18T14:19:00+02:00',
			arrivalDelay: 0,
			arrivalPlatform: '1',
			plannedArrivalPlatform: '1',
			arrivalPrognosisType: 'prognosed',
			departure: '2019-08-18T14:20:00+02:00',
			plannedDeparture: '2019-08-18T14:20:00+02:00',
			departureDelay: 0,
			departurePlatform: '1',
			plannedDeparturePlatform: '1',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '900100020',
				name: 'S+U Potsdamer Platz Bhf (Berlin)',
				location: {
					type: 'location',
					id: '900100020',
					latitude: 52.509337,
					longitude: 13.376452
				},
				products: {
					suburban: true,
					subway: false,
					tram: false,
					bus: false,
					ferry: false,
					express: false,
					regional: true
				}
			},
			arrival: '2019-08-18T14:21:00+02:00',
			plannedArrival: '2019-08-18T14:21:00+02:00',
			arrivalDelay: 0,
			arrivalPlatform: '11',
			plannedArrivalPlatform: '11',
			arrivalPrognosisType: 'prognosed',
			departure: '2019-08-18T14:22:00+02:00',
			plannedDeparture: '2019-08-18T14:22:00+02:00',
			departureDelay: 0,
			departurePlatform: '11',
			plannedDeparturePlatform: '11',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '900012101',
				name: 'S Anhalter Bahnhof (Berlin)',
				location: {
					type: 'location',
					id: '900012101',
					latitude: 52.504537,
					longitude: 13.38208
				},
				products: {
					suburban: true,
					subway: false,
					tram: false,
					bus: true,
					ferry: false,
					express: false,
					regional: false
				}
			},
			arrival: '2019-08-18T14:24:00+02:00',
			plannedArrival: '2019-08-18T14:24:00+02:00',
			arrivalDelay: 0,
			arrivalPlatform: '2',
			plannedArrivalPlatform: '2',
			arrivalPrognosisType: 'prognosed',
			departure: '2019-08-18T14:24:00+02:00',
			plannedDeparture: '2019-08-18T14:24:00+02:00',
			departureDelay: 0,
			departurePlatform: '2',
			plannedDeparturePlatform: '2',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '900058103',
				name: 'S+U Yorckstr. S2 S25 S26 U7 (Berlin)',
				location: {
					type: 'location',
					id: '900058103',
					latitude: 52.49232,
					longitude: 13.372227
				},
				products: {
					suburban: true,
					subway: false,
					tram: false,
					bus: true,
					ferry: false,
					express: false,
					regional: false
				}
			},
			arrival: '2019-08-18T14:26:00+02:00',
			plannedArrival: '2019-08-18T14:26:00+02:00',
			arrivalDelay: 0,
			arrivalPlatform: '1',
			plannedArrivalPlatform: '1',
			arrivalPrognosisType: 'prognosed',
			departure: '2019-08-18T14:27:00+02:00',
			plannedDeparture: '2019-08-18T14:27:00+02:00',
			departureDelay: 0,
			departurePlatform: '1',
			plannedDeparturePlatform: '1',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '900058101',
				name: 'S Südkreuz Bhf (Berlin)',
				location: {
					type: 'location',
					id: '900058101',
					latitude: 52.475465,
					longitude: 13.365575
				},
				products: {
					suburban: true,
					subway: false,
					tram: false,
					bus: true,
					ferry: false,
					express: true,
					regional: true
				}
			},
			arrival: '2019-08-18T14:29:00+02:00',
			plannedArrival: '2019-08-18T14:29:00+02:00',
			arrivalDelay: 0,
			arrivalPlatform: '1',
			plannedArrivalPlatform: '1',
			arrivalPrognosisType: 'prognosed',
			departure: null,
			plannedDeparture: null,
			departureDelay: null,
			departurePlatform: null,
			plannedDeparturePlatform: null,
			departurePrognosisType: null,
		}],
		remarks: [
			{
				type: 'hint',
				code: 'bf',
				text: 'barrier-free'
			},
			{
				type: 'hint',
				code: 'FB',
				text: 'Bicycle conveyance'
			}
		],
		cycle: {
			min: 300,
			max: 600,
			nr: 19
		}
	}],
	refreshToken: '¶HKI¶G@F$A=4@O=Berlin, Bodemuseum@X=13395231@Y=52521769@L=900980968@a=128@$A=1@O=S Oranienburger Str. (Berlin)@L=900100007@a=128@$201908181406$201908181416$$$1$§T$A=1@O=S Oranienburger Str. (Berlin)@L=900100007@a=128@$A=1@O=S Südkreuz Bhf (Berlin)@L=900058101@a=128@$201908181416$201908181429$      S2$$1$¶GP¶ft@0@2000@120@-1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@-1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tf@$f@$f@$f@$f@$f@$§',
	cycle: {
		min: 300
	},
	scheduledDays: Object.assign(Object.create(null), {
		'2019-08-11': true,
		'2019-08-12': true,
		'2019-08-13': true,
		'2019-08-14': true,
		'2019-08-15': true,
		'2019-08-16': true,
		'2019-08-17': true,
		'2019-08-18': true,
		'2019-08-19': true,
		'2019-08-20': true,
		'2019-08-21': true,
		'2019-08-22': true,
		'2019-08-23': true,
		'2019-08-24': true,
		'2019-08-25': true,
		'2019-08-26': true,
		'2019-08-27': true,
		'2019-08-28': true,
		'2019-08-29': true,
		'2019-08-30': true,
		'2019-08-31': true,
		'2019-09-01': true,
		'2019-09-02': true,
		'2019-09-03': true,
		'2019-09-04': true,
		'2019-09-05': true,
		'2019-09-06': true,
		'2019-09-07': true,
		'2019-09-08': true,
		'2019-09-09': true,
		'2019-09-10': true,
		'2019-09-11': true,
		'2019-09-12': true,
		'2019-09-13': true,
		'2019-09-14': true,
		'2019-09-15': true,
		'2019-09-16': true,
		'2019-09-17': true,
		'2019-09-18': true,
		'2019-09-19': true,
		'2019-09-20': true,
		'2019-09-21': true,
		'2019-09-22': true,
		'2019-09-23': true,
		'2019-09-24': true,
		'2019-09-25': true,
		'2019-09-26': true,
		'2019-09-27': true,
		'2019-09-28': true,
		'2019-09-29': true,
		'2019-09-30': true,
		'2019-10-01': true,
		'2019-10-02': true,
		'2019-10-03': true,
		'2019-10-04': true,
		'2019-10-05': true,
		'2019-10-06': true,
		'2019-10-07': true,
		'2019-10-08': true,
		'2019-10-09': true,
		'2019-10-10': true,
		'2019-10-11': true,
		'2019-10-12': true,
		'2019-10-13': true,
		'2019-10-14': true,
		'2019-10-15': true,
		'2019-10-16': true,
		'2019-10-17': true,
		'2019-10-18': true,
		'2019-10-19': true,
		'2019-10-20': true,
		'2019-10-21': true,
		'2019-10-22': true,
		'2019-10-23': true,
		'2019-10-24': true,
		'2019-10-25': true,
		'2019-10-26': true,
		'2019-10-27': true,
		'2019-10-28': false,
		'2019-10-29': false,
		'2019-10-30': false,
		'2019-10-31': false,
		'2019-11-01': false,
		'2019-11-02': false,
		'2019-11-03': false,
		'2019-11-04': false,
		'2019-11-05': false,
		'2019-11-06': false,
		'2019-11-07': false,
		'2019-11-08': false,
		'2019-11-09': false,
		'2019-11-10': false,
		'2019-11-11': false,
		'2019-11-12': false,
		'2019-11-13': false,
		'2019-11-14': false,
		'2019-11-15': false,
		'2019-11-16': false,
		'2019-11-17': false,
		'2019-11-18': false,
		'2019-11-19': false,
		'2019-11-20': false,
		'2019-11-21': false,
		'2019-11-22': false,
		'2019-11-23': false,
		'2019-11-24': false,
		'2019-11-25': false,
		'2019-11-26': false,
		'2019-11-27': false,
		'2019-11-28': false,
		'2019-11-29': false,
		'2019-11-30': false,
		'2019-12-01': false,
		'2019-12-02': false,
		'2019-12-03': false,
		'2019-12-04': false,
		'2019-12-05': false,
		'2019-12-06': false,
		'2019-12-07': false,
		'2019-12-08': false,
		'2019-12-09': false,
		'2019-12-10': false,
		'2019-12-11': false,
		'2019-12-12': false,
		'2019-12-13': false,
		'2019-12-14': true,
		'2019-12-15': false,
		'2019-12-16': false,
	}),
}

export {
	bvgJourney,
}
