export default function FormField({label, name, type = 'text'}) {
  return (
    <label className='form-field'>
        <div>{label}</div>
        <input type={type} name={name} />
    </label>
  )
}