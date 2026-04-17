import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginInputs } from '../../modules/ui/LoginInputs/LoginInputs';
import { LoginRoleSelector, type UserRole } from '../../modules/ui/LoginRoleSelector/LoginRoleSelector';
import './LoginScreen.css';


export function LoginScreen() {
	const navigate = useNavigate();
	const [selectedRole, setSelectedRole] = useState<UserRole>(() => {
		const savedRole = window.localStorage.getItem('enteros-role');
		return savedRole === 'Bank Administrator' ? 'Bank Administrator' : 'Lawyer';
	});

	const handleAccessSystem = () => {
		window.localStorage.setItem('enteros-role', selectedRole);
		navigate('/home');
	};

	return (
		<main className="login-wrap login-screen">
		<div className="login-shell login-screen__shell">
			<div className="login-screen__hero">
			<h1 className="headline login-screen__headline">
				EnterOS <span className="accent">Enterprise Legal Operations</span>
			</h1>
			<p className="lede login-screen__lede">
				Access the case workspace, load autos and subsídios, then inspect the AI recommendation before making a decision.
			</p>
			</div>

			<section className="login-card login-screen__card">
			<LoginRoleSelector initialRole={selectedRole} onSelectRole={(role) => setSelectedRole(role)} />

			<div className="form-grid login-screen__form">

				<LoginInputs inputType='Login'></LoginInputs>
				<LoginInputs inputType='Password'></LoginInputs>

				<label className="checkbox-row">
				<input type="checkbox"/>
				<span className="muted login-screen__remember">Keep me authenticated for 24 hours</span>
				</label>

				<button type="button" className="access-button" onClick={handleAccessSystem}>
					Access System
				</button>
			</div>
			</section>
		</div>
		</main>
	);
}