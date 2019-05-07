//	@ghasemkiani/jsdox/renderer

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {WDocument} = require("@ghasemkiani/wjsdom/document");
const {Renderer: BaseRenderer} = require("@ghasemkiani/dox/renderer");

class Renderer extends BaseRenderer {
	createWDocument() {
		return new WDocument();
	}
}

module.exports = {Renderer};
