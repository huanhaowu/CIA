const { addPost } = require('@/actions/post.js')

export default function AddPostForm() {


  return (
    <form action={addPost}>
      <label>
        Clave:
        <input type="text" name="asignatura_clave" />
      </label>
      <label>
        Nombre:
        <input type="text" name="nombre" />
      </label>
      <label>
        Creditos:
        <input type="number" name="creditos" />
      </label>
      <label>
        Deshabilitado:
        <input type="checkbox" name="deshabilitado" value="false" />
      </label>
      <button type="submit">Add Post</button>
    </form>
  );
}
