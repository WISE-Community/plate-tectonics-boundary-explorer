import CC from "./components/backgrounds/continental-continental.svg";
import CCC1 from "./components/backgrounds/continental-continental-convergent1.svg";
import CCC2 from "./components/backgrounds/continental-continental-convergent2.svg";
import CCC3 from "./components/backgrounds/continental-continental-convergent3.svg";
import CCC4 from "./components/backgrounds/continental-continental-convergent4.svg";
import CCD1 from "./components/backgrounds/continental-continental-divergent1.svg";
import CCD2 from "./components/backgrounds/continental-continental-divergent2.svg";
import CCD3 from "./components/backgrounds/continental-continental-divergent3.svg";
import CCD4 from "./components/backgrounds/continental-continental-divergent4.svg";
import CO from "./components/backgrounds/continental-oceanic.svg";
import COC1 from "./components/backgrounds/continental-oceanic-convergent1.svg";
import COC2 from "./components/backgrounds/continental-oceanic-convergent2.svg";
import COC3 from "./components/backgrounds/continental-oceanic-convergent3.svg";
import COC4 from "./components/backgrounds/continental-oceanic-convergent4.svg";
import OO from "./components/backgrounds/oceanic-oceanic.svg";
import OOC1 from "./components/backgrounds/oceanic-oceanic-convergent1.svg";
import OOC2 from "./components/backgrounds/oceanic-oceanic-convergent2.svg";
import OOC3 from "./components/backgrounds/oceanic-oceanic-convergent3.svg";
import OOC4 from "./components/backgrounds/oceanic-oceanic-convergent4.svg";
import OOD1 from "./components/backgrounds/oceanic-oceanic-divergent1.svg";
import OOD2 from "./components/backgrounds/oceanic-oceanic-divergent2.svg";
import OOD3 from "./components/backgrounds/oceanic-oceanic-divergent3.svg";
import OOD4 from "./components/backgrounds/oceanic-oceanic-divergent4.svg";
import C from "./components/backgrounds/convergent.svg";
import D from "./components/backgrounds/divergent.svg";
import Mountain from "./components/backgrounds/Himalayas.png";
import IslandArc from "./components/backgrounds/aleutian-alaska-arc.jpg";
import Andes from "./components/backgrounds/andes.jpg";
import Rift from "./components/backgrounds/rift.jpg";
import Ridge from "./components/backgrounds/mid-atlantic-ridge.jpg";
import AleutianAlaskaArcMask from "./components/backgrounds/aleutian-alaska-arc-mask.svg";
import HimalayasMask from "./components/backgrounds/himalayas-mask.svg";
import AndesMask from "./components/backgrounds/andes-mask.svg";
import EastAfricanRiftMask from "./components/backgrounds/east-african-rift-mask.svg";
import MidAtlanticRidgeMask from "./components/backgrounds/mid-atlantic-ridge-mask.svg";
import MountainLocation from "./components/backgrounds/himalayas-location.jpg";
import IslandArcLocation from "./components/backgrounds/aleutian-alaska-arc-location.png";
import AndesLocation from "./components/backgrounds/andes-location.jpg";
import RiftLocation from "./components/backgrounds/east-african-rift-location.jpg";
import RidgeLocation from "./components/backgrounds/mid-atlantic-ridge-location.png";

export const MIN_INPUT_LENGTH = 3;
export const INIT_PLATE_STATES = ["cc", "co", "oo"];
export const END_PLATE_STATES = ["ccc", "ccd", "coc", "cod", "ooc", "ood"];
export const BOUNDARY_STATES = ["c", "d"];
export const STATE_TEXT = {
	cc: "Continental-continental",
	co: "Continental-oceanic",
	oo: "Oceanic-oceanic",
	c: "Convergent boundary",
	d: "Divergent boundary",
	ccd: "A rift.",
	ccc: "Mountains.",
	coc: "A subduction zone at the boundary, with mountains on land.",
	cod: "We don't know. Scientists haven't found an example of this yet on Earth, but maybe it happened sometime in Earth's past?",
	ood: "A mid-ocean ridge.",
	ooc: "A subduction zone at the boundary, with island arcs."
};
export const REAL_EXAMPLES_TEXT = {
	ccd: "East African Rift",
	ccc: "Himalayas",
	coc: "Andes Mountain Range",
	ood: "Mid-Atlantic Ridge",
	ooc: "Aleutian-Alaska Arc"
};
export const TOP_TEXT = {
	realExampleSelection: "Choose a landmark to investigate!",
	plateSelection: "Choose the plate boundary that created the",
	canStart: "Write your prediction below (in a full sentence):",
	canRetry: "Looks like that's not what created the",
	canRestart: "That's what created the"
};
export const AFTER_INPUT_TEXT = {
	canStart: "then click the Play button to begin!"
};
export const SCREEN_STATES = {
	realExampleSelection: 1,
	plateSelection: 2,
	canStart: 3,
	canRetry: 4,
	canRestart: 5
};
export const LABELS = {
	oceanic: "Oceanic crust",
	continental: "Continental crust",
	mantle: "Mantle"
}

export function backgroundForState(state, frame) {
	switch (state) {
		case "cc":
			return CC;
		case "ccc":
			switch (frame) {
				case 1:
					return CCC1;
				case 2:
					return CCC2;
				case 3:
					return CCC3;
				case 4:
					return CCC4;
				default:
					return null;
			}
		case "ccd":
			switch (frame) {
				case 1:
					return CCD1;
				case 2:
					return CCD2;
				case 3:
					return CCD3;
				case 4:
					return CCD4;
				default:
					return null;
			}
		case "co":
		case "cod":
			return CO;
		case "coc":
			switch (frame) {
				case 1:
					return COC1;
				case 2:
					return COC2;
				case 3:
					return COC3;
				case 4:
					return COC4;
				default:
					return null;
			}
		case "oo":
			return OO;
		case "ooc":
			switch (frame) {
				case 1:
					return OOC1;
				case 2:
					return OOC2;
				case 3:
					return OOC3;
				case 4:
					return OOC4;
				default:
					return null;
			}
		case "ood":
			switch (frame) {
				case 1:
					return OOD1;
				case 2:
					return OOD2;
				case 3:
					return OOD3;
				case 4:
					return OOD4;
				default:
					return null;
			}
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

export function locationForState(state) {
	switch (state) {
		case "ccc":
			return MountainLocation;
		case "ccd":
			return RiftLocation;
		case "coc":
			return AndesLocation;
		case "ooc":
			return IslandArcLocation;
		case "ood":
			return RidgeLocation;
		default:
			return null;
	}
}

export function maskForState(state) {
	switch (state) {
		case "ccc":
			return HimalayasMask;
		case "ccd":
			return EastAfricanRiftMask;
		case "coc":
			return AndesMask;
		case "ooc":
			return AleutianAlaskaArcMask;
		case "ood":
			return MidAtlanticRidgeMask;
		default:
			return null;
	}
}

export function maskClassForState(state) {
	switch (state) {
		case "ccc":
			return "HimalayasMask";
		case "ccd":
			return "EastAfricanRiftMask";
		case "coc":
			return "AndesMask";
		case "ooc":
			return "AleutianAlaskaArcMask";
		case "ood":
			return "MidAtlanticRidgeMask";
		default:
			return null;
	}
}

export function splitEndState(state) {
	const plateType = state.substring(0, 2);
	const boundaryType = state.substring(2, 3);
	return [plateType, boundaryType];
}