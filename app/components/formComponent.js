const { logIn } = require('@/actions/login.js')


export default function FormComponent({ fields = {}, showPlaceholder = false, style, buttonText, buttonStyle, action }) {



  const acc = action === 'logIn' ? logIn : console.log('error en login')

  return (
    <form action={acc} className="flex h-full w-full flex-col items-center justify-center overflow-hidden ">
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
