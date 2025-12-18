import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners);
		this.name = options.name || '';
		this.emitter = options.emitter;
		this.unsubscribes = [];

		this.prepare();
	}

	prepare() {}

	toHTML() {
		return '';
	}

	$emit(event, ...args) {
		this.emitter.emit(event, ...args);
	}

	$on(event, fn) {
		const unsubscribe = this.emitter.subscribe(event, fn);
		this.unsubscribes.push(unsubscribe);
	}

	init() {
		this.initDOMListeners();
	}

	destroy() {
		this.removeDOMListeners();
		this.unsubscribes.forEach(unsubscribe => unsubscribe());
	}
}
