// src/pages/gurps.ts
import { baseRoll } from '../gurps/checks';

export default `
	<h2>GURPS Page</h2>
	<div style="display: flex; align-items: center; gap: 1em; margin-top: 1em;">
		<input id="success-number" type="number" min="1" step="1" placeholder="Enter whole number" style="width: 180px; display:none;" value="10" />
		<button id="roll-btn" disabled style="display:none;">
			<span id="roll-btn-text">Roll</span>
			<span id="roll-spinner" style="display:none; margin-left:8px; vertical-align:middle;">
				<svg width="18" height="18" viewBox="0 0 50 50">
					<circle cx="25" cy="25" r="20" fill="none" stroke="#888" stroke-width="5" stroke-linecap="round" stroke-dasharray="31.4 31.4" transform="rotate(-90 25 25)">
						<animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.8s" repeatCount="indefinite"/>
					</circle>
				</svg>
			</span>
		</button>
		<span id="roll-result" style="font-weight: bold; margin-left: 1em;"></span>
	</div>
`;

function setupGurpsListeners() {
	const input = document.getElementById('success-number') as HTMLInputElement | null;
	const btn = document.getElementById('roll-btn') as HTMLButtonElement | null;
	const result = document.getElementById('roll-result');
	if (input && btn && result) {
		input.style.display = '';
		btn.style.display = '';
		input.addEventListener('input', () => {
			btn.disabled = !input.value || !input.checkValidity();
		});
		btn.addEventListener('click', async () => {
			btn.disabled = true;
			const btnText = document.getElementById('roll-btn-text');
			const spinner = document.getElementById('roll-spinner');
			if (btnText && spinner) {
				btnText.style.display = 'none';
				spinner.style.display = 'inline-block';
			}
			result.textContent = 'Rolling...';
			const val = parseInt(input.value, 10);
			try {
				if (!isNaN(val)) {
					const rollResult = await baseRoll(val);
					result.textContent = rollResult;
				} else {
					result.textContent = '';
				}
			} catch (err) {
				result.textContent = 'An error occurred. Please try again.';
			}
			if (btnText && spinner) {
				btnText.style.display = '';
				spinner.style.display = 'none';
			}
			btn.disabled = false;
		});
		// Enable button if default value is valid
		btn.disabled = !input.value || !input.checkValidity();
	}
}

if (typeof window !== 'undefined') {
	// Call setup after DOM insertion
	setTimeout(setupGurpsListeners, 0);
	window.addEventListener('popstate', () => {
		setTimeout(setupGurpsListeners, 0);
	});
}
