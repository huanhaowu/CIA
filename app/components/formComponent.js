const { logIn } = require('@/actions/login.js')

export default function FormComponent({ fields = {}, showPlaceholder = false, showFieldTitles = false, style, buttonText, buttonStyle, action, h2 }) {

  const acc = action === 'logIn' ? logIn : console.log('error en login')

  return (
    <form action={acc} className="flex h-full w-full flex-col items-center justify-center">
      {Object.entries(fields).map(([key, value]) => (
        <div key={key} className="flex w-full justify-start items-center">
          {showFieldTitles && <h2 className={h2}>{key}</h2>}
          <label className={style}>
            <input
              className="w-full text-lg"
              type={value}
              name={key}
              placeholder={showPlaceholder ? key : ""}
              defaultValue=""
              required
            />
          </label>
        </div>
      ))
      }
      <button className={buttonStyle} type="submit">{buttonText}</button>
    </form >
  );
}
