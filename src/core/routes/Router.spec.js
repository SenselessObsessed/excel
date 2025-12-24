import { Router } from './Router';
import { Page } from '../Page/Page';

class DashboardPage extends Page {
	getRoot() {
		const root = document.createElement('div');
		root.innerHTML = 'dashboard';
		return root;
	}
}
class ExcelPage extends Page {}

describe('Router', () => {
	let router;
	let $root;

	beforeEach(() => {
		$root = document.createElement('div');
		router = new Router($root, {
			dashboard: DashboardPage,
			excel: ExcelPage,
		});
	});

	test('should be defined', () => {
		expect(router).toBeDefined;
	});

	test('should render loader Page', () => {
		router.changePageHandler();
		expect($root.innerHTML).not.toBe('<div>dashboard</div>');
	});

	test('should render Dashboard Page after loading', () => {
		router.changePageHandler();
		setTimeout(() => {
			expect($root.innerHTML).not.toBe('<div>dashboard</div>');
		}, 5000);
	});
});
