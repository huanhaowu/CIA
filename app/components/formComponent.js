import { newPassword } from '@/actions/newPassword';

const { logIn } = require('@/actions/login.js')
const { addStudent } = require('@/actions/admin/createStudent.js')
const { addAdmin } = require('@/actions/admin/createAdmin.js')
const { addTeacher } = require('@/actions/admin/createTeacher.js')


export default function FormComponent({ fields = {}, showPlaceholder = false, showFieldTitles = false, style, buttonText, buttonStyle, action, h2 }) {

  let acc;
  if (action === 'logIn') {
    acc = logIn;
  } else if (action === 'admin') {
    acc = addAdmin;
  } else if (action === 'prof') {
    acc = addTeacher;
  } else if (action === 'estu') {
    acc = addStudent;
  } else if (action === 'newPassword') {
    acc = newPassword;
  } else {
    console.log('error en seleccion de action');
  }

  console.log(action)
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
