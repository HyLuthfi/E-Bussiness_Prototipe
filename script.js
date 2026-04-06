// === SCREEN NAVIGATION ===
function goTo(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// === AUTH TABS ===
function switchAuthTab(tab, btn) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('form-' + tab).classList.add('active');
}

// === ONBOARDING STEPS ===
function nextStep(step) {
    document.querySelectorAll('.onboarding-step').forEach(s => s.classList.remove('active'));
    document.getElementById('ob-step-' + step).classList.add('active');
    // Update progress bar
    for (let i = 1; i <= 3; i++) {
        const prog = document.getElementById('prog-' + i);
        prog.className = 'progress-step';
        if (i < step) prog.classList.add('done');
        else if (i === step) prog.classList.add('current');
    }
}

function selectGender(el) {
    document.querySelectorAll('.gender-option').forEach(g => g.classList.remove('selected'));
    el.classList.add('selected');
}

function selectGoal(el) {
    document.querySelectorAll('.goal-card').forEach(g => g.classList.remove('selected'));
    el.classList.add('selected');
}

// === QUANTITY CONTROL ===
let quantity = 1;
function changeQty(delta) {
    quantity = Math.max(1, Math.min(10, quantity + delta));
    document.getElementById('qty-display').textContent = quantity;
}

// === FILTER CHIPS ===
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.filter-chips').forEach(container => {
        container.addEventListener('click', function(e) {
            if (e.target.classList.contains('chip')) {
                container.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
                e.target.classList.add('active');
            }
        });
    });

    // Payment method selection
    document.querySelectorAll('.payment-methods').forEach(container => {
        container.addEventListener('click', function(e) {
            const method = e.target.closest('.pay-method');
            if (method) {
                container.querySelectorAll('.pay-method').forEach(m => m.classList.remove('selected'));
                method.classList.add('selected');
            }
        });
    });
});
