export const INIT_PLATE_STATES = ["cc", "co", "oo"];
export const END_PLATE_STATES = ["ccc", "ccd", "coc", "cod", "ooc", "ood"];
export const BOUNDARY_STATES = ["c", "d"];
export const END_STATE = {
	ccd: {
		text: "Rift"
	},
	ccc: {
		text: "Mountain",
	},
	coc: {
		text: "Subduction zone, mountains on land",
	},
	cod: {
		text: "Who knows? We don't."
	},
	ood: {
		text: "Mid-ocean ridge",
	},
	ooc: {
		text: "Subduction zone",
	}
};

export const INIT_TOP_TEXT = "Choose a plate type and direction of movement to begin!";