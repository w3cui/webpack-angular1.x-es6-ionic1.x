import modularEidtType from './modular-eidt-type.js';
import modularEidtForm from './modular-eidt-form.js';
import ui from './ui/locat-open-tpl.js';
import webupload from './ui/form-web-upload.js';
import simditor from './ui/form-simditor.js';

import service from'./service';

export default () => {
	modularEidtType();
	modularEidtForm();
	ui();
	webupload();
	simditor();
	service();
}