import {cutil} from "@ghasemkiani/base";
import {Renderer as BaseRenderer} from "@ghasemkiani/dox";
import {iwjsdom} from "@ghasemkiani/jsdom";

class Renderer extends cutil.mixin(BaseRenderer, iwjsdom) {
	static {
		cutil.extend(this.prototype, {
			defaultText: '<html xmlns="http://www.w3.org/1999/xhtml"></html>',
			defaultMime: "application/xml",
		});
	}
}

export {Renderer};
