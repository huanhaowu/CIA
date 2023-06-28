
export default function FormComponent({ fields = {}, showPlaceholder = false, style, buttonText, buttonStyle, action }) {
  return (
    <form className="flex h-full w-full flex-col items-center justify-center overflow-hidden ">
      {Object.entries(fields).map(([key, value]) => (
        <label key={key} className={style}>
          <input
            className="w-full text-lg"
            type={value}
            name={key}
            placeholder={showPlaceholder ? key : ""}
            required
          />
        </label>
      ))}
      <button className={buttonStyle} type="submit">{buttonText}</button>
    </form>
  );
}
