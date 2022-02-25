//	@ghasemkiani/jsdox/renderer

import {cutil} from "@ghasemkiani/base";
import {WDocument} from "@ghasemkiani/wjsdom";
const {Renderer: BaseRenderer} = require("@ghasemkiani/dox/renderer");

class Renderer extends BaseRenderer {
	createWDocument() {
		let mime = this.mime;
		return new WDocument({mime});
	}
}
cutil.extend(Renderer.prototype, {
	mime: "application/xml",
});

export {Renderer};
