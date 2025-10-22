import InputWrapper from "./InputWrapper";
import InputItem from "./InputItem";

function DataForm({
  title,
  wrapId,
  isVisible,
  formData,
  onChange,
  children,
  fields = [],
}) {
  return (
    <InputWrapper title={title} wrapId={wrapId}>
      {isVisible && (
        <>
          {fields.map((field) => (
            <InputItem
              key={field.name}
              label={field.label}
              type={field.type}
              name={field.name}
              onChange={onChange}
              value={formData[field.name]}
              />
          ))}
        </>
      )}
      {children}
    </InputWrapper>
  )
};

export default DataForm;