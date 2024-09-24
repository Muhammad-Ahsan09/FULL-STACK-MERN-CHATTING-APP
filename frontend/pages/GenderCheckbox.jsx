const GenderCheckbox = ({handleCheckboxChange, selectedGender}) => {

    return <div className="gender-checkbox-container">
    <input type="checkbox" name="male" className="checkbox" checked={selectedGender === 'male'}
    onChange={() => {handleCheckboxChange('male')}}/> <span>Male</span>
    <input type="checkbox" name="female" className="checkbox" checked={selectedGender === 'female'}
    onChange={() => {handleCheckboxChange('female')}}/> <span>Female</span>
</div>
}

export default GenderCheckbox;