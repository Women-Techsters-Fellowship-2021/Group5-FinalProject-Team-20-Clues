import React from 'react';
import { useState } from 'react';
import Gender from './Gender';
import Age from './Age';
import Orientation from './Orientation';
import Country from './Country';
import Habits from './Habits';
import Challenges from './Challenges';
import Suicide from './Suicide';
import Therapy from './Therapy';
import Relationship from './Relationship';
import Sleeping from './Sleeping';
import Communication from './Communication';
import Illness from './Illness';
import Anxiety from './Anxiety';
import Confirm from './Confirm';


const Steps = () => {
	const [activeStep, setActiveStep] = useState(0);

	const getSteps = () => {
		return ["Welcome", "Gender", "Age"];
	};

	const steps = getSteps();

	const [multiFormValues, setMultiFormValues] = useState({
		first: '',
		last: '',
		new: '',
		old: '',
		out: '',
	});

	const handleNext = () => {
		setActiveStep((nextStep) => nextStep + 1);
	};

	const handleBack = () => {
		setActiveStep((previousStep) => previousStep - 1);
	};

	const handleChange = (input) => (e) => {
		setMultiFormValues({ ...multiFormValues, [input]: e.target.value });
	};

	return (
		<>
			{activeStep === 0 && (<Gender handleChange={handleChange} />)}
			{activeStep === 1 && (
				<Age values={multiFormValues} handleChange={handleChange} />
			)}
			{activeStep === 2 && (
				<Orientation values={multiFormValues} handleChange={handleChange} />
			)}
			{activeStep === 3 && (
				<Country values={multiFormValues} handleChange={handleChange} />
			)}
			{activeStep === 4 && (
				<Habits values={multiFormValues} handleChange={handleChange} />
			)}
			{activeStep === 5 && (
				<Challenges values={multiFormValues} handleChange={handleChange} />
			)}
			{activeStep === 6 && (
				<Suicide values={multiFormValues} handleChange={handleChange} />
			)}
			{activeStep === 7 && (
				<Therapy values={multiFormValues} handleChange={handleChange} />
			)}
			{activeStep === 8 && (
				<Relationship values={multiFormValues} handleChange={handleChange} />
			)}
			{activeStep === 9 && (
				<Sleeping values={multiFormValues} handleChange={handleChange} />
			)}
			{activeStep === 10 && (
				<Communication values={multiFormValues} handleChange={handleChange} />
			)}
			{activeStep === 11 && (
				<Illness values={multiFormValues} handleChange={handleChange} />
			)}
			{activeStep === 12 && (
				<Anxiety values={multiFormValues} handleChange={handleChange} />
			)}
			{activeStep === 13 && (
				<Confirm values={multiFormValues} handleChange={handleChange} />
			)}

			<div className="nav-btns">
				<button
					disabled={activeStep === 0 && activeStep === 13}
					className="prev-btn btns"
					onClick={handleBack}
				>
					Back
				</button>

				<button className="next-btn btns" onClick={handleNext} disabled={activeStep === 13}>
					{activeStep === steps.length - 2 ? 'Submit' : 'Next'}
				</button>
			</div>
		</>
	);
};

export default Steps;
