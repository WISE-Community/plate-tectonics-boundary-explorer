import React from "react";
import CC from "./components/backgrounds/continental-continental.svg";
import CCC from "./components/backgrounds/continental-continental-convergent.svg";
import CCD from "./components/backgrounds/continental-continental-divergent.svg";
import CO from "./components/backgrounds/continental-oceanic.svg";
import COC from "./components/backgrounds/continental-oceanic-convergent.svg";
import OO from "./components/backgrounds/oceanic-oceanic.svg";
import OOC from "./components/backgrounds/oceanic-oceanic-convergent.svg";
import OOD from "./components/backgrounds/oceanic-oceanic-divergent.svg";
import C from "./components/backgrounds/convergent.svg";
import D from "./components/backgrounds/divergent.svg";
import Mountain from "./components/backgrounds/Himalayas.png";
import IslandArc from "./components/backgrounds/aleutian-alaska-arc.jpg";
import Andes from "./components/backgrounds/andes.jpg";
import Rift from "./components/backgrounds/rift.jpg";
import Ridge from "./components/backgrounds/mid-atlantic-ridge.jpg";

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
export const REAL_EXAMPLES_TEXT = {
	ccd: "East African Rift",
	ccc: "Himalayas",
	coc: "Andes Mountain Range",
	ood: "Mid-Atlantic Ridge",
	ooc: "Aleutian-Alaska Arc"
};
export const INIT_TOP_TEXT = "Choose the plate boundary that created the";
export const SCREEN_STATES = {
	realExampleSelection: 1,
	plateSelection: 2,
	canStart: 3,
	canRestart: 4
};

export function backgroundForState(state) {
	switch (state) {
		case "cc":
			return CC;
		case "ccc":
			return CCC;
		case "ccd":
			return CCD;
		case "co":
		case "cod":
			return CO;
		case "coc":
			return COC;
		case "oo":
			return OO;
		case "ooc":
			return OOC;
		case "ood":
			return OOD;
		default:
			return null;
	}
}

export function boundaryForState(state) {
	switch (state) {
		case "c":
			return C;
		case "d":
			return D;
		default:
			return null;
	}
}

export function examplesForState(state) {
	switch (state) {
		case "ccc":
			return Mountain;
		case "ccd":
			return Rift;
		case "coc":
			return Andes;
		case "ooc":
			return IslandArc;
		case "ood":
			return Ridge;
		default:
			return null;
	}
}