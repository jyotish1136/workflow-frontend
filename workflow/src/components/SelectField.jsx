const SelectField = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="font-semibold text-gray-700">{label}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="h-9 px-3 border-2 border-gray-400 rounded-md text-sm bg-white"
      >
        <option value="">-- Select {label} --</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
