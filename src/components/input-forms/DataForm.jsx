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
  onSubmit,
}) {
  return (
    <form className="data-form" onSubmit={onSubmit}>
      <InputWrapper title={title} wrapId={wrapId}>
        {isVisible && formData && (
          <>
            {fields.map((field) => (
              <InputItem
                key={field.name}
                label={field.label}
                type={field.type}
                name={field.name}
                onChange={onChange}
                value={formData[field.name]}
                required={field.required}
              />
            ))}
          </>
        )}
        {children}
      </InputWrapper>
    </form>
  );
}

export default DataForm;
