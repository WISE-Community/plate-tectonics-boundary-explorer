export const INIT_PLATE_STATES = ["cc", "co", "oo"];
export const END_PLATE_STATES = ["ccc", "ccd", "coc", "cod", "ooc", "ood"];
export const BOUNDARY_STATES = ["c", "d"];
export const STATE_TEXT = {
	cc: "Continental-continental",
	co: "Continental-oceanic",
	oo: "Oceanic-oceanic",
	c: "Convergent boundary",
	d: "Divergent boundary",
	ccd: "Rift",
	ccc: "Mountain",
	coc: "Subduction zone, mountains on land",
	cod: "Who knows? We don't.",
	ood: "Mid-ocean ridge",
	ooc: "Subduction zone, island arcs"
};

export const INIT_TOP_TEXT = "Choose a plate type and direction of movement to begin!";