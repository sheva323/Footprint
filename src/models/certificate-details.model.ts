export interface CertificateDetails {
	owner: string // wallet
	image: string // ipfs image
	project_id: string
	project_name: string
	project_description: string
	event_id: string // consecutivo
	event_name: string
	event_description: string
	event_duration: number
	event_co2: {
		co2_amount: number
		sections: {
			Mobility: number
			Accommodation: number
			Catering: number
			Energy: number
			Materials: number
			Transport: number
			Waste: number
		}
	}
	country: string
	participants: number
	employees: number
	heated_area: number
	air_conditioned_area: number
	number_of_people_arriving_by_car: number
	average_distance_traveled_by_car: string
	number_of_people_traveling_by_public_transport: number
	short_haul_flights: number
	medium_haul_flights: number
	long_haul_flights: number
	percentage_business_class: string
	over_night_stay_three_stars: string
	over_night_stay_four_stars: string
	over_night_stay_five_stars: string
	meal_meat_amount: string
	meal_vegetarian_amount: string
	snacks_amount: string
	soda_liters: string
	coffee_cups: string
	tea_cups: string
	wine_liters: string
	beer_liters: string
	spirits_liters: string
	power_consumption: string
	printed_matter: string
	plastics: string
	recyclable_material: string
	plant_based_materials: string
	event_stand_area: string
	transported_weight: string
	transported_distance: string
	garbage: string
	recycling: string
}
