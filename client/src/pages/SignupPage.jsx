import React, { useState } from 'react';

import SignupForm from '../components/userForms/SignupForm';
import MacroGoalsForm from '../components/userForms/MacroGoalsForm';

import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

export default function SignupPage() {
	const [ showConfirmMacrosForm, setShowConfirmMacrosForm ] = useState(false);
	const navigate = useNavigate();

	const handleSignupFormSubmit = () => {
		setShowConfirmMacrosForm(true);
	};

	const handleMacroGoalsFormSubmit = () => {
		// go to /dashboard
		navigate('/dashboard');
	};

	return (
		<div className="max-w-7xl mx-auto h-[91vh]">
			<div className="max-w-xl p-2 mx-auto">

				<div className="flex justify-center mt-8 items-center">

					{!showConfirmMacrosForm &&
						<div className="w-full flex justify-center">
							<SignupForm onSignup={handleSignupFormSubmit} />
						</div>}

					{showConfirmMacrosForm &&
						<div className="w-full flex justify-center">
							<MacroGoalsForm onSubmit={handleMacroGoalsFormSubmit} />
						</div>}
				</div>

			</div>
		</div>
	);
}
