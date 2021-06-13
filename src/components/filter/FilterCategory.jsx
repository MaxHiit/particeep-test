import React from 'react';
import './filterCategory.scss';

const FilterCategory = ({ name, handleCategorySelected }) => {
	// const [isSelected, setIsSelected] = useState(false);

	// const handleCategorySelected = () => {
	// 	setIsSelected(!isSelected);
	// };

	return (
		<>
			<button name={name} className='filter-btn' onClick={handleCategorySelected}>
				<span className='filter__icon'>X</span>
				{name}
			</button>
			{/* <button className={!isSelected ? 'filter-btn' : 'filter-btn filter-btn--selected'} {...rest}>
			<span className={!isSelected ? 'filter__icon' : 'filter__icon filter__icon--visible'}>X</span>
			{name}
		</button> */}
		</>
	);
};

export default FilterCategory;
