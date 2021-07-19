//	@ghasemkiani/jsdox/renderer

const {cutil} = require("@ghasemkiani/base/cutil");
const {WDocument} = require("@ghasemkiani/wjsdom/document");
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

module.exports = {Renderer};
